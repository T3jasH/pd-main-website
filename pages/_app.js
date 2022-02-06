import "../styles/index.scss"
import Router from "next/router"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"

function MyApp({ Component, pageProps }) {
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        Router.events.on("routeChangeStart", () => setLoading(true))
        Router.events.on("routeChangeComplete", () => setLoading(false))
    }, [])
    return isLoading ? <Loading /> : <Component {...pageProps} />
}

export default MyApp
