import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowBlack.svg"
import useNavTheme from "../../hooks/useNavTheme"
import cloud from "../../assets/cloud.png"

export default function Cloud() {
    const navRef = useRef(null)
    useNavTheme(
        "#services",
        "--bgColor: #f4f4f4; --textColor: #0a0a0a;",
        navRef
    )
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
                "Manage hosts, guests, workloads with automatic discovery pools, hosts, host CPUs. Monitor key parameters of host like CPU CoresMemory, VMs running, etc and VM key parameters like CPU, Memory and Disk Usage. Tracing of VMs across host servers. Supports VMware ESX/ESXi, Microsoft HyperV, Citrix XenServer and Linux KVM. Our monitoring tools are integrated with VMware's native API which includes vSphere,vCenter ,ESX & VM Serve.",
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
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className="cloud">
                <div className="nav-info">
                    <p>Services</p>
                    <div className="arrow">
                        <Image
                            alt="arrow"
                            layout="responsive"
                            objectFit="fill"
                            src={arrow}
                        />
                    </div>
                    <h1>360 Degrees Monitoring</h1>
                </div>
                <h2>Meeting All Your Monitoring Needs!</h2>
                <div className="container">
                    <div className="text">
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
                    <div className="cloud-img">
                        <Image
                            alt="Cloud"
                            layout="responsive"
                            objectFit="fill"
                            src={cloud}
                        />
                    </div>
                </div>
                <div className="monitoring-container-1">
                    <h3>What We Do</h3>
                    <div className="inner">
                        {whatWeDo.map((item) => (
                            <div className="item" key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="monitoring-container-1">
                    <h3>Why Use Prodevans Monitoring Tool?</h3>
                    <div className="inner monitoring-inner">
                        {monitoringTool.map((item) => (
                            <div
                                className="item monitoring-item"
                                key={item.title}
                            >
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
