import Head from "next/head"
import Image from "next/image"
import React, { useState } from "react"
import Navbar from "../components/Navbar"
import pd from "../assets/pdLogoBlue.svg"
import getTime from "../clientUtils/getTime"
import styles from "../styles/company/careers.module.scss"

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie || "auth-token="
    const token = cookie.replace("auth-token=", "")
    const url = "http://localhost:3000/api/auth"
    try {
        const authResponse = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        if (!authResponse.ok) {
            throw new Error("You are not logged in")
        }
        const jobUrl = "http://localhost:3000/api/jobs"
        const jobResponse = await fetch(jobUrl)
        if (!jobResponse.ok) {
            return {
                props: {
                    jobs: [],
                    isAuth: true,
                },
            }
        }
        const { data: jobs } = await jobResponse.json()
        return {
            props: {
                jobs,
                isAuth: true,
            },
        }
    } catch (err) {
        return {
            props: {
                isAuth: false,
                errorMessage: err.message,
            },
        }
    }
}

export default function Admin({ isAuth, jobs }) {
    const [jobList, setJobList] = useState(jobs)
    const [newJob, setNewJob] = useState({
        company: "",
        title: "",
        location: "",
        type: "",
        link: "",
        description: "",
    })
    const [errorMessage, setErrorMessage] = useState("")

    const addJob = async () => {
        setErrorMessage("")
        try {
            const resp = await fetch("/api/jobs", {
                method: "POST",
                body: JSON.stringify(newJob),
                credentials: "include",
            })
            const json = await resp.json()
            if (!resp.ok) {
                setErrorMessage(json.data)
                return
            }

            setNewJob({
                company: "",
                title: "",
                location: "",
                type: "",
                link: "",
                description: "",
            })
            setJobList((prevList) => [...prevList, { ...json.data }])
        } catch (err) {
            setErrorMessage(err.message)
        }
    }

    const deleteJob = async (id) => {
        try {
            const resp = await fetch(`/api/jobs?id=${id}`, {
                method: "DELETE",
                credentials: "include",
            })
            if (!resp.ok) {
                console.log(await resp.json())
                return
            }
            setJobList((prevList) => prevList.filter((job) => job._id !== id))
        } catch (err) {
            console.log(err.message)
        }
    }

    const updateJob = async (id) => {
        try {
            const resp = await fetch(`/api/jobs?id=${id}`, {
                method: "PUT",
                body: JSON.stringify(jobList.find((job) => job._id === id)),
            })
            if (!resp.ok) {
                console.log(await resp.json())
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>Prodevans Admin</title>
                <meta
                    name="description"
                    content="Prodevans is a leading technology solution provider specialising in end to end DevOps offerings that streamline and automate IT delivery."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles["company-careers"]}>
                {isAuth ? (
                    <>
                        <div className={styles["jobs-list"]}>
                            <p className={styles["error-message"]}>
                                {errorMessage}
                            </p>
                            <div className={styles.job}>
                                <div className={styles.right}>
                                    <div>
                                        <div>
                                            <input
                                                type={"text"}
                                                value={newJob.title}
                                                placeholder="job title"
                                                onChange={(e) =>
                                                    setNewJob({
                                                        ...newJob,
                                                        title: e.target.value,
                                                    })
                                                }
                                            />
                                            <input
                                                type={"text"}
                                                value={newJob.company}
                                                placeholder="company"
                                                onChange={(e) =>
                                                    setNewJob({
                                                        ...newJob,
                                                        company: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <button onClick={() => addJob()}>
                                            Add Job
                                        </button>
                                    </div>
                                    <div>
                                        <input
                                            type={"text"}
                                            value={newJob.type}
                                            onChange={(e) =>
                                                setNewJob({
                                                    ...newJob,
                                                    type: e.target.value,
                                                })
                                            }
                                            placeholder="job type"
                                        />
                                        <input
                                            type={"text"}
                                            value={newJob.location}
                                            onChange={(e) =>
                                                setNewJob({
                                                    ...newJob,
                                                    location: e.target.value,
                                                })
                                            }
                                            placeholder="job location"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            type={"text"}
                                            value={newJob.description}
                                            placeholder="job description"
                                            onChange={(e) =>
                                                setNewJob({
                                                    ...newJob,
                                                    description: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type={"text"}
                                            value={newJob.link}
                                            placeholder="application link"
                                            onChange={(e) =>
                                                setNewJob({
                                                    ...newJob,
                                                    link: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            {jobList.map((job) => (
                                <div key={job._id} className={styles.job}>
                                    <div className={styles.left}>
                                        <div className={styles["job-img"]}>
                                            <Image
                                                alt={"Prodevans"}
                                                layout="responsive"
                                                objectFit="fill"
                                                src={pd}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.right}>
                                        <div>
                                            <div>
                                                <input
                                                    type={"text"}
                                                    value={job.title}
                                                    placeholder="job title"
                                                    onChange={(e) =>
                                                        setJobList((prevJobs) =>
                                                            prevJobs.map(
                                                                (prevJob) => {
                                                                    if (
                                                                        prevJob._id ===
                                                                        job._id
                                                                    ) {
                                                                        return {
                                                                            ...prevJob,
                                                                            title: e
                                                                                .target
                                                                                .value,
                                                                        }
                                                                    }
                                                                    return prevJob
                                                                }
                                                            )
                                                        )
                                                    }
                                                />
                                                <input
                                                    type={"text"}
                                                    value={job.company}
                                                    placeholder="company"
                                                    onChange={(e) =>
                                                        setJobList((prevJobs) =>
                                                            prevJobs.map(
                                                                (prevJob) => {
                                                                    if (
                                                                        prevJob._id ===
                                                                        job._id
                                                                    ) {
                                                                        return {
                                                                            ...prevJob,
                                                                            company:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        }
                                                                    }
                                                                    return prevJob
                                                                }
                                                            )
                                                        )
                                                    }
                                                />
                                            </div>
                                            <button
                                                onClick={() =>
                                                    updateJob(job._id)
                                                }
                                            >
                                                Save
                                            </button>
                                        </div>
                                        <div>
                                            <input
                                                type={"text"}
                                                value={job.type}
                                                placeholder="job type"
                                                onChange={(e) =>
                                                    setJobList((prevJobs) =>
                                                        prevJobs.map(
                                                            (prevJob) => {
                                                                if (
                                                                    prevJob._id ===
                                                                    job._id
                                                                ) {
                                                                    return {
                                                                        ...prevJob,
                                                                        type: e
                                                                            .target
                                                                            .value,
                                                                    }
                                                                }
                                                                return prevJob
                                                            }
                                                        )
                                                    )
                                                }
                                            />
                                            <input
                                                type={"text"}
                                                value={job.location}
                                                placeholder="job location"
                                                onChange={(e) =>
                                                    setJobList((prevJobs) =>
                                                        prevJobs.map(
                                                            (prevJob) => {
                                                                if (
                                                                    prevJob._id ===
                                                                    job._id
                                                                ) {
                                                                    return {
                                                                        ...prevJob,
                                                                        location:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    }
                                                                }
                                                                return prevJob
                                                            }
                                                        )
                                                    )
                                                }
                                            />
                                            <p>
                                                {`Posted ${getTime(
                                                    new Date(
                                                        job.createdAt
                                                    ).getTime()
                                                )} ago`}
                                            </p>
                                        </div>
                                        <div>
                                            <textarea
                                                type={"text"}
                                                value={job.description}
                                                placeholder="job description"
                                                onChange={(e) =>
                                                    setJobList((prevJobs) =>
                                                        prevJobs.map(
                                                            (prevJob) => {
                                                                if (
                                                                    prevJob._id ===
                                                                    job._id
                                                                ) {
                                                                    return {
                                                                        ...prevJob,
                                                                        description:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    }
                                                                }
                                                                return prevJob
                                                            }
                                                        )
                                                    )
                                                }
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type={"text"}
                                                value={job.link}
                                                placeholder="application link"
                                                onChange={(e) =>
                                                    setJobList((prevJobs) =>
                                                        prevJobs.map(
                                                            (prevJob) => {
                                                                if (
                                                                    prevJob._id ===
                                                                    job._id
                                                                ) {
                                                                    return {
                                                                        ...prevJob,
                                                                        link: e
                                                                            .target
                                                                            .value,
                                                                    }
                                                                }
                                                                return prevJob
                                                            }
                                                        )
                                                    )
                                                }
                                            />
                                            <button
                                                style={{
                                                    backgroundColor: "#d62c20",
                                                }}
                                                onClick={() =>
                                                    deleteJob(job._id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>You are not logged in</p>
                )}
            </div>
        </React.Fragment>
    )
}
