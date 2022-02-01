import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import CommonFooter from "../../components/CommonFooter"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowBlack.svg"
import goal from "../../assets/goal.svg"
import objective from "../../assets/objective.svg"
import useNavTheme from "../../hooks/useNavTheme"

export default function CaseStudy() {
    const navRef = useRef(null)
    useNavTheme(
        "#resources",
        "--bgColor: #f4f4f4; --textColor: #0a0a0a;",
        navRef
    )
    return (
        <React.Fragment>
            <Head>
                <title>Resources - Case Study</title>
                <meta
                    name="description"
                    content="Bank deployment of Docker based, SCI app on Open shift in India"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className="case-study">
                <div className="nav-info">
                    <p>Resources</p>
                    <div className="arrow">
                        <Image
                            alt="arrow"
                            layout="responsive"
                            objectFit="fill"
                            src={arrow}
                        />
                    </div>
                    <h1>Case Study</h1>
                </div>
                <div className="container">
                    <div className="banner">
                        <h2>
                            Bank deployment of Docker based, SCI app on Open
                            shift in India
                        </h2>
                    </div>
                    <div className="goal">
                        <div className="left">
                            <div className="goal-img">
                                <Image
                                    alt="goal graphic"
                                    layout="responsive"
                                    objectFit="fill"
                                    src={goal}
                                />
                            </div>
                        </div>
                        <div className="right">
                            <h3>Goal</h3>
                            <p>
                                New deployment of Openshift Container Platform
                                that will be used for hosting existing XCRO
                                Project(Micro Services Architecture) in Indusind
                                Bank.
                            </p>
                            <p>
                                The diagram-1 describes the context for
                                OpenShift Container Platform for a core
                                deployment targeted at providing Dev /UAT
                                /Production capability to associated communities
                                within Indusind Bank. In current deployment
                                Openshift Container Platform will be used for
                                XCRO Project(Micro Services Architecture) in
                                Indusind Bank.
                            </p>
                        </div>
                    </div>
                    <div className="objective">
                        <div className="left">
                            <h3>Objective</h3>
                            <p>
                                The intention is to develop capability as a
                                development environment and from this and the
                                lessons learnt during its deployment, operations
                                and adoption, develop the solution further to
                                cover hosting production applications. The key
                                design demonstrates how the OpenShift service
                                can be configured to support a level of High
                                Availability deployed in a virtualized
                                environment offering a high degree of
                                flexibility in its configuration and enabling
                                the project delivery to modify key architecture
                                features and implement them quickly
                            </p>
                        </div>
                        <div className="right">
                            <div className="objective-img">
                                <Image
                                    alt="Objective graphic"
                                    layout="responsive"
                                    objectFit="fill"
                                    src={objective}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CommonFooter />
        </React.Fragment>
    )
}
