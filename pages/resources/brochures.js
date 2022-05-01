import Head from "next/head"
import Image from "next/image"
import React, { useRef, useState } from "react"
import Navbar from "../../components/Navbar"
import pdCorp from "../../assets/prodevansCorporate.png"
import pdOpen from "../../assets/prodevansOpenshift.png"
import pdManaged from "../../assets/prodevansManaged.png"
import pdCloud from "../../assets/pdCloudEx.png"
import pdProfile from "../../assets/prodevansProfile.png"
import iVentura from "../../assets/iVenturaProfile.png"
import useNavTheme from "../../hooks/useNavTheme"
import NavPath from "../../components/NavPath"
import styles from "../../styles/resources/brochures.module.scss"
import useActiveLink from "../../hooks/useActiveLink"
import pdCorporate from "/public/corporateBrochure.pdf"
import openshiftManaged from "/public/openshiftManaged.pdf"
import ansibleManaged from "/public/ansibleManaged.pdf"
import pdCloudex from "/public/pdCloudex.pdf"
import pdProfilePdf from "/public/pdProfile.pdf"
import pdIventura from "/public/pdIventura.pdf"

export default function Brochures({ toggleNav }) {
    const brochures = [
        {
            name: "Prodevans Corporate Brochure",
            src: pdCorp,
            href: pdCorporate,
        },
        {
            name: "Prodevans OpenShift Managed Service",
            src: pdOpen,
            href: openshiftManaged,
        },
        {
            name: "Prodevans Ansible Managed Service",
            src: pdManaged,
            href: ansibleManaged,
        },
        {
            name: "PDCloudEX",
            src: pdCloud,
            href: pdCloudex,
        },
        {
            name: "Prodevans Profile",
            src: pdProfile,
            href: pdProfilePdf,
        },
        {
            name: "iVentura Profile",
            src: iVentura,
            href: pdIventura,
        },
    ]
    const navRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    useNavTheme(
        "#resources",
        "--bgColor: #f4f4f4; --textColor: #0a0a0a;",
        navRef
    )
    useActiveLink("resources", "a:nth-child(3)", isOpen)
    return (
        <React.Fragment>
            <Head>
                <title>Prodevans Brochures</title>
                <meta
                    name="description"
                    content="Published articles by Prodevans"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                ref={navRef}
                toggleNav={(state) => {
                    setIsOpen(state)
                    toggleNav(state)
                }}
            />
            {!isOpen ? (
                <div className={styles.brochures}>
                    <NavPath
                        theme={"light"}
                        main={"Resources"}
                        subPath={"Brochures"}
                    />
                    <div className={styles.list}>
                        {brochures.map((brochure) => (
                            <div
                                className={styles.brochure}
                                key={brochure.name}
                            >
                                <a
                                    href={brochure.href}
                                    target={"_blank"}
                                    rel="noreferrer"
                                    download={true}
                                >
                                    <h2>{brochure.name}</h2>
                                </a>
                                <div className={styles["brochure-img"]}>
                                    <Image
                                        alt={brochure.name}
                                        layout="responsive"
                                        objectFit="fill"
                                        src={brochure.src}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}
