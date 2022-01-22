import Link from "next/link"
import Image from "next/image"
import logo from "../assets/prodevansLogo.svg"

const Navbar = () => {
    return (
        <nav>
            <Link href="#about-us" aria-label="About Us">
                About Us
            </Link>
            <Link href="#why-pd" aria-label={"Why PD?"}>
                Why PD?
            </Link>
            <Link href="#vision">Vision</Link>
            <Link href="#reviews">Reviews</Link>
            <Link href="#clients">Clients</Link>
            <Link href="#contact">Contact Us</Link>
            <div className="logo">
                <Image alt="PD Logo" src={logo} />
            </div>
        </nav>
    )
}

export default Navbar
