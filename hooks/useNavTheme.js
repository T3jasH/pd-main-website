import { useEffect } from "react"

export default function useNavTheme(query, themeString, navRef) {
    useEffect(() => {
        if (navRef.current) {
            const item = navRef.current.querySelector(query)
            console.log(item)
            if (item) {
                item.classList.add("active")
            }
            navRef.current.setAttribute("style", themeString)
        }
    }, [navRef])
}
