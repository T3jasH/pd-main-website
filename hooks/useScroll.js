import { useEffect } from "react"

export default function useScroll() {
    useEffect(() => {
        const hash = window.location.hash
        if (!hash) {
            const element = document.querySelector("body")
            //element.scrollIntoView()
            element.scrollTo(0, 0)
            return
        }
        const element = document.querySelector(hash)
        if (element) {
            console.log("scroll")
            element.scrollIntoView()
        }
    }, [])
}
