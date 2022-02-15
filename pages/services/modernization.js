import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowWhite.svg"
import modernization from "../../assets/modernization.png"

export default function Modernization() {
    const navRef = useRef(null)
    const cards = [
        {
            title: "Accelerated Application Delivery",
            description:
                "Speed the delivery of existing and new applications from developers to the user by reducing manual release processes and automating the integration, testing, and deployment of new application code.",
        },
        {
            title: "Optimize existing applications",
            description:
                "Speed the delivery of existing and new applications from developers to the user by reducing manual release processes and automating the integration, testing, and deployment of new application code.",
        },
        {
            title: "Cloud-Native Application",
            description:
                "Develop and deliver net-new cloud-native applications faster with application services, microservices, containers, APIs by increasing developer productivity and automating application packaging and delivery.",
        },
    ]
    const containerAdoptionPoints = [
        "Identify an application",
        "Select a core team",
        "Impart best practices",
        "Prepare the team for scale and repeatable process.",
        "Increase application footprint",
        "Adoption by Leadership Informed Strategy",
        "Culture, Technology & Process change permeated Sustain Digital Leadership",
        "Scale Repeatable Process",
    ]
    return (
        <React.Fragment>
            <Head>
                <title>Application Modernization</title>
                <meta
                    name="description"
                    content="We at Prodevans bring the expertise -
                            built on years of tinkering with Open Source
                            technologies - to help you with containerization"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className="modernization">
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
                    <h1>Application Modernization</h1>
                </div>
                <div className="modernization-container">
                    <div className="text">
                        <h2>Make The Right Choice!</h2>
                        <p>
                            To reduce costs and improve the RoI, Organizations
                            all over the world are adopting cloud technologies.
                            They are also moving legacy applications onto
                            containers.
                        </p>{" "}
                        <p>
                            {" "}
                            But how and where do organizations begin this
                            journey into Container adoption? There is a severe
                            shortage of skills in this area. Kubernetes and
                            docker are still evolving. Many of the development
                            teams do not have the skill base to use them
                            effectively. There is a steep learning curve for
                            organizations - to to cut through this landscape to
                            take applications to production and thereafter, to
                            maintain them successfully.
                        </p>{" "}
                        <p>
                            {" "}
                            We at Prodevans, not only bring the expertise -
                            built on years of tinkering with Open Source
                            technologies - but also the intent to make you
                            equipped so that you can call this journey your own.{" "}
                        </p>
                    </div>
                    <div className="modernization-img">
                        <Image
                            alt="Application Modernization"
                            layout="responsive"
                            objectFit="fill"
                            src={modernization}
                        />
                    </div>
                </div>
                <div className="transformation-services">
                    <h3>Prodevans Application Transformation Services</h3>
                    <div className="container">
                        {cards.map((card) => (
                            <div className="container-item" key={card.title}>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container-adoption">
                    <h3>Prodevans Container Adoption Program</h3>
                    <ul>
                        {containerAdoptionPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
