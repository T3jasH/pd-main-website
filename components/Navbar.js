import Link from "next/link"
import Image from "next/image"
import logo from "../assets/prodevansLogo.svg"
import React, { useRef } from "react"

const Navbar = (props, navRef) => {
    const company = useRef(null)
    const resources = useRef(null)
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
            <p
                id="company"
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
            </p>
            <Link href="/services" aria-label="Services">
                Services
            </Link>
            <Link href="/industries" aria-label="Industries">
                Industries
            </Link>
            <Link href="/products" aria-label="Products">
                Products
            </Link>
            <p
                className="resources"
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
            </p>
            <Link href="/events" aria-label="Events" id="events">
                Events
            </Link>
            <Link href="/#contact" aria-label="Contact Us">
                Contact
            </Link>
        </nav>
    )
}

export default React.forwardRef(Navbar)
