import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import CommonFooter from "../../components/CommonFooter"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowBlack.svg"
import useNavTheme from "../../hooks/useNavTheme"
import pd from "../../assets/pdLogoBlue.svg"
import Link from "next/link"
import Select from "react-select"

export async function getStaticProps(context) {
    try {
        const url = "http://localhost:3000/api/jobs"
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
    const [locations, setLocations] = useState([])
    const [jobTypes, setJobTypes] = useState([])
    const [companies, setCompanies] = useState([])

    const [selectedLocation, setSelectedLocation] = useState(null)
    const [selectedJobType, setSelectedJobType] = useState(null)
    const [selectedCompany, setSelectedCompany] = useState(null)

    const [keyword, setKeyword] = useState("")

    useNavTheme("#company", "--bgColor: #f4f4f4; --textColor: #0a0a0a;", navRef)

    useEffect(() => {
        const updatedCompanies = []
        const updatedJobTypes = []
        const updatedLocations = []
        jobs.forEach((job) => {
            if (
                updatedCompanies.findIndex(
                    (company) => job.company === company.value
                ) === -1
            ) {
                updatedCompanies.push({
                    value: job.company,
                    label: job.company,
                })
            }
            if (
                updatedJobTypes.findIndex(
                    (jobType) => job.type === jobType.value
                ) === -1
            ) {
                updatedJobTypes.push({ value: job.type, label: job.type })
            }
            if (
                updatedLocations.findIndex(
                    (location) => job.location === location.value
                ) === -1
            ) {
                updatedLocations.push({
                    value: job.location,
                    label: job.location,
                })
            }
        })
        setCompanies(updatedCompanies)
        setLocations(updatedLocations)
        setJobTypes(updatedJobTypes)
    }, [jobs])
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
                            onChange={(e) =>
                                setKeyword(e.target.value.trim().toLowerCase())
                            }
                        />
                    </div>
                    <div>
                        <Select
                            className="dropdown"
                            classNamePrefix={"custom"}
                            isDisabled={false}
                            isClearable={true}
                            isSearchable={true}
                            options={locations}
                            placeholder={"Select location"}
                            aria-label={"Select location"}
                            onChange={(e) => {
                                setSelectedLocation(e)
                            }}
                        />
                        <Select
                            className="dropdown"
                            classNamePrefix={"custom"}
                            isDisabled={false}
                            isClearable={true}
                            isSearchable={true}
                            options={jobTypes}
                            placeholder={"Select job type"}
                            aria-label={"Select job type"}
                            onChange={(e) => setSelectedJobType(e)}
                        />
                        <Select
                            className="dropdown"
                            classNamePrefix={"custom"}
                            isDisabled={false}
                            isClearable={true}
                            isSearchable={true}
                            options={companies}
                            placeholder={"Select company"}
                            aria-label={"Select company"}
                            onChange={(e) => setSelectedCompany(e)}
                        />
                    </div>
                </form>
                <div className="jobs-list">
                    {jobs
                        .filter((job) =>
                            selectedLocation
                                ? job.location === selectedLocation.value
                                : true
                        )
                        .filter((job) =>
                            selectedJobType
                                ? job.type === selectedJobType.value
                                : true
                        )
                        .filter((job) =>
                            selectedCompany
                                ? job.company === selectedCompany.value
                                : true
                        )
                        .filter((job) =>
                            keyword.length
                                ? job.title.split(" ").findIndex((word) => {
                                      console.log(
                                          "TITLE " +
                                              word +
                                              " " +
                                              keyword +
                                              " " +
                                              word.includes(keyword)
                                      )
                                      return word
                                          .toLowerCase()
                                          .includes(keyword)
                                  }) !== -1 ||
                                  job.description
                                      .split(" ")
                                      .findIndex((word) => {
                                          console.log(
                                              "DESCR " +
                                                  word +
                                                  " " +
                                                  keyword +
                                                  " " +
                                                  word.includes(keyword)
                                          )
                                          return word
                                              .toLowerCase()
                                              .includes(keyword)
                                      }) !== -1
                                : true
                        )
                        .map((job) => (
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
                                        <Link
                                            href={`/company/jobs?id=${job._id}`}
                                        >
                                            Apply
                                        </Link>
                                    </div>
                                    <div>
                                        <p>{job.type}</p>
                                        <p>{job.location}</p>
                                        <p>
                                            {`Posted ${getTime(
                                                new Date(
                                                    job.createdAt
                                                ).getTime()
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
