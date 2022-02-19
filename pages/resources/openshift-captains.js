import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import CommonFooter from "../../components/CommonFooter"
import Navbar from "../../components/Navbar"
import useNavTheme from "../../hooks/useNavTheme"
import openshift from "../../assets/openshift.png"
import openshiftFtBg from "../../assets/openshiftFooterBg.png"
import openshift2 from "../../assets/openshift2.png"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import NavPath from "../../components/NavPath"
import styles from "../../styles/resources/openshift-captains.module.scss"

export default function OpenShift() {
    const navRef = useRef(null)
    useNavTheme(
        "#resources",
        "--bgColor: #f4f4f4; --textColor: #0a0a0a;",
        navRef
    )
    const { ref: footerRef, inView } = useInView({
        rootMargin: "-25% 0%",
    })
    useEffect(() => {
        if (inView) {
            navRef.current.setAttribute(
                "style",
                "--bgColor: #576CB3; --textColor: #fbfbfb;"
            )
        } else {
            navRef.current.setAttribute(
                "style",
                "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
            )
        }
    }, [inView])
    return (
        <React.Fragment>
            <Head>
                <title>Prodevans Brochures</title>
                <meta
                    name="description"
                    content="Published articles by Prodevans"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className={styles.openshift}>
                <NavPath
                    subPath={"OpenShift"}
                    main={"Resources"}
                    theme="light"
                />
                <div className={styles.banner}>
                    <h2>Who is an OpenShift Captain?</h2>
                    <h3>
                        Captain are the strongest advocates of openshift; they
                        are the Openshift evangelists. They do this by
                        encouraging Openshift use, Participating in events and
                        by sharing their knowledge
                    </h3>
                </div>
                <div className={styles.description}>
                    <div className={styles.left}>
                        <h2 className="coloured">What</h2>
                        <h2>Why</h2>
                        <h2>How</h2>
                    </div>
                    <div className={styles.right}>
                        <h2>What do they do?</h2>
                        <div className="right-img">
                            <Image
                                alt={"Graphic"}
                                layout="responsive"
                                objectFit="fill"
                                src={openshift}
                            />
                        </div>
                        <p>
                            They will actively promote the program. They will be
                            arranging, coordinating forums where OpenShift will
                            be discussed. They will contribute and encourage
                            contributions from participants. They will provide
                            guidance & mentorship when needed. They will share
                            calendars, upcoming events, announcements, features
                            - everything you would expect a strong proponent to
                            do.
                        </p>
                    </div>
                </div>
                <div className={styles.description}>
                    <h2>What do Captains get?</h2>
                    <p>
                        They stand to gain a lot In return for their efforts.
                        They will get high visibility for their contributions on
                        various forums and social media. They will also stand to
                        gain exposure through speaking opportunities. Other
                        benefits include:
                    </p>
                    <p className={styles.red}>
                        Paid trip to Red Hat Tech Expo in APAC (2019 Tech Expo
                        was held in Seoul)
                    </p>
                    <p className={styles.red}>
                        A Lenovo Tablet absolutely free (worth INR 10k)
                    </p>
                    <p className={styles.red}>
                        One OpenShift training seat – worth INR 56K – absolutely
                        free
                    </p>
                </div>
                <div className={styles.description}>
                    <div className={styles.left}>
                        <h2>How to know what other Captains are up to?</h2>
                        <p>
                            The gitHub repo provides all the material that the
                            Captains are working on. In addition, social media
                            presence such as twitter provides another channel of
                            communication. You can also visit their profile
                            pages
                        </p>
                    </div>
                    <div className={styles.right}>
                        <h2>Who delivers the training?</h2>
                        <p>
                            Prodevans delivers training through Certified Red
                            Hat Trainers
                        </p>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.left}>
                        <h2>Anything specific the Captain has to deliver?</h2>
                        <ol>
                            <li>One workshop opportunity in your company</li>
                            <li>Enroll 40 people in that workshop</li>
                            <li>Coordinate the workshop successfully</li>
                            <li>Schedule 4 follow up workshops in a year</li>
                        </ol>
                    </div>
                    <div className={styles.right}>
                        <div className={styles["right-img"]}>
                            <Image
                                alt={"Graphic"}
                                layout="responsive"
                                objectFit="fill"
                                src={openshift2}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["openshift-footer"]} ref={footerRef}>
                <h2>What does Openshift look for when selecting captains?</h2>
                <p>
                    First & foremost, they should be passionate about technology
                    and should have a willingness to learn. They should be
                    working on OpenShift in some capacity. They should strive to
                    keep themselves up to date on the latest offerings of
                    OpenShift. One specific activity that all are required to do
                    is Open iVentura Project - iVentura uses OpenDataHub is a
                    framework for building AI/ML functions with OpenShift. By
                    the way iVentura has plenty of use cases.
                </p>
                <Link href="https://www.iventura.ai/">Iventura</Link>
                <div className={styles["footer-img"]}>
                    <Image
                        alt={"Footer Background"}
                        layout="responsive"
                        objectFit="fill"
                        src={openshiftFtBg}
                    />
                </div>
            </div>
            <CommonFooter />
        </React.Fragment>
    )
}
