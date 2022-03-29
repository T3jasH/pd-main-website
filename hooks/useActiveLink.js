import { useEffect } from "react"
import styles from "../styles/navbar.module.scss"

export default function useActiveLink(id, query) {
    useEffect(() => {
        const element = document.getElementById(id)
        if (element) {
            const link = element.querySelector(query)
            if (link) {
                link.classList.add(styles["active-link"])
            }
        }
    })
}
