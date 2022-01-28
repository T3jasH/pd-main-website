import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowWhite.svg"
import Image from "next/image"
import Head from "next/head"
import squares from "../../assets/squares.png"
import deepak from "../../assets/deepakMishra.png"
import arvind from "../../assets/arvindKumarSinha.png"
import twt from "../../assets/twitter.svg"
import fb from "../../assets/fb.svg"
import gPlus from "../../assets/gPlus.svg"

export default function About() {
    const { ref, inView } = useInView({
        rootMargin: "-45% 0%",
    })
    const profiles = [
        {
            name: "Deepak Mishra",
            designation: "Founder and CEO",
            content:
                "Technology Transformation Leader with more than 19 years experience in areas of Technology Infrastructure, Development, QA, & Support. Drove technology transformation programs across lines of business. Passionate about delivering value to businesses through Cloud Technologies. Transformed legacy applications for migration to Cloud Platforms and ongoing Management across industries (BFSI, Retail, Government) in India & APAC. Provided top of the line Consulting Services to prioritise applications, defining the path to Production and documenting business impact and ROI.",
            twt: "",
            fb: "",
            gPlus: "",
            src: deepak,
        },
        {
            name: "Arvind Kumar Sinha",
            designation: "Chief Operating & Administration Officer (COO/CAO)",
            content:
                "A chartered Engineer with achievement in Strategical Planning and implementation of Steel Industry related capital Projects in India and abroad and also International speaker on Steel buildings . Have completed Information System deployment (as Team leader of Engineering division) on IBM ES9000 mainframe computer , way back between 1989-1992. Represented India in Trade delegation to Ethiopia. Also a sports administrator (Bihar Basketball Association) and University level player - now contributing the expertise after retirement, to startup company Prodevans as COO.",
            twt: "",
            fb: "",
            gPlus: "",
            src: arvind,
        },
    ]
    useEffect(() => {
        document.querySelector("#company").classList.add("active")
    }, [])
    useEffect(() => {
        const nav = document.querySelector("nav")
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
                )
            }
        } else if (nav) {
            nav.setAttribute("style", "--bgColor: #1b1b1b; --textColor: #fff;")
        }
    }, [inView])
    return (
        <React.Fragment>
            <Head>
                <title>About Prodevans</title>
                <meta
                    name="description"
                    content="Prodevans helps transform IT Organizations with On-demand, Scalable, Reliable Infra based on state of the art tech."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="about-company">
                <div className="nav-info">
                    <p>Company</p>
                    <div className="arrow">
                        <Image
                            alt="arrow"
                            layout="responsive"
                            objectFit="fill"
                            src={arrow}
                        />
                    </div>
                    <h1>About the Company</h1>
                </div>
                <div className="squares squares-top-right">
                    <Image
                        alt="squares graphic"
                        layout="responsive"
                        objectFit="fill"
                        src={squares}
                    />
                </div>
                <main>
                    <div className="left">
                        <div className="squares squares-bottom-right">
                            <Image
                                alt="squares graphic"
                                layout="responsive"
                                objectFit="fill"
                                src={squares}
                            />
                        </div>
                        <div className="gray"></div>
                    </div>
                    <div className="right">
                        <p>
                            Prodevans will help transform IT Organizations with
                            On-demand, Scalable, Reliable Infra based on the
                            state-of-the-art cloud & container technologies. We
                            have an excellent track record in implementing
                            Solutions across India & ASEAN. As one of the
                            pioneers in implementing Red Hat Cloud Solutions
                            across the region, we bring a technology know how
                            that is second to none.
                        </p>
                    </div>
                </main>
            </div>
            <div className="management" ref={ref}>
                <h2>Management Profiles</h2>
                <div className="profile-list">
                    {profiles.map((profile) => (
                        <div key={profile.name} className="profile">
                            <div className="left">
                                <div className="profile-img">
                                    <Image
                                        alt={profile.name}
                                        layout="responsive"
                                        objectFit="fill"
                                        src={profile.src}
                                    />
                                </div>
                                <h3>{profile.name}</h3>
                                <p>{profile.designation}</p>
                            </div>
                            <div className="right">
                                <p>{profile.content}</p>
                                <div className="socials">
                                    <div>
                                        <Image
                                            alt={"Twitter"}
                                            layout="responsive"
                                            objectFit="fill"
                                            src={twt}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            alt={"Facebook"}
                                            layout="responsive"
                                            objectFit="fill"
                                            src={fb}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            alt={"G Plus"}
                                            layout="responsive"
                                            objectFit="fill"
                                            src={gPlus}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}
