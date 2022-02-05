import mongoose from "mongoose"

export default async function closeConnection() {
    try {
        await mongoose.connection.close()
        console.log("Connection closed")
    } catch (err) {
        console.log(err)
        throw err
    }
}
