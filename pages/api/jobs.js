import connectToDb from "../../apiUtils/connectToDb"
import closeConnection from "../../apiUtils/closeConnection"
import internalServerError from "../../errors/internalServerError"
import isAuthenticated from "../../middlewares/isAuthenticated"
import Job from "../../models/job"

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({})
    res.status(200).json({ data: jobs, success: true })
}

const isEmpty = (item) => {
    if (item === undefined || item === "") {
        return true
    }
    return false
}

const createJob = async (req, res) => {
    const { title, description, location, type, company, link } = JSON.parse(
        req.body
    )
    if (
        isEmpty(title) ||
        isEmpty(description) ||
        isEmpty(location) ||
        isEmpty(type) ||
        isEmpty(company) ||
        isEmpty(link)
    ) {
        return res.status(422).json({
            data: "Title, description, location, company and type, are all required fields",
            success: false,
        })
    }
    try {
        const job = new Job({
            title,
            description,
            location,
            type,
            company,
            link,
        })
        await job.save()
        res.status(201).json({ data: job, success: true })
    } catch (err) {
        return internalServerError(res, err)
    }
}

const deleteJob = async (req, res) => {
    const { id } = req.query
    if (id.length !== 24) {
        return res.status(422).json({
            data: "Illegal id, must be of 24 characters",
            success: false,
        })
    }
    try {
        const job = await Job.findById(id)
        if (!job) {
            return res
                .status(404)
                .json({ data: "Job not found", success: false })
        }
        await Job.findByIdAndDelete(id)
        return res.status(200).json({ data: "Job deleted", success: true })
    } catch (err) {
        internalServerError(res, err)
    }
}

const updateJob = async (req, res) => {
    const { title, description, location, type, company } = JSON.stringify(
        req.body
    )
    const { id } = req.query
    if (id.length !== 24) {
        return res.status(422).json({
            data: "Illegal id, must be of 24 characters",
            success: false,
        })
    }
    try {
        const job = await Job.findById(id)
        if (!job) {
            return res
                .status(404)
                .json({ data: "No job found", success: false })
        }
        // If entity is not empty, apply update. Otherwise just use previous value
        const updatedJob = await Job.findByIdAndUpdate(id, {
            title: title ? title : job.title,
            company: company ? company : job.company,
            description: description ? description : job.description,
            location: location ? location : job.location,
            type: type ? type : job.type,
        })
        res.status(200).json({
            data: "Job updated successfully",
            success: true,
        })
    } catch (err) {
        internalServerError(res, err)
    }
}

export default async function jobHandler(req, res) {
    try {
        await connectToDb()
    } catch (err) {
        console.log(err)
        return internalServerError(res, err)
    }
    const { method } = req
    switch (method) {
        case "GET":
            return getAllJobs(req, res)
        case "POST":
            return isAuthenticated(req, res, createJob)
        case "DELETE":
            return isAuthenticated(req, res, deleteJob)
        case "PATCH":
            return isAuthenticated(req, res, updateJob)
        default:
            res.status(405).json({
                data: "Method not allowed",
                success: false,
            })
    }
    closeConnection()
}
