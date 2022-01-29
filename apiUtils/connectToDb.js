import mongoose from "mongoose"

export default async function connectToDb() {
    if (!process.env.MONGO_URI) {
        throw new Error("connection unsuccessful")
    }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        throw error
    }
}
