import { useEffect } from "react"
import styles from "../styles/navbar.module.scss"
import { useMediaQuery } from "react-responsive"
import navMobileStyles from "../styles/navMobile.module.scss"

export default function useActiveLink(id, query, isOpen) {
    const isPhone = useMediaQuery({
        query: "(max-device-width: 600px)",
    })
    useEffect(() => {
        const element = document.getElementById(id)
        if (element) {
            if (query) {
                const link = element.querySelector(query)
                if (isPhone) {
                    link.classList.add(navMobileStyles["active-sublink"])
                } else {
                    link.classList.add(styles["active-link"])
                }
            }
            element.classList.add(navMobileStyles["active"])
        }
    }, [isOpen])
}
