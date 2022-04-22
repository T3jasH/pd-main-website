import React, { useEffect, useRef, useState } from "react"
import style from "../styles/navMobile.module.scss"
import logo from "../assets/prodevansLogo.svg"
import Image from "next/image"
import Link from "next/link"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavMobile = (props, navRef) => {
    const company = useRef(null)
    const resources = useRef(null)
    const industries = useRef(null)
    const services = useRef(null)
    const [isOpen, setOpen] = useState(undefined)

    useEffect(() => {
        if (props.toggleNav) props.toggleNav(isOpen)
    }, [isOpen])

    const openDropDown = (ref) => {
        const dropDown = ref.current.querySelector(`.${style.dropdown}`)
        dropDown.classList.add(`${style["dropdown-open"]}`)
    }
    const closeDropDown = (ref) => {
        const dropDown = ref.current.querySelector(`.${style.dropdown}`)
        dropDown.classList.remove(`${style["dropdown-open"]}`)
    }

    if (!isOpen) {
        return (
            <>
                <button
                    className={style["nav"]}
                    onClick={() => setOpen(!isOpen)}
                ></button>
                <div className={style.logo}>
                    <Image alt="PD Logo" src={logo} />
                </div>
            </>
        )
    }

    return (
        <div className={style["nav-mobile-opened"]}>
            <h3>Menu</h3>
            <div id="home-btn" aria-label="Home" className={style["nav-item"]}>
                <Link href="/">Home</Link>
            </div>
            <div
                className={style["nav-item"]}
                aria-label="About Us"
                id="about-us-btn"
            >
                <Link href="/#about-us">About Us</Link>
            </div>
            <div
                id={"company-btn"}
                className={style["nav-item"]}
                aria-label="Company"
                ref={company}
            >
                Company
                <div className={style.dropdown}>
                    <Link
                        href="/company/about"
                        id="company-about-btn"
                        aria-label="About the company"
                    >
                        About
                    </Link>
                    <Link
                        href="/company/careers"
                        id="company-careers-btn"
                        aria-label="Careers"
                    >
                        Careers
                    </Link>
                </div>
            </div>
            <div
                id={"industries-btn"}
                className={style["nav-item"]}
                aria-label="Industries"
                ref={industries}
            >
                Industries{" "}
                <div className={style.dropdown}>
                    <Link href="/industries/education" aria-label="Education">
                        Education
                    </Link>
                    <Link href="/industries/telecom" aria-label="Telecom">
                        Telecom
                    </Link>
                    <Link href="/industries/healthcare" aria-label="Healthcare">
                        Healthcare
                    </Link>
                    <Link
                        href="/industries/financial-banking"
                        aria-label="Financial Banking"
                    >
                        Financial and Banking
                    </Link>
                </div>
            </div>
            <div
                id={"services"}
                aria-label="Services"
                className={style["nav-item"]}
                ref={services}
            >
                Services
                <div className={style.dropdown}>
                    <Link href="/services/cloud" aria-label="Cloud">
                        Cloud Services
                    </Link>
                    <Link
                        href="/services/modernization"
                        aria-label="Application Modernization"
                    >
                        Application Modernization
                    </Link>
                    <Link
                        href="/services/monitoring"
                        aria-label="360 Degrees Monitoring"
                    >
                        360 Degrees Monitoring
                    </Link>
                    <Link
                        href="/services/identity-access-management"
                        aria-label="Identity and Access Management"
                    >
                        Identity &#38; Access Management
                    </Link>
                    <Link href="/services/automation" aria-label="Automation">
                        Automation
                    </Link>
                    <Link
                        href="/services/devops-tools-support"
                        aria-label="Devops Tools And Support"
                    >
                        Devops Tools &#38; Support
                    </Link>
                    <Link
                        href="/services/infrastructure"
                        aria-label="Infrastructure"
                    >
                        Infrastructure
                    </Link>
                </div>
            </div>
            <div
                id={"products-btn"}
                className={style["nav-item"]}
                aria-label="Products"
            >
                <Link href="/products">Products</Link>
            </div>
            <div
                id={"resources"}
                className={style["nav-item"]}
                aria-label="Resources"
                ref={resources}
            >
                Resources
                <div className={style.dropdown}>
                    <Link
                        href="/resources/case-study"
                        aria-label="Case study"
                        id="case-study-link"
                    >
                        Case Study
                    </Link>
                    <Link href="/resources/media" aria-label="Media">
                        Media
                    </Link>
                    <Link href="/resources/brochures" aria-label="Brochures">
                        Brochures
                    </Link>
                    <Link
                        href="/resources/openshift-captains"
                        aria-label="PD Openshift Captains"
                    >
                        Openshift Captains
                    </Link>
                </div>
            </div>
            <div
                className={style["nav-item"]}
                aria-label="Events"
                id="events-btn"
            >
                <Link href="/events">Events</Link>
            </div>
            <div
                id="contact-us-btn"
                aria-label="Contact Us"
                className={style["nav-item"]}
            >
                <Link href="/#contact">Contact</Link>
            </div>
            <FontAwesomeIcon
                icon={faTimesCircle}
                className={style["nav-icon"]}
                onClick={() => setOpen(!isOpen)}
            />
        </div>
    )
}

export default React.forwardRef(NavMobile)
