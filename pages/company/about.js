import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import Head from "next/head"
import squares from "../../assets/squares.png"
import deepak from "../../assets/deepakMishra.png"
import arvind from "../../assets/arvindKumarSinha.png"
import dilip from "../../assets/dilipHublikar.png"
import gagan from "../../assets/gaganPattanayak.png"
import santha from "../../assets/santhaKumar.png"
import sushma from "../../assets/sushmaShriram.png"
import linkedin from "../../assets/linkedin.png"
import gmail from "../../assets/gmail.png"
import blueSquares from "../../assets/blueSquares.png"
import Link from "next/link"
import styles from "../../styles/company/about.module.scss"
import navstyles from "../../styles/navbar.module.scss"
import styleMobile from "../../styles/navMobile.module.scss"
import NavPath from "../../components/NavPath"
import useNavTheme from "../../hooks/useNavTheme"
import useActiveLink from "../../hooks/useActiveLink"

export default function About() {
    const navRef = useRef(null)
    const { ref, inView } = useInView({
        rootMargin: "-50% 0%",
    })
    const [isOpen, setOpen] = useState(false)
    const profiles = [
        {
            name: "Deepak Mishra",
            designation: "Founder and CEO",
            content:
                "Technology Transformation Leader with more than 19 years' experience in areas of Technology Infrastructure, Development, QA, & Support. Drove technology transformation programs across lines of business. Passionate about delivering value to businesses through Cloud Technologies. Transformed legacy applications for migration to Cloud Platforms and ongoing Management across industries (BFSI, Retail, Government) in India & APAC. Provided top-of-the-line Consulting Services to prioritise applications, defining the path to Production and documenting business impact and ROI.",
            linkedin: "https://www.linkedin.com/in/deepak-mishra-ceo-prodevans",
            gmail: "mailto:dipankar@prodevans.com",
            src: deepak,
        },
        {
            name: "Arvind Kumar Sinha",
            designation: "Chief Operating & Administration Officer (COO/CAO)",
            content:
                "A chartered Engineer with achievement in Strategical Planning and implementation of Steel Industry related capital Projects in India and abroad; also international speaker on Steel buildings . Have completed Information System deployment (as Team leader of Engineering division) on IBM ES9000 mainframe computer, way back between 1989-1992. Represented India in Trade delegation to Ethiopia. Contributed as the sports administrator to the Bihar Basketball Association and was a University level player. Now contributing his expertise post retirement as COO to the rapidly growing company, Prodevans.",
            linkedin:
                "https://www.linkedin.com/in/arvind-kumar-sinha-685a3812b",
            gmail: "mailto:arvind@prodevans.com",
            src: arvind,
        },
        {
            name: "S Santha Kumar",
            designation: "Chief Financial Officer (CFO)",
            content:
                "Santha leads our company in his vital role of managing finance and accounting; ensuring our company’s profitability; handling financial audits, payroll, budgets, taxation, payables, cash flow, financial corporate services, international subsidiaries, and the overall health of our financial statements, reporting where he keeps vigilant of our revenue and cost, and areas of financial opportunities to invest. He also leads our company in legal matters, including preparing and negotiating customer contracts and Master Service Agreements; managing internal compliance and audit certifications; advising on corporate governance and strategic initiatives; advising on matters of risk management; and facilitating the Executive Committee's work with Prodevans's Board.",
            linkedin: "https://www.linkedin.com/in/santha-kumar-62a26a1a1",
            gmail: "mailto:santha.kumar@prodevans.com",
            src: santha,
        },
        {
            name: "Gagan Pattanayak ",
            designation: "Chief Revenue Officer (CRO)",
            content:
                "Gagan helps us hone our planning to enable a multi-channel Go to Market sales strategy. He does this by managing our sales and revenue operations with a focus on front line sales (direct and indirect). He also oversees our sales support teams (Pre-sales, Design teams) with the goal of bringing revenue opportunities to closure. In addition to this, he is responsible for all commercial contracts.",
            linkedin: "https://www.linkedin.com/in/gagan-p",
            gmail: "mailto:gagan@prodevans.com",
            src: gagan,
        },
        {
            name: "Dilip Hublikar",
            designation: "Head of Sales and Business Development",
            content:
                "Dilip is an Engineer & MBA with 14 years of rich experience in Sales, Alliance and Relationship Mgmt. Certified Software Asset Manager and optimization expert in s/w and cloud services offerings with proven track of helping global customers on ROI and lower TCO in their IT spends over years across OEM and Technologies. Specialist in creating and managing multi vendor eco system with 360 degree management of software and solution Lifecycle.",
            linkedin: "https://www.linkedin.com/in/dilip-hublikar-3a660719",
            gmail: "mailto:dilip@prodevans.com",
            src: dilip,
        },
        {
            name: "Sushma Shriram",
            designation: "HR Manager and Business Development",
            content:
                "Sushma, a Post Graduate in Financial Management with 10 years of industry experience, takes care of day to day operations and fulfills talent acquisition. In addition to her current role as HR Manager, Sushma Shriram will be stepping into managing the Systems and Infrastructure team to enable faster time to resolution and implementing proactive measures to better administer our customers' environments.",
            linkedin: "https://www.linkedin.com/in/sushma-shriram-0b42421b3",
            gmail: "mailto:sushma@prodevans.com",
            src: sushma,
        },
    ]
    useNavTheme(
        "#company-btn",
        "--bgColor: #1b1b1b; --textColor: #fff;",
        navRef
    )
    useActiveLink("company-btn", "a:nth-child(1)")
    useEffect(() => {
        const nav = document.querySelector(`.${navstyles.nav}`)
        const navMobile = document.querySelector(`.${styleMobile["nav"]}`)
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
                )
            } else if (navMobile) {
                navMobile.setAttribute(
                    "style",
                    "--bgColor: #1b1b1b; --textColor: #fff;"
                )
            }
        } else if (nav) {
            nav.setAttribute("style", "--bgColor: #1b1b1b; --textColor: #fff;")
        } else if (navMobile) {
            navMobile.setAttribute(
                "style",
                "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
            )
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
            <Navbar ref={navRef} toggleNav={(state) => setOpen(state)} />
            {!isOpen ? (
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
                            <iframe
                                className={styles.video}
                                width="560"
                                height="315"
                                src="https://www.youtube-nocookie.com/embed/c3pOa1qXW3A"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className={styles.right}>
                            <p>
                                Prodevans will help transform IT Organizations
                                with on-demand, scalable, reliable Infra based
                                state-of-the-art cloud &#38; container
                                technologies. We have an excellent track record
                                in implementing solutions across India &#38;
                                ASEAN regions. As one of the pioneers in
                                implementing Red Hat Cloud Solutions across the
                                region, we bring a technology know-how that is
                                second to none
                            </p>
                        </div>
                    </main>
                </div>
            ) : null}
            {!isOpen ? (
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
                                        <a
                                            href={profile.linkedin}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <div className={styles.icon}>
                                                <Image
                                                    alt={"LinkedIn"}
                                                    layout="responsive"
                                                    objectFit="fill"
                                                    src={linkedin}
                                                />
                                            </div>
                                        </a>
                                        <a
                                            href={profile.gmail}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <div className={styles.icon}>
                                                <Image
                                                    alt={"Gmail"}
                                                    layout="responsive"
                                                    objectFit="fill"
                                                    src={gmail}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
            {!isOpen ? (
                <div className={styles["about-company-footer"]}>
                    <h2>Manage any project with Prodevans</h2>
                    <p>
                        We combine the practice of managing and analysing
                        projects to its fullest potential and maximise its
                        effectiveness in order to stay on top of everything.
                    </p>
                    <Link href={"/#contact-us"}>Contact Us</Link>
                    <div className={`${styles.squares} ${styles["top-right"]}`}>
                        <Image
                            alt="squares graphic"
                            layout="responsive"
                            objectFit="fill"
                            src={blueSquares}
                        />
                    </div>
                    <div
                        className={`${styles.squares} ${styles["bottom-left"]}`}
                    >
                        <Image
                            alt="squares graphic"
                            layout="responsive"
                            objectFit="fill"
                            src={blueSquares}
                        />
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}
