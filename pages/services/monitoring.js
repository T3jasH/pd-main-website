import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import Navbar from "../../components/Navbar"
import NavPath from "../../components/NavPath"
import useNavTheme from "../../hooks/useNavTheme"
import cloud from "../../assets/cloud.png"
import styles from "../../styles/services.module.scss"
import useActiveLink from "../../hooks/useActiveLink"

export default function Cloud() {
    const navRef = useRef(null)
    useNavTheme(
        "#services",
        "--bgColor: #f4f4f4; --textColor: #0a0a0a;",
        navRef
    )
    useActiveLink("services", "a:nth-child(3)")
    const whatWeDo = [
        {
            title: "Server Monitoring",
            description:
                "Ensure optimal performance of servers running on any OS.Track performance issues by granular level analysis and tracking of individual processes & services running on each server. Server-specific overviews for key parameters like CPU Memory Disk & HD Utilization Server Health",
        },
        {
            title: "Application Monitoring",
            description:
                "Monitor individual applications with respective application specific important parameters. Enhanced End-User experience with direct access to pages and views for specific applications that's being monitored. Providing support",
        },
        {
            title: "Database Monitoring",
            description:
                "Direct view of each database element performance and monitor instances on both virtual and physical servers. Light-weight and agent less technique to optimize performance with response-time and transaction based analysis Instant detection of database outages, failures, and table corruption predictive assay of storage requirements and index performance.",
        },
        {
            title: "Virtualization Monitoring",
            description:
                "Manage hosts, guests, workloads with automatic discovery pools, hosts, host CPUs. Monitor key parameters of host like CPU CoresMemory, VMs running, etc and VM key parameters like CPU, Memory and Disk Usage. Tracing of VMs across host servers. Supports VMware ESX/ESXi, Microsoft HyperV, Citrix XenServer and Linux KVM.",
        },
    ]
    const monitoringTool = [
        {
            title: "Private Customer Portal",
            description:
                '"You see what exactly we see" We provide visibility via prite port based on Manage-IQ into your IT infrastructure.Your private dashboard provides your IT team with status of all managed assets across different locations.',
        },
        {
            title: "Private Customer Portal",
            description:
                "Our monitoring tools provide business-oriented views of the performance of the underlying IT infrastructure. This includes: Split  panel views of services, Business containers, Sites, Correlation of events, Logical grouping of devices Performance tests",
        },
        {
            title: "Real-Time and Historical Reporting",
            description:
                "Our monitoring system retrieves data upon request and generates real-time  and historical reports and views based on the actual state of infrastructure.",
        },
        {
            title: "Heat Map",
            description:
                "All support activities are documented and tracked in our service desk ticketing system. Events may be created by: Machine alerts, Phone, Email, PRODEVANS Customer Support portal",
        },
        {
            title: "Self-Healing Scripts",
            description:
                "Our NOC employs an ever-expanding suite of self-healing scripts to remediate server and network issues rapidly and without human intervention.",
        },
        {
            title: " Network Configuration Management",
            description:
                "Our monitoring tools Configuration Management module enables: Automated backup Restore Tracking of changes in network device configurations across the enterprise network.",
        },
        {
            title: "Session Recording and Auditing",
            description:
                "All remote connect activities performed by the NOC engineers are recorded and available for the customer to replay and review for up to one year (standard).",
        },
        {
            title: "Service Ticketing",
            description:
                "Our monitoring tools support thousands of different devices and business applications.A Heat Map of supported devices is maintained by PRODEVANS and can be provided upon request.",
        },
    ]
    return (
        <React.Fragment>
            <Head>
                <title>360 Degrees Monitoring</title>
                <meta
                    name="description"
                    content="Our wide ranging experience in cloud computing
                            technology enables us to craft all-inclusive cloud
                            solutions bespoke to you business demand."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className={styles.cloud}>
                <NavPath
                    subPath={"360 Degrees Monitoring"}
                    main={"Services"}
                    theme={"light"}
                />
                <h2>Meeting All Your Monitoring Needs!</h2>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <p>
                            Our wide ranging experience in cloud computing
                            technology enables us to craft all-inclusive cloud
                            solutions bespoke to you business demand.
                        </p>
                        <p>
                            Prodevans can help you enable a faster, simpler path
                            to cloud that delivers solutions with lower TCO
                            along with the much needed flexibility to adapt your
                            cloud infrastructure to the future. A number of
                            corporate and government entities have placed their
                            trust is in us for addressing a variety to
                            application and infrastructure requirements such as
                            CRM, database, compute and data storage. Leverage
                            our cloud computing services to optimise resource
                            utilization, secure your data & content while
                            enabling access from any web-connected device.
                        </p>
                        <p>
                            Prodevans comprehensive Cloud computing solutions is
                            helping companies of all sizes and across industry
                            segments to harness the power of Cloud Computing. At
                            Prodevans we believe we are just enables, assisting
                            you in building a cloud strategy that works for your
                            business today, tomorrow and into the future as the
                            business evolves.
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
                <div className={styles["monitoring-container-1"]}>
                    <h3>What We Do</h3>
                    <div className={styles.inner}>
                        {whatWeDo.map((item) => (
                            <div className={styles.item} key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
