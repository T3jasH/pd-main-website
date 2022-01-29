import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import CommonFooter from "../../components/CommonFooter"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowBlack.svg"
import useNavTheme from "../../hooks/useNavTheme"
import pd from "../../assets/pdLogoBlue.svg"
import Link from "next/link"

export async function getStaticProps(context) {
    try {
        const url =
            process.env.NODE_ENV === "production"
                ? `https://${process.env.WEBSITE_ADDR}/api/jobs`
                : "http://localhost:3000/api/jobs"
        const resp = await fetch(url)
        const { data: jobs } = await resp.json()
        return {
            props: {
                jobs,
            },
            revalidate: 60 * 10, // Revalidate every 10 mins
        }
    } catch (err) {
        console.log(err)
        return {
            props: {
                jobs: [],
            },
            revalidate: 60 * 10,
        }
    }
}

export default function Careers({ jobs }) {
    const navRef = useRef(null)

    useNavTheme("#company", "--bgColor: #f4f4f4; --textColor: #0a0a0a;", navRef)

    const getTime = (date) => {
        const now = new Date().getTime()
        let diff = (now - date) / 1000 // In seconds
        if (diff < 10 * 60) {
            return "10 mins"
        }
        diff = diff / 60 // In mins
        if (diff < 60) {
            return `${Math.floor(diff)} mins`
        }
        diff = diff / 60 // In Hours
        if (diff < 24) {
            return `${Math.floor(diff)} hours`
        }
        diff = diff / 24 // In days
        if (diff < 7) {
            return `${Math.floor(diff)} days`
        }
        diff = diff / 7 // weeks
        if (diff < 52) {
            return `${Math.floor(diff)} weeks`
        }
        diff = diff / 52 // years
        return `${Math.floor(diff)} years`
    }
    return (
        <React.Fragment>
            <Head>
                <title>Careers at Prodevans</title>
                <meta
                    name="description"
                    content="Build your future with Prodevans. Join us now!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className="company-careers">
                <div className="nav-info">
                    <p>Company</p>
                    <div className="arrow">
                        <Image
                            alt="arrow"
                            layout="responsive"
                            objectFit="fill"
                            src={arrow}
                        />
                    </div>
                    <h1>About the Company</h1>
                </div>
                <div className="slogan">
                    <h2>Build your future with Prodevans. Join us now!</h2>
                </div>
                <form className="jobs-filter">
                    <div>
                        <input
                            type="text"
                            placeholder="Keyword"
                            aria-label="Keyword"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Company"
                            aria-label="Company"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            aria-label="Location"
                        />
                        <input
                            type="text"
                            placeholder="Job Type"
                            aria-label="Job Type"
                        />
                        <input
                            type="submit"
                            value="Search"
                            aria-label="Search"
                        />
                    </div>
                </form>
                <div className="jobs-list">
                    {jobs.map((job) => (
                        <div key={job._id} className="job">
                            <div className="left">
                                {
                                    // Might need other logos too here
                                }
                                <div className="job-img">
                                    <Image
                                        alt={"Prodevans"}
                                        layout="responsive"
                                        objectFit="fill"
                                        src={pd}
                                    />
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <div>
                                        <h3>{job.title}</h3>
                                        <p>{job.company}</p>
                                    </div>
                                    <Link href={`/company/jobs?id=${job._id}`}>
                                        Apply
                                    </Link>
                                </div>
                                <div>
                                    <p>{job.type}</p>
                                    <p>{job.location}</p>
                                    <p>
                                        {`Posted ${getTime(
                                            new Date(job.createdAt).getTime()
                                        )} ago`}
                                    </p>
                                </div>
                                <div>
                                    <p>{job.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CommonFooter />
        </React.Fragment>
    )
}
