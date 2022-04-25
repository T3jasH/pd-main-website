import Head from "next/head"
import Image from "next/image"
import React, { useRef, useState } from "react"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowWhite.svg"
import useNavTheme from "../../hooks/useNavTheme"
import healthcare from "../../assets/healthcare.png"
import financial2 from "../../assets/financial2.png"
import styles from "../../styles/industries.module.scss"
import useActiveLink from "../../hooks/useActiveLink"

export default function Healthcare({ toggleNav }) {
    const navRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    useNavTheme(
        "#industries-btn",
        "--bgColor: transparent; --textColor: #f4f4f4; --boxShadow: none; position: absolute;",
        navRef
    )
    useActiveLink("industries-btn", "a:nth-child(1)", isOpen)
    return (
        <React.Fragment>
            <Head>
                <title>Prodevans in Finance</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                ref={navRef}
                toggleNav={(state) => {
                    toggleNav(state)
                    setIsOpen(state)
                }}
            />
            {!isOpen ? (
                <div className={styles.industries}>
                    <div className={styles["industries-img"]}>
                        <Image
                            alt="Insurance"
                            layout="fill"
                            objectFit="fill"
                            src={healthcare}
                        />
                        <div className={`nav-info ${styles["nav-info"]}`}>
                            <p>Industries</p>
                            <div className={`arrow ${styles.arrow}`}>
                                <Image
                                    alt="arrow"
                                    layout="responsive"
                                    objectFit="fill"
                                    src={arrow}
                                />
                            </div>
                            <h1>Financial and Banking</h1>
                        </div>
                        <h2>
                            Prodevans&apos; Machine Learning Platform, iVentura™
                        </h2>
                        <p>
                            The Data Detective, is an ecosystem where developers
                            and data scientists can easily access and consume AI
                            and ML technologies One-Stop Shop for Data
                            Scientists to Code, Collaborate, Deploy &#38; Share
                            Machine Learning Models
                        </p>
                    </div>
                    <div className={`${styles["healthcare-container"]}`}>
                        <div className={styles.left}>
                            <h2>App Transformation Services</h2>
                            <p>
                                Container Technology is very quickly changing
                                how organizations deploy application workloads -
                                be it on-prem or public cloud.{" "}
                            </p>
                            <p>
                                Through all this, Kubernetes has emerged as the
                                de-facto deployment &#38; orchestration platform
                                for managing container workloads advantages.
                            </p>
                            <p>
                                But how and where do organizations begin this
                                journey into Container adoption? There is a
                                severe shortage of skills in this area.
                            </p>
                            <p>
                                There is a steep learning curve for
                                organizations - to to cut through this landscape
                                to take applications to production and
                                thereafter, to maintain them successfully.
                            </p>
                        </div>
                        <div className={`${styles["healthcare-img"]}`}>
                            <Image
                                alt="arrow"
                                layout="responsive"
                                objectFit="fill"
                                src={financial2}
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}
