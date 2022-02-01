export default function isAuthenticated(req, res, next) {
    const { username, password } = req.body
    if (
        username === process.env.PD_USERNAME &&
        password === process.env.PASSWORD
    ) {
        next(req, res)
        return
    }
    res.status(401).json({
        success: false,
        data: "Incorrect username or password",
    })
}
