import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import Navbar from "../../components/Navbar"
import useNavTheme from "../../hooks/useNavTheme"
import pd from "../../assets/pdLogoBlue.svg"
import Select from "react-select"
import getTime from "../../clientUtils/getTime"
import styles from "../../styles/company/careers.module.scss"
import NavPath from "../../components/NavPath"
import useActiveLink from "../../hooks/useActiveLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faClock,
    faDesktop,
    faMapMarker,
} from "@fortawesome/free-solid-svg-icons"

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

export default function Careers({ jobs, toggleNav }) {
    const navRef = useRef(null)
    const [locations, setLocations] = useState([])
    const [jobTypes, setJobTypes] = useState([])

    const [selectedLocation, setSelectedLocation] = useState(null)
    const [selectedJobType, setSelectedJobType] = useState(null)
    const [keyword, setKeyword] = useState("")
    const [isOpen, setOpen] = useState(false)
    const theme = "light"

    useNavTheme(
        "#company-btn",
        "--bgColor: #f4f4f4; --textColor: #0a0a0a;",
        navRef,
        "company-careers-btn"
    )
    useActiveLink("company-btn", "a:nth-child(2)", isOpen, "#fbfbfb")

    useEffect(() => {
        const updatedJobTypes = []
        const updatedLocations = []
        jobs.forEach((job) => {
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
        setLocations(updatedLocations)
        setJobTypes(updatedJobTypes)
    }, [jobs])
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
            <Navbar
                ref={navRef}
                toggleNav={(state) => {
                    setOpen(state)
                    toggleNav(state)
                }}
                theme={theme}
            />
            {!isOpen ? (
                <div className={styles["company-careers"]}>
                    <NavPath
                        main={"Company"}
                        subPath={"Careers"}
                        theme="light"
                    />
                    <div className={styles.slogan}>
                        <h2>Build your future with Prodevans. Join us now!</h2>
                    </div>
                    <form className={styles["jobs-filter"]}>
                        <div>
                            <input
                                type="text"
                                placeholder="Search by keyword"
                                aria-label="Keyword"
                                onChange={(e) =>
                                    setKeyword(
                                        e.target.value.trim().toLowerCase()
                                    )
                                }
                            />
                        </div>
                        <div>
                            <Select
                                className={styles.dropdown}
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
                                className={styles.dropdown}
                                isDisabled={false}
                                isClearable={true}
                                isSearchable={true}
                                options={jobTypes}
                                placeholder={"Select job type"}
                                aria-label={"Select job type"}
                                onChange={(e) => setSelectedJobType(e)}
                            />
                        </div>
                    </form>
                    <div className={styles["jobs-list"]}>
                        {jobs.length === 0 ? (
                            <h3> No jobs found</h3>
                        ) : (
                            jobs
                                .filter((job) =>
                                    selectedLocation
                                        ? job.location ===
                                          selectedLocation.value
                                        : true
                                )
                                .filter((job) =>
                                    selectedJobType
                                        ? job.type === selectedJobType.value
                                        : true
                                )
                                .filter((job) =>
                                    keyword.length
                                        ? job.title
                                              .split(" ")
                                              .findIndex((word) => {
                                                  return word
                                                      .toLowerCase()
                                                      .includes(keyword)
                                              }) !== -1 ||
                                          job.description
                                              .split(" ")
                                              .findIndex((word) => {
                                                  return word
                                                      .toLowerCase()
                                                      .includes(keyword)
                                              }) !== -1
                                        : true
                                )
                                .map((job) => (
                                    <div key={job._id} className={styles.job}>
                                        <div className={styles.left}>
                                            {
                                                // Might need other logos too here
                                            }
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
                                                    <h3>{job.title}</h3>
                                                </div>
                                                <a
                                                    target={"_blank"}
                                                    href={job.link}
                                                    rel={"noreferrer"}
                                                >
                                                    Apply
                                                </a>
                                            </div>
                                            <div>
                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faDesktop}
                                                        className={
                                                            styles[
                                                                "job-type-icon"
                                                            ]
                                                        }
                                                    />
                                                    {job.type}
                                                </p>
                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faMapMarker}
                                                        className={
                                                            styles[
                                                                "location-icon"
                                                            ]
                                                        }
                                                    />
                                                    {job.location}
                                                </p>
                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faClock}
                                                        className={
                                                            styles["clock-icon"]
                                                        }
                                                    />
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
                                ))
                        )}
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}
