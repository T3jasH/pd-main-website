import Link from "next/link"
import Image from "next/image"
import logo from "../assets/prodevansLogo.svg"
import React, { useRef } from "react"

const Navbar = (props, navRef) => {
    const company = useRef(null)
    const resources = useRef(null)
    const industries = useRef(null)
    const services = useRef(null)
    const openDropDown = (ref) => {
        const dropDown = ref.current.querySelector(".dropdown")
        dropDown.classList.add("dropdown-open")
    }
    const closeDropDown = (ref) => {
        const dropDown = ref.current.querySelector(".dropdown")
        dropDown.classList.remove("dropdown-open")
    }
    return (
        <nav ref={navRef}>
            <div className="logo">
                <Image alt="PD Logo" src={logo} />
            </div>
            <Link href="/" aria-label="Home">
                Home
            </Link>
            <Link href="/#about-us" aria-label="About Us">
                About Us
            </Link>
            <span
                id="company"
                className="nav-item"
                aria-label="Company"
                ref={company}
                onMouseEnter={() => openDropDown(company)}
                onMouseLeave={() => closeDropDown(company)}
            >
                Company
                <div className="dropdown">
                    <Link href="/company/about" aria-label="About the company">
                        About
                    </Link>
                    <Link href="/company/careers" aria-label="Careers">
                        Careers
                    </Link>
                </div>
            </span>
            <span
                id="industries"
                className="nav-item"
                aria-label="Industries"
                ref={industries}
                onMouseEnter={() => openDropDown(industries)}
                onMouseLeave={() => closeDropDown(industries)}
            >
                Industries{" "}
                <div className="dropdown">
                    <Link href="/industries/education" aria-label="Education">
                        Education
                    </Link>
                    <Link href="/industries/telecom" aria-label="Telecom">
                        Telecom
                    </Link>
                    <Link href="/industries/insurance" aria-label="Insurance">
                        Insurance
                    </Link>
                </div>
            </span>
            <span
                id="services"
                aria-label="Services"
                ref={services}
                onMouseEnter={() => openDropDown(services)}
                onMouseLeave={() => closeDropDown(services)}
            >
                Services
                <div className="dropdown">
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
                </div>
            </span>
            <Link className="products" href="/products" aria-label="Products">
                Products
            </Link>
            <span
                id="resources"
                className="nav-item"
                aria-label="Resources"
                ref={resources}
                onMouseEnter={() => openDropDown(resources)}
                onMouseLeave={() => closeDropDown(resources)}
            >
                Resources
                <div className="dropdown">
                    <Link href="/resources/case-study" aria-label="Case study">
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
            </span>
            <Link href="/events" aria-label="Events" className={"events"}>
                Events
            </Link>
            <Link href="/#contact" aria-label="Contact Us" className="contact">
                Contact
            </Link>
            <div className="loading">
                <div className="blue-dash" />
            </div>
        </nav>
    )
}

export default React.forwardRef(Navbar)
