import closeConnection from "../../apiUtils/closeConnection"
import connectToDb from "../../apiUtils/connectToDb"
import internalServerError from "../../errors/internalServerError"
import jwt from "jsonwebtoken"
import setCookie from "../../apiUtils/setCookie"
import isAuthenticated from "../../middlewares/isAuthenticated"

const login = async (req, res) => {
    const { username, password } = JSON.parse(req.body)
    if (
        username === process.env.PD_USERNAME &&
        password === process.env.PASSWORD
    ) {
        const payload = { username }
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "24h",
        })
        setCookie(res, "auth-token", token, {
            maxAge: 60 * 60 * 24,
            path: "/",
        })
        return res.end(res.getHeader("Set-Cookie"))
    }
    res.status(400).json({ data: "Login failed", success: false })
}

const getAuth = async (req, res) => {
    return isAuthenticated(req, res, () =>
        res.status(200).json({ data: "Authenticated", success: true })
    )
}

export default async function auth(req, res) {
    try {
        await connectToDb()
    } catch (err) {
        console.log(err)
        return internalServerError(res, err)
    }
    const { method } = req
    switch (method) {
        case "POST":
            return login(req, res)
        case "GET":
            return getAuth(req, res)
        default:
            res.status(405).json({
                data: "Method not allowed",
                success: false,
            })
    }
    closeConnection()
}
