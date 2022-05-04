import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import Head from "next/head"
import squares from "../../assets/squares.png"
import deepak from "../../assets/deepakMishra.png"
import arvind from "../../assets/arvind.png"
import dilip from "../../assets/dilipHublikar.png"
import gagan from "../../assets/gaganPattanayak.png"
import santha from "../../assets/santhaKumar.png"
import sushma from "../../assets/sushmaShriram.png"
import raj from "../../assets/rajPalDhanjal.jpg"
import sowmya from "../../assets/sowmyaHM.png"
import nityananda from "../../assets/nityananda.png"
import vijay from "../../assets/vijayAgarwal.png"
import shaheen from "../../assets/shaheenMalim.png"
import sumit from "../../assets/sumit.png"
import sarma from "../../assets/sarma.png"
import vemu from "../../assets/chandrahasaVemu.png"
import linkedin from "../../assets/linkedin.png"
import gmail from "../../assets/gmail.png"
import blueSquares from "../../assets/blueSquares.png"
import Link from "next/link"
import styles from "../../styles/company/about.module.scss"
import navstyles from "../../styles/navbar.module.scss"
import styleMobile from "../../styles/navMobile.module.scss"
import NavPath from "../../components/NavPath"
import useNavTheme from "../../hooks/useNavTheme"
import useActiveLink from "../../hooks/useActiveLink"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export const getInitialProps = ({ req }) => {
    let userAgent
    let deviceType
    if (req) {
        userAgent = req.headers["user-agent"]
    } else {
        userAgent = navigator.userAgent
    }
    const md = new MobileDetect(userAgent)
    if (md.tablet()) {
        deviceType = "tablet"
    } else if (md.mobile()) {
        deviceType = "mobile"
    } else {
        deviceType = "desktop"
    }
    return { deviceType }
}

export default function About({ toggleNav, deviceType }) {
    const navRef = useRef(null)
    const { ref, inView } = useInView({
        rootMargin: "-50% 0%",
    })
    const [isOpen, setOpen] = useState(false)
    const [theme, setTheme] = useState("light")
    const [current, setCurrent] = useState("Deepak Mishra")
    const profiles = [
        {
            name: "Deepak Mishra",
            designation: "Founder and CEO",
            content:
                "Technology Transformation Leader with more than 19 years' experience in areas of Technology Infrastructure, Development, QA, & Support. Drove technology transformation programs across lines of business. Passionate about delivering value to businesses through Cloud Technologies. Transformed legacy applications for migration to Cloud Platforms and ongoing Management across industries (BFSI, Retail, Government) in India & APAC. Provided top-of-the-line Consulting Services to prioritise applications, defining the path to Production and documenting business impact and ROI.",
            linkedin: "https://www.linkedin.com/in/deepak-mishra-ceo-prodevans",
            gmail: "mailto:dipankar@prodevans.com",
            src: deepak,
        },
        {
            name: "Arvind Kumar Sinha",
            designation: "Chief Operating & Administration Officer (COO/CAO)",
            content:
                "A chartered Engineer with achievement in Strategical Planning and implementation of Steel Industry related capital Projects in India and abroad; also international speaker on Steel buildings . Have completed Information System deployment (as Team leader of Engineering division) on IBM ES9000 mainframe computer, way back between 1989-1992. Represented India in Trade delegation to Ethiopia. Contributed as the sports administrator to the Bihar Basketball Association and was a University level player. Now contributing his expertise post retirement as COO to the rapidly growing company, Prodevans.",
            linkedin:
                "https://www.linkedin.com/in/arvind-kumar-sinha-685a3812b",
            gmail: "mailto:arvind@prodevans.com",
            src: arvind,
        },
        {
            name: "S Santha Kumar",
            designation: "Chief Financial Officer (CFO)",
            content:
                "Santha leads our company in his vital role of managing finance and accounting; ensuring our company’s profitability; handling financial audits, payroll, budgets, taxation, payables, cash flow, financial corporate services, international subsidiaries, and the overall health of our financial statements, reporting where he keeps vigilant of our revenue and cost, and areas of financial opportunities to invest. He also leads our company in legal matters, including preparing and negotiating customer contracts and Master Service Agreements; managing internal compliance and audit certifications; advising on corporate governance and strategic initiatives; advising on matters of risk management; and facilitating the Executive Committee's work with Prodevans's Board.",
            linkedin: "https://www.linkedin.com/in/santha-kumar-62a26a1a1",
            gmail: "mailto:santha.kumar@prodevans.com",
            src: santha,
        },
        {
            name: "Gagan Pattanayak ",
            designation: "Chief Revenue Officer (CRO)",
            content:
                "Gagan helps us hone our planning to enable a multi-channel Go to Market sales strategy. He does this by managing our sales and revenue operations with a focus on front line sales (direct and indirect). He also oversees our sales support teams (Pre-sales, Design teams) with the goal of bringing revenue opportunities to closure. In addition to this, he is responsible for all commercial contracts.",
            linkedin: "https://www.linkedin.com/in/gagan-p",
            gmail: "mailto:gagan@prodevans.com",
            src: gagan,
        },
        {
            name: "Dilip Hublikar",
            designation: "Head of Sales and Business Development",
            content:
                "Dilip is an Engineer & MBA with 14 years of rich experience in Sales, Alliance and Relationship Mgmt. Certified Software Asset Manager and optimization expert in s/w and cloud services offerings with proven track of helping global customers on ROI and lower TCO in their IT spends over years across OEM and Technologies. Specialist in creating and managing multi vendor eco system with 360 degree management of software and solution Lifecycle.",
            linkedin: "https://www.linkedin.com/in/dilip-hublikar-3a660719",
            gmail: "mailto:dilip@prodevans.com",
            src: dilip,
        },
        {
            name: "Sushma Shriram",
            designation: "HR Manager and Business Development",
            content:
                "Sushma, a Post Graduate in Financial Management with 10 years of industry experience, takes care of day to day operations and fulfills talent acquisition. In addition to her current role as HR Manager, Sushma Shriram will be stepping into managing the Systems and Infrastructure team to enable faster time to resolution and implementing proactive measures to better administer our customers' environments.",
            linkedin: "https://www.linkedin.com/in/sushma-shriram-0b42421b3",
            gmail: "mailto:sushma@prodevans.com",
            src: sushma,
        },
        {
            name: "Raj Pal Dhanjal",
            designation: "Head of Project Delivery and Professional Services",
            content:
                "RajPal Dhanjal, a senior IT Professional, certified Scrum Master and Prince 2 has more than 4 decades of experience in the IT Industry.  As part of the professional journey he has been into Product Management (Networking Components), Customer Support Operations, Service Delivery,  Program Management, Project Management, Customer Relationship, Principal Handling, BPO Operations.",
            linkedin: "",
            gmail: "https://www.linkedin.com/in/rajpaldhanjal",
            src: raj,
        },
        {
            name: "Sowmya H M",
            designation: "Head Retail Training and Delivery",
            content:
                "Sowmya,  An effective leader with convincing communication, decision making and interpersonal skills in dealing with customers, external organizations and colleagues. A proactive and result oriented professional with over 11 years of experience in Education. Marketing, customer relationship management. She plays a major role in the Red Hat Retail business of prodevans .",
            linkedin: "https://www.linkedin.com/in/sowmya-hm-01b579174",
            gmail: "",
            src: sowmya,
        },
        {
            name: "Nityananda Panda",
            designation: "Enterprise Sales Manager",
            content:
                "Nityananda is an IT Sales Professional with 18 plus years experience with Proven Track Record of  Managing 6 Plus Training Centers and instrumental in delivering training to B2B and B2C on Red Hat Technologies , Presently Promoting Cloud Management, Migration, Managed Services, Staffing along with Professional Services to Corporate Clients.",
            linkedin: "https://www.linkedin.com/in/nityanandapanda",
            gmail: "",
            src: nityananda,
        },
        {
            name: "Vijay Agarwal",
            designation: "Associate Director West Region Business Head",
            content:
                "Vijay Agarwal has joined ODC DC, Cloud Delivery as an Associate Director in Mumbai. He is a Technology Leader with hands-on experience in cloud computing, Kubernetes, and infrastructure automation. He combines technical expertise with a track record of inspiring teams to conceptualize and implement successful solutions.With a solid background in enterprise data protection architectures, operational excellence, vendor management, and lean techniques, He has a keen understanding of market trends and ensures all technical are aligned with corporate goals.He has 15 years of experience in Kubernetes, OpenShift, Storage, Cloud, SRM, Software Defined Storage, Disaster Recovery, and Business Continuity. He identifies, evaluates, and automates storage architectures centered on object, file, and cloud integrated backup and recovery pipelines.He is a former Sr Executive at YesBank, HDFC Bank, and ICICI Bank, which will help us drive BFSI (banking, financial services, and insurance) business at Prodevans Technologies.",
            linkedin: "",
            gmail: "",
            src: vijay,
        },
        {
            name: "Shaheen Malim",
            designation: "HR and Business Administration",
            content:
                "Shaheen Malim, an industry veteran in the Software training industry and BFSI sectors brings core expertise in Centre Management, Operations Management, Customer Service and Marketing. She joins us from ManipalCigna Health Insurance and has various leading assignments with Hamersmit Equipment, ICICI Bank, Countrywide Financial Services, HSBC, Boston Software Technologies and Concourse Information Technology Pvt. Ltd. With a Masters Degree in HRM she will play a pivotal role in bringing the best practices to our Global Learning Solution business unit.",
            linkedin: "",
            gmail: "",
            src: shaheen,
        },
        {
            name: "Sumit Charan",
            designation: "Chief Growth Officer and Head for Process",
            content:
                "Sumit serves as Chief Growth Officer and Head of Process in Prodevans technologies. He is a passionate leader with more than 15 years of professional experience in business development, project management, people management, and operation. He joined the Prodevans in 2021 and focused on expanding the company by deriving a sustainable growth strategy. Prior to that, he was associated with the semiconductor industry and had a stint overseas experience (US, Europe).\n Sumit holds a Bachelor of Engineering degree from MCE Hassan and a Business Management degree from IIM Indore. He has also accomplished a leadership program from SDA Bocconi School of Management, Italy",
            linkedin: "",
            gmail: "",
            src: sumit,
        },
        {
            name: "Sarma Pannala",
            designation: "Head Project Management",
            content:
                "Sarma Pannala has 20 Years of professional  IT experience, worked  in major Industry giants. In the professional Saga, worked in Support, System Arch, Product Owner, Service Delivery, Project Management and Training. Played a Pivotal role in making tasks and the mission a success. Cross functional work, good rapo with the teams working and understanding the dependency and resolving the conflicts.\nSarma has good experience in working for North American  and European clients.",
            linkedin: "",
            gmail: "",
            src: sarma,
        },
        {
            name: "Chandrahasa Vemu",
            designation: "Director Prodevans SG",
            content:
                "Vemu Venkata Sri Sai Chandrahasa Pravana is a tech wizard with deep expertise in DevOps, Cloud and ML/Al. He is a cloud practitioner with proficiency in agile product development, solutions and client handling across multiple industries and verticals.\n With experience in interacting with stakeholders at all levels, he ensures the establishment of technical and architectural frameworks and methodologies.",
            linkedin: "",
            gmail: "",
            src: vemu,
        },
    ]
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    }
    useNavTheme(
        "#company-btn",
        "--bgColor: #1b1b1b; --textColor: #fff;",
        navRef
    )
    useActiveLink(
        "company-btn",
        "a:nth-child(1)",
        isOpen,
        "linear-gradient(135.03deg, #1b1b1b 75.01%, #1b1b1b 75.01%)"
    )
    useEffect(() => {
        const nav = document.querySelector(`.${navstyles.nav}`)
        const navMobile = document.querySelector(`.${styleMobile["nav"]}`)
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
                )
            } else if (navMobile) {
                navMobile.setAttribute(
                    "style",
                    "--bgColor: #1b1b1b; --textColor: #fff;"
                )
            }
            setTheme("light")
        } else if (nav) {
            nav.setAttribute("style", "--bgColor: #1b1b1b; --textColor: #fff;")
            setTheme("dark")
        } else if (navMobile) {
            navMobile.setAttribute(
                "style",
                "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
            )
            setTheme("dark")
        }
    }, [inView])
    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
            onMove,
            carouselState: { currentSlide, deviceType },
        } = rest
        return (
            <button
                className={styles["right-arrow"]}
                onClick={() => onClick()}
            />
        )
    }
    const CustomLeftArrow = ({ onClick, ...rest }) => {
        const {
            onMove,
            carouselState: { currentSlide, deviceType },
        } = rest
        return (
            <button
                className={styles["left-arrow"]}
                onClick={() => onClick()}
            />
        )
    }
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
            <Navbar
                ref={navRef}
                toggleNav={(state) => {
                    setOpen(state)
                    toggleNav(state)
                }}
                theme={theme}
            />
            {!isOpen ? (
                <div className={styles["about-company"]}>
                    <NavPath
                        theme="dark"
                        main="Company"
                        subPath="About The Company"
                    />
                    <div
                        className={`${styles.squares} ${styles["squares-top-right"]}`}
                    >
                        <Image
                            alt="squares graphic"
                            layout="responsive"
                            objectFit="fill"
                            src={squares}
                        />
                    </div>
                    <main>
                        <div className={styles.left}>
                            <div
                                className={`${styles.squares} ${styles["squares-bottom-right"]}`}
                            >
                                <Image
                                    alt="squares graphic"
                                    layout="responsive"
                                    objectFit="fill"
                                    src={squares}
                                />
                            </div>
                            <iframe
                                className={styles.video}
                                width="560"
                                height="315"
                                src="https://www.youtube-nocookie.com/embed/c3pOa1qXW3A"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className={styles.right}>
                            <p>
                                Prodevans will help transform IT Organizations
                                with on-demand, scalable, reliable Infra based
                                state-of-the-art cloud &#38; container
                                technologies. We have an excellent track record
                                in implementing solutions across India &#38;
                                ASEAN regions. As one of the pioneers in
                                implementing Red Hat Cloud Solutions across the
                                region, we bring a technology know-how that is
                                second to none
                            </p>
                        </div>
                    </main>
                </div>
            ) : null}
            {!isOpen ? (
                <div className={styles.management} ref={ref}>
                    <h2>Management Profiles</h2>
                    <Carousel
                        responsive={responsive}
                        deviceType={deviceType}
                        removeArrowOnDeviceType={[]}
                        centerMode={false}
                        arrows
                        draggable
                        className={styles.profiles}
                        customRightArrow={<CustomRightArrow />}
                        customLeftArrow={<CustomLeftArrow />}
                        infinite
                        shouldResetAutoplay={false}
                        additionalTransfrom={0}
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={true}
                        swipeable
                    >
                        {profiles.map((profile) => (
                            <div
                                key={profile.name}
                                className={styles["profile-container"]}
                            >
                                <div
                                    onClick={() => {
                                        setCurrent(profile.name)
                                    }}
                                    className={`${styles["profile-img"]} ${
                                        profile.smallImg
                                            ? styles["small-img"]
                                            : null
                                    } ${
                                        current === profile.name
                                            ? styles.colored
                                            : null
                                    } ${
                                        profile.classname
                                            ? profile.classname
                                            : null
                                    }`}
                                >
                                    <Image
                                        alt="squares graphic"
                                        layout="responsive"
                                        objectFit="fill"
                                        src={profile.src}
                                    />
                                </div>
                                <p className={styles.name}>{profile.name}</p>
                                <p className={styles.designation}>
                                    {profile.designation}
                                </p>
                            </div>
                        ))}
                    </Carousel>
                    <div className={styles.content}>
                        {
                            profiles.find((profile) => profile.name === current)
                                ?.content
                        }
                        <div className={styles.socials}>
                            <a
                                href={
                                    profiles.find(
                                        (profile) => profile.name === current
                                    )?.gmail
                                }
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <Image
                                    alt="Gmail"
                                    layout="responsive"
                                    objectFit="fill"
                                    src={gmail}
                                />
                            </a>
                            <a
                                href={
                                    profiles.find(
                                        (profile) => profile.name === current
                                    )?.linkedin
                                }
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <Image
                                    alt="LinkedIn"
                                    layout="responsive"
                                    objectFit="fill"
                                    src={linkedin}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            ) : null}
            {!isOpen ? (
                <div className={styles["about-company-footer"]}>
                    <h2>Manage any project with Prodevans</h2>
                    <p>
                        We combine the practice of managing and analysing
                        projects to its fullest potential and maximise its
                        effectiveness in order to stay on top of everything.
                    </p>
                    <Link href={"/#contact-us"}>Contact Us</Link>
                    <div className={`${styles.squares} ${styles["top-right"]}`}>
                        <Image
                            alt="squares graphic"
                            layout="responsive"
                            objectFit="fill"
                            src={blueSquares}
                        />
                    </div>
                    <div
                        className={`${styles.squares} ${styles["bottom-left"]}`}
                    >
                        <Image
                            alt="squares graphic"
                            layout="responsive"
                            objectFit="fill"
                            src={blueSquares}
                        />
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}
