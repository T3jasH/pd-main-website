import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowWhite.svg"
import useNavTheme from "../../hooks/useNavTheme"
import education from "../../assets/education.png"
import education2 from "../../assets/education2.png"

export default function Education() {
    const navRef = useRef(null)
    useNavTheme(
        "#industries",
        "--bgColor: transparent; --textColor: #f4f4f4; --boxShadow: none",
        navRef,
        false
    )
    return (
        <React.Fragment>
            <Head>
                <title>PDCloudEx in Education</title>
                <meta
                    name="description"
                    content="PDCloudEX is an Open Source Cloud Solution that is especially crafted for Educational Institutions"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className="industries">
                <div className="industries-img">
                    <Image
                        alt="Education"
                        layout="fill"
                        objectFit="fill"
                        src={education}
                    />
                    <div className="nav-info">
                        <p>Industries</p>
                        <div className="arrow">
                            <Image
                                alt="arrow"
                                layout="responsive"
                                objectFit="fill"
                                src={arrow}
                            />
                        </div>
                        <h1>Education</h1>
                    </div>
                    <h2>PDCloudEX in Eductation</h2>
                    <p>
                        PDCloudEX is an Open Source Cloud Solution that is
                        especially crafted for Educational Institutions. It has
                        Pre Configured private cloud platform on OpenStack for
                        Compute, Network & Storage. PDCloudEx comes with an
                        Initial set up with one server that can scaled up or
                        down on demand.
                    </p>
                </div>
                <div className="edu-container">
                    <div className="left">
                        <h3>What can you expect by using PDCloudEx™?</h3>
                        <ul>
                            <li>
                                Students can provision their own Virtual
                                Machines using the Service Catalog by the click
                                of a button.
                            </li>
                            <li>
                                Using PDcloudEX, Prodevans will set up
                                customized lab as per the requirements. Students
                                will find it very easy to complete their lab
                                assignments.
                            </li>
                            <li>
                                Most Educational institutes need scalable
                                Infrastructure setup. PDCloudEx provides just
                                that
                            </li>
                            <li>
                                Educational Institutes also need Document
                                management system for storing the data.
                                PDCloudEx has provision to do that
                            </li>
                            <li>
                                PDCloudEx is integrated with WebRTC, which is a
                                software that provides Video/Audio Conference
                                Call.
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <Image
                            alt="graphic"
                            layout="responsive"
                            objectFit="fill"
                            src={education2}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
