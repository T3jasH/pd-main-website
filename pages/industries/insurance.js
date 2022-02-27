import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowWhite.svg"
import useNavTheme from "../../hooks/useNavTheme"
import insurance from "../../assets/insurance.png"
import insurance2 from "../../assets/insurance2.png"
import styles from "../../styles/industries.module.scss"

export default function Telecom() {
    const navRef = useRef(null)
    useNavTheme(
        "#industries-btn",
        "--bgColor: transparent; --textColor: #f4f4f4; --boxShadow: none",
        navRef
    )
    return (
        <React.Fragment>
            <Head>
                <title>Prodevans in Insurance</title>
                <meta
                    name="description"
                    content="With our extensive use
                        of our ML techniques, we bring out the best of the
                        statistics and infrastructure for insurance companies"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className={styles.industries}>
                <div className={styles["industries-img"]}>
                    <Image
                        alt="Insurance"
                        layout="fill"
                        objectFit="fill"
                        src={insurance}
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
                        <h1>Insurance</h1>
                    </div>
                    <h2>Rethinking And Innovating Insurance.</h2>
                    <p>
                        For insurance companies finding and building customer
                        relationships and managing risks are key to creating a
                        growing, profitable business. We with our extensive use
                        of our ML techniques can bring out the best of the
                        statistics and infrastructure for you. Our next
                        generation architecture and software make sure that you
                        have the best of the digital transformation from your
                        traditional business processes.
                    </p>
                </div>
                <div
                    className={`${styles["edu-container"]} ${styles["tele-container"]}`}
                >
                    <div className={styles.left}>
                        <h3>THINGS WE DO</h3>
                        <p className={styles.blue}>Digital Transformation</p>
                        <p>ML for Insurance</p>
                        <p>Storage And Security For Insurance</p>
                    </div>
                    <div className={styles.right}>
                        <h3>Digital Transformation</h3>
                        <div className={styles["tele-img"]}>
                            <Image
                                alt="graphic"
                                layout="responsive"
                                objectFit="fill"
                                src={insurance2}
                            />
                        </div>
                        <p>
                            Digital transformation is the process of using
                            digital technologies to create new — or modify
                            existing — business processes, culture, and customer
                            experiences to meet changing business and market
                            requirements. This reimagining of business in the
                            digital age is digital transformation.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
