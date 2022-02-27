import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import Navbar from "../../components/Navbar"
import NavPath from "../../components/NavPath"
import useNavTheme from "../../hooks/useNavTheme"
import automation from "../../assets/automation.png"
import automation2 from "../../assets/automation2.png"
import styles from "../../styles/services.module.scss"

export default function Automation() {
    const automationPoints = [
        "Combining Machine Learning and Rule Engine, an Automation that can predict, classify, heal and run.",
        "Customizable service that can be implemented on Customer AWS account for added security.",
        "End-to-end life cycle control across all regions and any number of AWS accounts at any scale.",
        "Reduced network operations by addressing holes and automating repetitive tasks",
        "Cloud management through industry standard best practices in AWS infrastructure maintenance.",
        "Continuous safety and tracking through intelligent automated / semi-automated daemons",
        "Compliance and governance through industry-specific standards and technology policies",
    ]
    const navRef = useRef(null)
    useNavTheme(
        "#services",
        "--bgColor: #f4f4f4; --textColor: #0a0a0a;",
        navRef
    )
    return (
        <React.Fragment>
            <Head>
                <title>Automation</title>
                <meta
                    name="description"
                    content="Automation Solutions of Prodevans helps enterprises harness Cloud in a secure, compliant, automated and agile ecosystem."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className={styles.cloud}>
                <NavPath
                    subPath={"Automation"}
                    main={"Services"}
                    theme={"light"}
                />
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2>Automation</h2>
                        <p>
                            Automation is minimizing the human assistance in a
                            process or procedure. It enables the organization to
                            automate the process by analyzing and recording data
                            from the current application. It transforms the
                            organization from a manual process to a fast,
                            accurate and reliable automation process.
                        </p>
                        <h2>Questions</h2>
                        <p>
                            This &ldquo;Cloud Migration&rdquo; often raises
                            questions such as &ldquo;What are the ways to manage
                            network assets in this changing landscape?&rdquo;
                            The emphasize in automation and cost control.
                            Notwithstanding this, these issues remain unanswered
                            when it comes to realistic implementations and are
                            very frequently ignored. Coming from a company that
                            was born and bred in Cloud, Automation Solutions of
                            Prodevans helps enterprises harness Cloud in a
                            secure, compliant, automated and agile ecosystem.
                        </p>
                    </div>
                    <div className={styles["cloud-img"]}>
                        <Image
                            alt="Automation"
                            layout="responsive"
                            objectFit="fill"
                            src={automation}
                        />
                    </div>
                </div>
                <div className={styles["automation-points"]}>
                    <h3>Highlights of the Automation Platform</h3>
                    <div className={styles.list}>
                        {automationPoints.map((p, ix) => (
                            <p key={ix}>{p}</p>
                        ))}
                    </div>
                </div>
                <div className={styles["ansible-automation"]}>
                    <div className={styles.left}>
                        <h3>Ansible Network Automation</h3>
                        <p>
                            Ansible&apos;s easy automation platform ensures that
                            previously independent network administrators will
                            now speak the same language of automation as the
                            rest of the IT enterprise, expanding Ansible&apos;s
                            functionality to include native support for legacy
                            and open network infrastructure tools. Network tools
                            and applications can now be included in the overall
                            automation plan of the enterprise for a holistic
                            approach to network workload management.
                        </p>
                    </div>
                    <div className={styles.right}>
                        <div className={styles["automation-img"]}>
                            {" "}
                            <Image
                                alt="Automation"
                                layout="responsive"
                                objectFit="fill"
                                src={automation2}
                            />{" "}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
