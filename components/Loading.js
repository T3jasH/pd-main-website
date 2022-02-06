import { useEffect, useRef } from "react"
import Navbar from "./Navbar"

export default function Loading() {
    const navRef = useRef(null)
    useEffect(() => {
        navRef.current.classList.add("loading-on")
    }, [])
    return <Navbar ref={navRef} />
}
