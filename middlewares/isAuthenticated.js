import jwt from "jsonwebtoken"

const authenticate = (req, res, next, token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.username === process.env.PD_USERNAME) {
            return next(req, res)
        } else {
            return res.status(403).json({
                success: false,
                data: "You are not authorized to view this page",
            })
        }
    } catch (err) {
        res.status(401).json({
            success: false,
            msg: "Token expired",
        })
    }
}

export default function isAuthenticated(req, res, next) {
    const bearer = req.headers["authorization"]
    if (!bearer) {
        const token = req.headers.cookie.replace("auth-token=", "")
        if (!token) {
            return res.status(401).json({
                success: false,
                data: "User not logged in",
            })
        }
        return authenticate(req, res, next, token)
    }
    const token = bearer.split(" ")[1]
    if (!token) {
        return res.status(401).json({
            success: false,
            data: "User not logged in",
        })
    }
    authenticate(req, res, next, token)
}
