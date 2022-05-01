import Head from "next/head"
import Image from "next/image"
import React, { useRef, useState } from "react"
import Navbar from "../../components/Navbar"
import NavPath from "../../components/NavPath"
import useNavTheme from "../../hooks/useNavTheme"
import useActiveLink from "../../hooks/useActiveLink"
import cloud from "../../assets/cloud.png"
import cloudImplementation from "../../assets/cloudImplementation.svg"
import cloudManaged from "../../assets/cloudManaged.svg"
import cloudAdvisory from "../../assets/cloudAdvisory.svg"
import cloudEnablement from "../../assets/cloudEnablement.svg"
import styles from "../../styles/services.module.scss"

export default function Cloud({ toggleNav }) {
    const navRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    useNavTheme(
        "#services",
        "--bgColor: #f4f4f4; --textColor: #0a0a0a;",
        navRef
    )
    useActiveLink("services", "a:nth-child(1)", isOpen, "#fbfbfb")
    const serviceFeatures = [
        {
            img: cloudAdvisory,
            text: "Through survey workshops and bench marking we identify which workloads are suitable for migration to the cloud.then,we recommend the most suitable cloud model private, public or hybrid and develop a road map with detailed next steps",
            title: "Cloud Advisory Services",
        },
        {
            img: cloudEnablement,
            text: "To ensure the suitability of cloud for your organisation,we will implement a proof of concept to demonstrate functionality and overall return on investment(ROI)",
            title: "Cloud Enablement Services",
        },
        {
            img: cloudImplementation,
            text: "For each workload,we will install, migrate, configure, integrate and administer the application in the cloud.",
            title: "Cloud Implementation Services",
        },
        {
            img: cloudManaged,
            text: "We provide ongoing support,administration and optimisation of your cloud deployment to maximise application performance and minimize cost",
            title: "Cloud Managed Services",
        },
    ]
    return (
        <React.Fragment>
            <Head>
                <title>Cloud Services</title>
                <meta
                    name="description"
                    content="Our wide ranging experience in cloud computing technology enables us to craft all-inclusive cloud solutions bespoke to you business demand."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                ref={navRef}
                toggleNav={(state) => {
                    setIsOpen(state)
                    toggleNav(state)
                }}
                theme={"light"}
            />
            {!isOpen ? (
                <div className={styles.cloud}>
                    <NavPath
                        theme={"light"}
                        main={"Services"}
                        subPath={"Cloud"}
                    />
                    <h2>Cloud Computing Solutions Provider</h2>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            <p>
                                Our wide ranging experience in cloud computing
                                technology enables us to craft all-inclusive
                                cloud solutions bespoke to you business demand.
                            </p>
                            <p>
                                Prodevans can help you enable a faster, simpler
                                path to cloud that delivers solutions with lower
                                TCO along with the much needed flexibility to
                                adapt your cloud infrastructure to the future. A
                                number of corporate and government entities have
                                placed their trust is in us for addressing a
                                variety to application and infrastructure
                                requirements such as CRM, database, compute and
                                data storage. Leverage our cloud computing
                                services to optimise resource utilization,
                                secure your data & content while enabling access
                                from any web-connected device.
                            </p>
                            <p>
                                Prodevans comprehensive Cloud computing
                                solutions is helping companies of all sizes and
                                across industry segments to harness the power of
                                Cloud Computing. At Prodevans we believe we are
                                just enables, assisting you in building a cloud
                                strategy that works for your business today,
                                tomorrow and into the future as the business
                                evolves.
                            </p>
                        </div>
                        <div className={styles["cloud-img"]}>
                            <Image
                                alt="Cloud"
                                layout="responsive"
                                objectFit="fill"
                                src={cloud}
                            />
                        </div>
                    </div>
                    <div className={styles["cloud-management"]}>
                        <h3>Our Cloud Management Portfolio includes</h3>
                        <div className={styles.container}>
                            <div className={styles["gradient-1"]}>
                                Delivering Self-Service IT
                            </div>
                            <div className={styles["gradient-1"]}>
                                Abstracting Multiple Clouds
                            </div>
                            <div className={styles["gradient-2"]}>
                                Providing Governance and Controls
                            </div>
                            <div className={styles["gradient-2"]}>
                                Automating Lifecycle Management
                            </div>
                        </div>
                    </div>
                    <div className={styles["service-features"]}>
                        <h3>Features Of Our Services</h3>
                        <div className={styles.container}>
                            {serviceFeatures.map((feature) => (
                                <div
                                    className={styles["container-item"]}
                                    key={feature.title}
                                >
                                    <div className={styles.graphic}>
                                        <Image
                                            alt={feature.title}
                                            layout="responsive"
                                            objectFit="fill"
                                            src={feature.img}
                                        />
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}
