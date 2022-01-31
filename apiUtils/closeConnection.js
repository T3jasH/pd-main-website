import mongoose from "mongoose"

export default async function closeConnection() {
    try {
        await mongoose.connection.close()
    } catch (err) {
        console.log(err)
        throw err
    }
}
