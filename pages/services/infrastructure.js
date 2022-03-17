import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import useNavTheme from "../../hooks/useNavTheme"
import useActiveLink from "../../hooks/useActiveLink"
import Navbar from "../../components/Navbar"
import NavPath from "../../components/NavPath"
import infrastructure from "../../assets/infrastructure.png"
import styles from "../../styles/services.module.scss"

export default function Infrastructure() {
    const navRef = useRef(null)
    useNavTheme("#services", "--bgColor: #fbfbfb; --textColor: #000;", navRef)
    useActiveLink("services", "a:nth-child(7)")
    const cards = [
        {
            title: "Red Hat and RDO OpenStack",
            description: [
                "Deployed Red Hat and RDO OpenStack in Malaysia, Indonesia, Vietnam and India Telecom with deployments as complex as 32 computes, 10 CEPH storage with the deployments were orchestrated included features like SRIOV, PCI Pass-through, DPDK and NUMA.",
            ],
        },
        {
            title: "Cloud Forms and VMware VRealize Orchestrator",
            description: [
                "Self Service Catalogue with multi stack options, Chargeback/Showback, Compliance/ Remediation and Monitoring - ServiceNow ITSM integration, infoblox IPAM integration",
            ],
        },
        {
            title: "Red Hat Openshift",
            description: [
                "Deployed Red Hat OpenShift and Kubernetes in Thailand, Malaysia, Australian Banks, University in Singapore and India Banks and Telecoms with deployments as complex as 100 worker nodes.",
                "Deployments were orchestrated using Ansible.",
            ],
        },
    ]
    return (
        <React.Fragment>
            <Head>
                <title>Application Modernization</title>
                <meta
                    name="description"
                    content="We provide Infrastructure which consists of
                            software, hardware, network resources and services
                            required for the management, operation and existence
                            of an enterprise IT environment."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className={`${styles.modernization} ${styles.infrastructure}`}>
                <NavPath
                    main={"Services"}
                    subPath={"Infrastructure"}
                    theme={"bright"}
                />
                <h2>Infrastructure</h2>
                <div className={styles["modernization-container"]}>
                    <div className={styles.text}>
                        <p>
                            We provide Infrastructure which consists of
                            software, hardware, network resources and services
                            required for the management, operation and existence
                            of an enterprise IT environment. High availability,
                            responsiveness and reliability of the IT
                            infrastructure are important to meet the dynamic
                            needs of the business.
                        </p>
                        <p>
                            We manage your infrastructure using enterprise
                            automation, infrastructure automation, application
                            automation, security and compliance automation. We
                            connect infrastructure, services and suppliers to
                            have an integrated solution across all the
                            operations. We enable the end user to scale up or
                            down the resources. We uses Cloud orchestration
                            technologies like openstack, cloudforms and
                            openshift.
                        </p>
                    </div>
                    <div className={styles["modernization-img"]}>
                        <Image
                            alt="Application Modernization"
                            layout="responsive"
                            objectFit="fill"
                            src={infrastructure}
                        />
                    </div>
                </div>
                <div className={styles["transformation-services"]}>
                    <div className={styles.container}>
                        {cards.map((card) => (
                            <div
                                className={styles["container-item"]}
                                key={card.title}
                            >
                                <h3>{card.title}</h3>
                                {card.description.map((d, i) => (
                                    <React.Fragment key={i}>
                                        <p>{d}</p>
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
