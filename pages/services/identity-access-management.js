import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import useNavTheme from "../../hooks/useNavTheme"
import Navbar from "../../components/Navbar"
import NavPath from "../../components/NavPath"
import accessManagement from "../../assets/accessManagement.png"
import accessManagement2 from "../../assets/accessManagement2.png"
import styles from "../../styles/services.module.scss"

export default function Management() {
    const navRef = useRef(null)
    useNavTheme("#services", "--bgColor: #1b1b1b; --textColor: #fff;", navRef)
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
                            <p className={styles.coloured}>
                                Prodevans Digital Identity
                            </p>
                            <p>Single Sign-On</p>
                            <p>Consent Management</p>
                            <p>Multi-factor Authentication</p>
                            <p>B2B Integration</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p>
                            Prodevans customer experience fuels better
                            engagement and drives revenue and loyalty. It is,
                            therefore, essential for your CIAM to deliver
                            convenience, hyper-personalization, and security
                            tightly coupled to revamp your digital customer
                            experience. With Unotech&apos;s CIAM solution, allow
                            your consumers to enjoy seamless yet highly secure
                            experiences as they conveniently access your
                            revenue-generating digital products and services.
                            Ensure fully encrypted customer profile and
                            consent-managed data aggregation for
                            privacy-concerned and security-aware consumers to
                            earn their trust and loyalty.
                        </p>
                        <div className={styles["access-management-img"]}>
                            <Image
                                alt="Identity and Access Management"
                                layout="responsive"
                                objectFit="fill"
                                src={accessManagement2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
