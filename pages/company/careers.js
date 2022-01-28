import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import CommonFooter from "../../components/CommonFooter"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowBlack.svg"
import useNavTheme from "../../hooks/useNavTheme"

export default function Careers() {
    const navRef = useRef(null)
    useNavTheme("#company", "--bgColor: #f4f4f4; --textColor: #0a0a0a;", navRef)
    return (
        <React.Fragment>
            <Head>
                <title>Careers at Prodevans</title>
                <meta
                    name="description"
                    content="Build your future with Prodevans. Join us now!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className="company-careers">
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
                <div className="slogan">
                    <h2>Build your future with Prodevans. Join us now!</h2>
                </div>
            </div>
            <CommonFooter />
        </React.Fragment>
    )
}
