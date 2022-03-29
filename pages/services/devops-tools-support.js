import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import useNavTheme from "../../hooks/useNavTheme"
import Navbar from "../../components/Navbar"
import NavPath from "../../components/NavPath"
import devops from "../../assets/devops.png"
import styles from "../../styles/services.module.scss"
import useActiveLink from "../../hooks/useActiveLink"

export default function Devops() {
    const cards = [
        {
            title: "DevOps Automation",
            description:
                "After auditing your existing setup and drawing the ideal workflows, we set-up & automate your continuous delivery pipeline. While automating the pipeline, we prevent risky deployment and increase productivity using our robust ecosystem of open source & licensed tools.",
        },
        {
            title: "DevOps Management",
            description:
                "Apart from automating your processes, we help you to manage the health of your continuous delivery pipeline. We take care of release management, continuous deployment, replica environment, new server setup, change management and performance optimization on an ongoing basis.",
        },
    ]
    useActiveLink("services", "a:nth-child(6)")
    const navRef = useRef(null)
    useNavTheme("#services", "--bgColor: #1b1b1b; --textColor: #fff;", navRef)
    return (
        <React.Fragment>
            <Head>
                <title>Devops Tools And Support</title>
                <meta
                    name="description"
                    content="At Prodevans, our DevOps leverages
                            collaboration, monitoring, tool-chain pipelines,
                            automation and cloud adoption"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className={`${styles.cloud} ${styles.devops}`}>
                <NavPath
                    main={"Services"}
                    subPath={"Devops Tools And Support"}
                    theme={"dark"}
                />
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2>DevOps Service</h2>
                        <p>
                            Automating end to end delivery pipeline across cloud
                            platforms for faster time to market, increased
                            efficiency and reduced cost . Our DevOps leverages
                            collaboration, monitoring, tool-chain pipelines,
                            automation and Cloud adoption. With our DevOps as a
                            service offering, we ensure rapid on-boarding of
                            applications by automating end-to-end delivery
                            pipeline and facilitate continuous integration and
                            development across leading cloud platforms.
                        </p>{" "}
                    </div>
                    <div className={styles["cloud-img"]}>
                        <div className={styles["devops-img"]}>
                            <Image
                                alt="DevOps Tools"
                                layout="responsive"
                                objectFit="fill"
                                src={devops}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles["monitoring-container-1"]}>
                    <h3>
                        We use all the leading DevOps tools to automate &#38;
                        measure the performance of the delivery pipeline.
                    </h3>
                    <div className={styles.inner}>
                        {cards.map((card) => (
                            <div className={styles.item} key={card.title}>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
