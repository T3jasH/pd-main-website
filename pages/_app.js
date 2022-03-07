import "../styles/index.scss"
import Router from "next/router"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import CommonFooter from "../components/CommonFooter"

function MyApp({ Component, pageProps }) {
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        Router.events.on("routeChangeStart", () => setLoading(true))
        Router.events.on("routeChangeComplete", () => setLoading(false))
    }, [])
    return isLoading ? (
        <Loading />
    ) : (
        <>
            <Component {...pageProps} />
            <CommonFooter />
        </>
    )
}

export default MyApp

// our client scroll
// reviews image oval - done
// digital trans image
// dropdown top space - done
// start free change to contact us - done
// careers page stuff
// intern, full time, part time (consultant) - done
// bangalore, hyd, delhi, mumbai, remote - done
// telecom - done
// blue button thing (change content based on what is active) - done
// our cloud portfolio space
// app modernization card padding
// remove 3rd section 360 deg - done
// data.js for articles - done
