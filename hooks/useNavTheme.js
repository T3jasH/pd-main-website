import { useEffect } from "react"
import styles from "../styles/navbar.module.scss"

export default function useNavTheme(
    query,
    themeString,
    navRef,
    subQuery = null
) {
    useEffect(() => {
        if (navRef.current) {
            const item = navRef.current.querySelector(query)
            if (item) {
                item.classList.add(styles.active)
            }
            navRef.current.setAttribute("style", themeString)
            if (subQuery) {
                const subItem = navRef.current.querySelector(subQuery)
                if (subItem) {
                    subItem.classList.add(styles.active)
                }
            }
        }
    }, [navRef])
}
