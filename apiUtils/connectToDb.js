import mongoose from "mongoose"

export default async function connectToDb() {
    const uri =
        process.env.NODE_ENV === "production"
            ? process.env.MONGO_URI
            : process.env.DEV_MONGO_URI
    if (!uri) {
        throw new Error("Env not intialized")
    }
    try {
        return await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        throw error
    }
}
