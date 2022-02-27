import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowWhite.svg"
import useNavTheme from "../../hooks/useNavTheme"
import healthcare from "../../assets/healthcare.png"
import healthcare2 from "../../assets/healthcare2.png"
import styles from "../../styles/industries.module.scss"

export default function Healthcare() {
    const navRef = useRef(null)
    useNavTheme(
        "#industries-btn",
        "--bgColor: transparent; --textColor: #f4f4f4; --boxShadow: none",
        navRef
    )
    return (
        <React.Fragment>
            <Head>
                <title>Prodevans in Healthcare</title>
                <meta
                    name="description"
                    content="With Prodevans you can reduce the burden of data
                    maintaining, processing and storage thereby bringing down service cost"
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
                        <h1>Healthcare</h1>
                    </div>
                    <h2>Making Healthcare easy and Convenient</h2>
                    <p>
                        The healthcare industry shoulder the responsibility of
                        maintaining data of different forms and aspects with
                        high availability. Involvement of Prodevans services in
                        healthcare not only reduces the burden of data
                        maintaining, processing and storage but also reduces the
                        service cost and makes sure the availability of
                        healthcare at an affordable price and everywhere.
                    </p>
                </div>
                <div className={`${styles["healthcare-container"]}`}>
                    <h2>Healthcare</h2>
                    <p>
                        Our products in the healthcare industry helps in better
                        networking.Usage of our cloud technologies in healthcare
                        industry leads to easy access of data. Analysis
                        one&apos;s medical background and history becomes easy.
                    </p>
                    <p>
                        We also provide platform for predictive analysis with
                        major advantages of real time alerts in case of any
                        major medical issues. Usage of efficient and
                        sophisticated IT tools and technologies have proven
                        better market results and satisfying business services
                        along with imprevative competitive advantages.
                    </p>
                    <p>
                        Involvement of IT services in healthcare not only
                        reduces the burden of data maintaining, processing and
                        storage but also reduced the service cost ,made sure the
                        availability of healthcare at an affordable price and
                        everywhere. The involvement of IT in healthcare industry
                        has helped in better networking.
                    </p>
                    <p>
                        Involvement of cloud technologies in healthcare industry
                        leads to easy access of data. Analysis one&apos;s
                        medical background and history becomes easy. It also
                        provides platform for predictive analysis. The major
                        advantages would real time alerts in case of any major
                        medical issues.
                    </p>
                    <div className={`${styles["healthcare-img"]}`}>
                        <Image
                            alt="arrow"
                            layout="responsive"
                            objectFit="fill"
                            src={healthcare2}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
