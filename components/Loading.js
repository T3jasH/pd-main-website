import { useEffect, useRef } from "react"
import Navbar from "./Navbar"
import styles from "../styles/navbar.module.scss"

export default function Loading() {
    const navRef = useRef(null)
    useEffect(() => {
        if (navRef && navRef.current)
            navRef.current.classList.add(styles["loading-on"])
    }, [])
    return <Navbar ref={navRef} />
}
