import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import CommonFooter from "../../components/CommonFooter"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowBlack.svg"
import pdCorp from "../../assets/prodevansCorporate.png"
import pdOpen from "../../assets/prodevansOpenshift.png"
import pdManaged from "../../assets/prodevansManaged.png"
import pdCloud from "../../assets/pdCloudEx.png"
import pdProfile from "../../assets/prodevansProfile.png"
import iVentura from "../../assets/iVenturaProfile.png"
import useNavTheme from "../../hooks/useNavTheme"

export default function Brochures() {
    const brochures = [
        {
            name: "Prodevans Corporate Brochure",
            src: pdCorp,
        },
        {
            name: "Prodevans OpenShift Managed Service",
            src: pdOpen,
        },
        {
            name: "Prodevans Ansible Managed Service",
            src: pdManaged,
        },
        {
            name: "PDCloudEX",
            src: pdCloud,
        },
        {
            name: "Prodevans Profile",
            src: pdProfile,
        },
        {
            name: "iVentura Profile",
            src: iVentura,
        },
    ]
    const navRef = useRef(null)
    useNavTheme(
        ".resources",
        "--bgColor: #f4f4f4; --textColor: #0a0a0a;",
        navRef
    )
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
            <Navbar ref={navRef} />
            <div className="brochures">
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
                    <h1>Brochures</h1>
                </div>
                <div className="list">
                    {brochures.map((brochure) => (
                        <div className="brochure" key={brochure.name}>
                            <h2>{brochure.name}</h2>
                            <div className="brochure-img">
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
            <CommonFooter />
        </React.Fragment>
    )
}
