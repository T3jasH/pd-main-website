import Head from "next/head"
import Image from "next/image"
import React, { useRef, useState } from "react"
import useNavTheme from "../../hooks/useNavTheme"
import Navbar from "../../components/Navbar"
import NavPath from "../../components/NavPath"
import accessManagement from "../../assets/accessManagement.png"
import accessManagement2 from "../../assets/accessManagement2.png"
import sso from "../../assets/sso.png"
import consentManagement from "../../assets/consentManagement.png"
import b2b from "../../assets/b2b.png"
import multifactorAuth from "../../assets/multifactorAuth.jpg"
import styles from "../../styles/services.module.scss"

export default function Management() {
    const navRef = useRef(null)
    useNavTheme("#services", "--bgColor: #1b1b1b; --textColor: #fff;", navRef)
    const list = [
        {
            name: "Prodevans Digital Identity",
            description:
                "Prodevans customer experience fuels better engagement and drives revenue and loyalty. It is, therefore, essential for your CIAM to deliver convenience, hyper-personalization, and security tightly coupled to revamp your digital customer experience. With Unotech's CIAM solution, allow your consumers to enjoy seamless yet highly secure experiences as they conveniently access your revenue-generating digital products and services. Ensure fully encrypted customer profile and consent-managed data aggregation for privacy-concerned and security-aware consumers to earn their trust and loyalty.",
            btn: "digital",
            img: accessManagement2,
        },
        {
            name: "Single Sign-On",
            btn: "sso",
            img: sso,
            description:
                "Enable one-click consumer access to all your apps and enterprise assets in a highly secured environment - from any location and any device. Leverage secure single sign-on (SSO) to provide seamless access to your modern applications through OIDC, SAML and CAS enabled offerings, and your legacy applications through support for Custom API-based token exchange SSO.",
        },
        {
            name: "Consent Management",
            btn: "mgmt",
            img: consentManagement,
            description:
                "Regulatory requirements, such as GDPR, make it pertinent for enterprises to introduce consent management platform to collect and process consent of consumers for specific data-processing purposes, like marketing, analysis or health. Ensure privacy of your consumers by obtaining their consent before collecting and processing their personal data. Unotech's Consent Management module helps define your consent-obtaining process and its association with processing purpose or activities, while ensuring apt mechanisms to store, record, process and disseminate such data for Prodevans and secured user experience.",
        },
        {
            name: "Multi-factor Authentication",
            btn: "mfa",
            img: multifactorAuth,
            description:
                "Prevent data breaches by supporting a variety of MFA mechanisms to enforce stronger security and better authentication of your consumers. You can select from a range of options to conduct MFA with OTP on Email or SMS, Secret Challenges/Questions, Time-based OTP on third-party authenticators or on Unotech’s Authenticator that supports Push Notifications and TOTP. Help redefine the user experience by enabling your consumers to go securely password-less to digitally access enterprise data, services, and assets.",
        },
        {
            name: "B2B Integration",
            btn: "b2b",
            img: b2b,
            description:
                "Our CIAM solution allows businesses to easily integrate data among various enterprise directories or identity providers. This, in turn, simplifies end-to-end management of Consumer Identity Lifecycle and helps to focus more on adding value to the consumers, protect against risks, while managing privacy concerns comprehensively.",
        },
    ]
    const [activeBtn, setActive] = useState("digital")
    return (
        <React.Fragment>
            <Head>
                <title>Identity And Access Management</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className={styles.modernization}>
                <NavPath
                    main={"Services"}
                    subPath={"Identity and Access Management"}
                    theme={"dark"}
                />
                <div className={styles["modernization-container"]}>
                    <div className={styles.text}>
                        <h2>
                            Transform Digital Consumer Experience With Prodevans
                            Access
                        </h2>
                        <p>
                            Prodevans customer experience fuels better
                            engagement and drives revenue and loyalty. It is,
                            therefore, essential for your CIAM to deliver
                            convenience, hyper-personalization, and security
                            tightly coupled to revamp your digital customer
                            experience.Create a homogenous, single view of your
                            consumer from across disparate user stores within
                            your enterprise and offer consistent, multi-channel
                            personalization with risk-score backed, adaptive
                            multi-factor authentication.Deployed across cloud,
                            on-premises, or hybrid IT environments, future-proof
                            your enterprise by boosting the agility and
                            scalability of its consumer identity access
                            management capabilities with Prodevans CIAM.
                        </p>
                    </div>
                    <div className={styles["access-management-img"]}>
                        <Image
                            alt="Identity and Access Management"
                            layout="responsive"
                            objectFit="fill"
                            src={accessManagement}
                        />
                    </div>
                </div>
                <div className={styles["access-management-container"]}>
                    <div className={styles.left}>
                        <h3>Our Solutions Stack</h3>
                        <div className={styles.box}>
                            {list.map((item, i) => (
                                <button
                                    key={i}
                                    className={`${
                                        activeBtn === item.btn
                                            ? styles.coloured
                                            : ""
                                    }`}
                                    onClick={() => setActive(item.btn)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.right}>
                        {[list.find((item) => item.btn === activeBtn)].map(
                            (item, i) => (
                                <React.Fragment key={i}>
                                    <p>{item.description}</p>
                                    <div
                                        className={
                                            styles["access-management-img"]
                                        }
                                    >
                                        <Image
                                            alt={item.name}
                                            layout="responsive"
                                            objectFit="fill"
                                            src={item.img}
                                        />
                                    </div>
                                </React.Fragment>
                            )
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
