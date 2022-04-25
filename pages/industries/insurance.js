import Head from "next/head"
import Image from "next/image"
import React, { useRef, useState } from "react"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowWhite.svg"
import useNavTheme from "../../hooks/useNavTheme"
import useActiveLink from "../../hooks/useActiveLink"
import insurance from "../../assets/insurance.png"
import insurance2 from "../../assets/insurance2.png"
import styles from "../../styles/industries.module.scss"

export default function Telecom({ toggleNav }) {
    const navRef = useRef(null)
    const [activeBtn, setActive] = useState("digital")
    useNavTheme(
        "#industries-btn",
        "--bgColor: transparent; --textColor: #f4f4f4; --boxShadow: none; position: absolute;",
        navRef
    )
    useActiveLink("industries-btn", "a:nth-child(3)", isOpen)
    const [isOpen, setIsOpen] = useState(false)
    const list = [
        {
            btn: "digital",
            name: "Digital Transformation",
            description:
                "Digital transformation is the process of using " +
                "digital technologies to create new — or modify " +
                "existing — business processes, culture, and customer " +
                "experiences to meet changing business and market " +
                "requirements. This reimagining of business in the " +
                "digital age is digital transformation.",
            img: insurance2,
        },
        {
            btn: "ml",
            name: "ML For Insurance",
            description:
                "Machine Learning is being used to turn data into assets, thereby laying the foundation for the next wave of digital transformation. Organizations are increasingly investing in machine learning to better serve their customers, and grow their business.",
            img: insurance2,
        },
        {
            btn: "storage",
            name: "Storage Security For Insurance",
            description:
                "Unlike your home, your storage unit isn't under your watchful eye at all times. Because of this, you want to store your belongings at a storage facility that has your best interests in mind and is willing to monitor the safety of your valuables.",
            img: insurance2,
        },
    ]
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
            <Navbar
                ref={navRef}
                toggleNav={(state) => {
                    setIsOpen(state)
                    toggleNav(state)
                }}
            />
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
                        {[list.find((item) => item.btn === activeBtn)].map(
                            (item, i) => (
                                <React.Fragment key={i}>
                                    <h3>{item.name}</h3>
                                    <div className={styles["tele-img"]}>
                                        <Image
                                            alt={item.name}
                                            layout="responsive"
                                            objectFit="fill"
                                            src={item.img}
                                        />
                                    </div>
                                    <p>{item.description}</p>
                                </React.Fragment>
                            )
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
