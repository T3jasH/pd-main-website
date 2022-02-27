import React, { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import Navbar from "../../components/Navbar"
import CommonFooter from "../../components/CommonFooter"
import Image from "next/image"
import Head from "next/head"
import squares from "../../assets/squares.png"
import deepak from "../../assets/deepakMishra.png"
import arvind from "../../assets/arvindKumarSinha.png"
import dilip from "../../assets/dilipHublikar.png"
import gagan from "../../assets/gaganPattanayak.jpg"
import santha from "../../assets/santhaKumar.png"
import sushma from "../../assets/sushmaShriram.png"
import twt from "../../assets/twitter.svg"
import fb from "../../assets/fb.svg"
import gPlus from "../../assets/gPlus.svg"
import blueSquares from "../../assets/blueSquares.png"
import Link from "next/link"
import styles from "../../styles/company/about.module.scss"
import navstyles from "../../styles/navbar.module.scss"
import NavPath from "../../components/NavPath"
import useNavTheme from "../../hooks/useNavTheme"

export default function About() {
    const navRef = useRef(null)
    const { ref, inView } = useInView({
        rootMargin: "-45% 0%",
    })
    const profiles = [
        {
            name: "Deepak Mishra",
            designation: "Founder and CEO",
            content:
                "Technology Transformation Leader with more than 19 years experience in areas of Technology Infrastructure, Development, QA, & Support. Drove technology transformation programs across lines of business. Passionate about delivering value to businesses through Cloud Technologies. Transformed legacy applications for migration to Cloud Platforms and ongoing Management across industries (BFSI, Retail, Government) in India & APAC. Provided top of the line Consulting Services to prioritise applications, defining the path to Production and documenting business impact and ROI.",
            twt: "",
            fb: "",
            gPlus: "",
            src: deepak,
        },
        {
            name: "Arvind Kumar Sinha",
            designation: "Chief Operating & Administration Officer (COO/CAO)",
            content:
                "A chartered Engineer with achievement in Strategical Planning and implementation of Steel Industry related capital Projects in India and abroad and also International speaker on Steel buildings . Have completed Information System deployment (as Team leader of Engineering division) on IBM ES9000 mainframe computer , way back between 1989-1992. Represented India in Trade delegation to Ethiopia. Also a sports administrator (Bihar Basketball Association) and University level player - now contributing the expertise after retirement, to startup company Prodevans as COO.",
            twt: "",
            fb: "",
            gPlus: "",
            src: arvind,
        },
        {
            name: "S Santha Kumar",
            designation: "Chief Financial Officer (CFO)",
            content:
                "Santha leads our company in his vital role of managing finance and accounting; ensuring our company’s profitability; handling financial audits, payroll, budgets, taxation, payables, cash flow, financial corporate services, international subsidiaries, and the overall health of our financial statements, reporting where he keeps vigilant of our revenue and cost, and areas of financial opportunities to invest. He also leads our company in legal matters, including preparing and negotiating customer contracts and Master Service Agreements; managing internal compliance and audit certifications; advising on corporate governance and strategic initiatives; advising on matters of risk management; and facilitating the Executive Committee's work with Prodevans's Board.",
            twt: "",
            gPlus: "",
            fb: "",
            src: santha,
        },
        {
            name: "Gagan Pattanayak ",
            designation: "Chief Revenue Officer (CRO)",
            content:
                "Gagan helps us hone our planning to enable a multi-channel Go to Market sales strategy. He does this by managing our sales and revenue operations with a focus on front line sales (direct and indirect). He also oversees our sales support teams (Pre-sales, Design teams) with the goal of bringing revenue opportunities to closure. In addition to this, he is responsible for all commercial contracts.",
            twt: "",
            gPlus: "",
            fb: "",
            src: gagan,
        },
        {
            name: "Dilip Hublikar",
            designation: "Head of Sales and Business Development",
            content:
                "Dilip is an Engineer & MBA with 14 years of rich experience in Sales, Alliance and Relationship Mgmt. Certified Software Asset Manager and optimization expert in s/w and cloud services offerings with proven track of helping global customers on ROI and lower TCO in their IT spends over years across OEM and Technologies. Specialist in creating and managing multi vendor eco system with 360 degree management of software and solution Lifecycle.",
            twt: "",
            gPlus: "",
            fb: "",
            src: dilip,
        },
        {
            name: "Sushma Shriram",
            designation: "HR Manager and Business Development",
            content:
                "Sushma, a Post Graduate in Financial Management with 10 years of industry experience, takes care of day to day operations and fulfills talent acquisition. In addition to her current role as HR Manager, Sushma Shriram will be stepping into managing the Systems and Infrastructure team to enable faster time to resolution and implementing proactive measures to better administer our customers' environments.",
            twt: "",
            gPlus: "",
            fb: "",
            src: sushma,
        },
    ]
    useNavTheme(
        "#company-btn",
        "--bgColor: #1b1b1b; --textColor: #fff;",
        navRef
    )
    useEffect(() => {
        const nav = document.querySelector(`.${navstyles.nav}`)
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
                )
            }
        } else if (nav) {
            nav.setAttribute("style", "--bgColor: #1b1b1b; --textColor: #fff;")
        }
    }, [inView])
    return (
        <React.Fragment>
            <Head>
                <title>About Prodevans</title>
                <meta
                    name="description"
                    content="Prodevans helps transform IT Organizations with On-demand, Scalable, Reliable Infra based on state of the art tech."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className={styles["about-company"]}>
                <NavPath
                    theme="dark"
                    main="Company"
                    subPath="About The Company"
                />
                <div
                    className={`${styles.squares} ${styles["squares-top-right"]}`}
                >
                    <Image
                        alt="squares graphic"
                        layout="responsive"
                        objectFit="fill"
                        src={squares}
                    />
                </div>
                <main>
                    <div className={styles.left}>
                        <div
                            className={`${styles.squares} ${styles["squares-bottom-right"]}`}
                        >
                            <Image
                                alt="squares graphic"
                                layout="responsive"
                                objectFit="fill"
                                src={squares}
                            />
                        </div>
                        <div className={styles.gray}></div>
                    </div>
                    <div className={styles.right}>
                        <p>
                            Prodevans will help transform IT Organizations with
                            On-demand, Scalable, Reliable Infra based on the
                            state-of-the-art cloud & container technologies. We
                            have an excellent track record in implementing
                            Solutions across India & ASEAN. As one of the
                            pioneers in implementing Red Hat Cloud Solutions
                            across the region, we bring a technology know how
                            that is second to none.
                        </p>
                    </div>
                </main>
            </div>
            <div className={styles.management} ref={ref}>
                <h2>Management Profiles</h2>
                <div className={styles["profile-list"]}>
                    {profiles.map((profile) => (
                        <div key={profile.name} className={styles.profile}>
                            <div className={styles.left}>
                                <div className={styles["profile-img"]}>
                                    <Image
                                        alt={profile.name}
                                        layout="responsive"
                                        objectFit="fill"
                                        src={profile.src}
                                    />
                                </div>
                                <h3>{profile.name}</h3>
                                <p>{profile.designation}</p>
                            </div>
                            <div className={styles.right}>
                                <p>{profile.content}</p>
                                <div className={styles.socials}>
                                    <div>
                                        <Image
                                            alt={"Twitter"}
                                            layout="responsive"
                                            objectFit="fill"
                                            src={twt}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            alt={"Facebook"}
                                            layout="responsive"
                                            objectFit="fill"
                                            src={fb}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            alt={"G Plus"}
                                            layout="responsive"
                                            objectFit="fill"
                                            src={gPlus}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles["about-company-footer"]}>
                <h2>Manage any project with Prodevans</h2>
                <p>
                    We combine the practice of managing and analysing projects
                    to its fullest potential, and to maximise it&#39;s
                    effectiveness in order to stay on top of everything.
                </p>
                <Link href={"/#contact-us"}>Start free trial</Link>
                <div className={`${styles.squares} ${styles["top-right"]}`}>
                    <Image
                        alt="squares graphic"
                        layout="responsive"
                        objectFit="fill"
                        src={blueSquares}
                    />
                </div>
                <div className={`${styles.squares} ${styles["bottom-left"]}`}>
                    <Image
                        alt="squares graphic"
                        layout="responsive"
                        objectFit="fill"
                        src={blueSquares}
                    />
                </div>
            </div>
            <CommonFooter />
        </React.Fragment>
    )
}
