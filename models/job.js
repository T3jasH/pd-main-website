import mongoose from "mongoose"

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Job title cannot be empty"],
    },
    description: {
        type: String,
        required: [true, "Job description cannot be empty"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    location: {
        type: String,
        required: [true, "Job location cannot be empty"],
    },
    type: {
        type: String,
        required: [true, "Job type cannot be empty"],
    },
    company: {
        type: String,
        required: [true, "Company cannot be empty"],
    },
})

export default mongoose.models.Job || mongoose.model("Job", JobSchema)
