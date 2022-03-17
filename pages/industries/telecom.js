import Head from "next/head"
import Image from "next/image"
import React, { useRef, useState } from "react"
import Navbar from "../../components/Navbar"
import useNavTheme from "../../hooks/useNavTheme"
import telecom from "../../assets/telecom.png"
import telecom2 from "../../assets/telecom2.png"
import arrow from "../../assets/arrowWhite.svg"
import styles from "../../styles/industries.module.scss"
import useActiveLink from "../../hooks/useActiveLink"

export default function Telecom() {
    const navRef = useRef(null)
    const [activeBtn, setActive] = useState("ai")
    const list = [
        {
            btn: "ai",
            name: "AI And Data Intelligence",
            description:
                "We tailor solutions that enable telecom providers to visualize data metrics to address provisioning, usage, call drop record capture, rating, and billing. We help them evaluate their entire network with interactive reports in real-time.",
            img: telecom2,
        },
        {
            btn: "digital",
            name: "Digital Innovation",
            description:
                "By using the latest advances in technology, we bring digital transformation throughout the industry to enable telecom service providers with commercial solutions that help their products and services reach to appropriate audiences.",
            img: telecom2,
        },
        {
            btn: "biz",
            name: "Business Services",
            description:
                "With our business solutions, network experts and technicians can leverage helpful information from telecom towers remotely and train new field workers on the go, enabling them to reduce network service turnaround times.",
            img: telecom2,
        },
        {
            btn: "tech",
            name: "Technical Services",
            description:
                "Prodevans Technologies help field technicians to get a visual guide while they are performing repairs and maintenance. We offer solutions that enable the service providers with real-time insights into issues caused in equipment.",
            img: telecom2,
        },
    ]
    useNavTheme(
        "#industries-btn",
        "--bgColor: transparent; --textColor: #f4f4f4; --boxShadow: none; position: absolute;",
        navRef
    )
    useActiveLink("industries-btn", "a:nth-child(2)")
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
                        <h1>Telecom</h1>
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
                        {list.map((item, i) => (
                            <button
                                key={i}
                                className={`${
                                    activeBtn === item.btn ? styles.blue : ""
                                }`}
                                onClick={() => setActive(item.btn)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <div className={styles.right}>
                        <h3>
                            {list.find((item) => item.btn === activeBtn).name}
                        </h3>
                        <div className={styles["tele-img"]}>
                            <Image
                                alt="graphic"
                                layout="responsive"
                                objectFit="fill"
                                src={
                                    list.find((item) => item.btn === activeBtn)
                                        .img
                                }
                            />
                        </div>
                        <p>
                            {
                                list.find((item) => item.btn === activeBtn)
                                    .description
                            }
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
