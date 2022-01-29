export default function internalServerError(res, err) {
    console.log(err)
    return res.status(500).json({ data: err, success: false })
}
