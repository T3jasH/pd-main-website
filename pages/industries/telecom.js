import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import Navbar from "../../components/Navbar"
import useNavTheme from "../../hooks/useNavTheme"
import telecom from "../../assets/telecom.png"
import telecom2 from "../../assets/telecom2.png"
import arrow from "../../assets/arrowWhite.svg"
import styles from "../../styles/industries.module.scss"

export default function Telecom() {
    const navRef = useRef(null)
    useNavTheme(
        "#industries",
        "--bgColor: transparent; --textColor: #f4f4f4; --boxShadow: none",
        navRef
    )
    return (
        <React.Fragment>
            <Head>
                <title>Prodevans in Telecom</title>
                <meta
                    name="description"
                    content="We offer solutions that help Telecom providers improve efficiency, and to adapt to the rapid changes in tech."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className={styles.industries}>
                <div className={styles["industries-img"]}>
                    <Image
                        alt="Telecom"
                        layout="fill"
                        objectFit="fill"
                        src={telecom}
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
                        <h1>Education</h1>
                    </div>
                    <h2>
                        Bringing the next wave of digital transformation to
                        enhance communication.
                    </h2>
                    <p>
                        The telecom industry needs to revolutionize as digital
                        disruption is transforming the business paradigm. We
                        offer solutions crafted to help the telecom providers to
                        improve efficiency, provide better solutions to
                        customers everywhere, and to adapt to the rapid changing
                        technologies.
                    </p>
                </div>
                <div
                    className={`${styles["edu-container"]} ${styles["tele-container"]}`}
                >
                    <div className={styles.left}>
                        <h3>THINGS WE DO</h3>
                        <p className={styles.blue}>AI And Data Intelligence</p>
                        <p>Digital Innovation</p>
                        <p>Business Services</p>
                        <p>Technology Services</p>
                    </div>
                    <div className={styles.right}>
                        <h3>AI And Data Intelligence</h3>
                        <div className={styles["tele-img"]}>
                            <Image
                                alt="graphic"
                                layout="responsive"
                                objectFit="fill"
                                src={telecom2}
                            />
                        </div>
                        <p>
                            We tailor solutions that enable telecom providers to
                            visualize data metrics to address provisioning,
                            usage, call drop record capture, rating, and
                            billing. We help them evaluate their entire network
                            with interactive reports in real-time.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
