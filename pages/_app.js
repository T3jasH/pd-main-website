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

// 2nd meeting

// bigger review image - done
// gmail icon
// linkedin icon
// admin side input width increase, rounded button, clickable link, bigger font size, improve form, remove company - done
// login page bottom padding - done
// insurance -> storage and security too long
// iventura.ai pdcloudex.com - done
// openshift captain what why how - done
// events description - done
//

// DEsktop meeting

// navbar issue
// remove whatsapp icon - done
// education padding bottom - done
// remove insurance from navbar - done
// identity access management images size issue
// automation ansible title margin top increase - done
// published articles add images
// openshift image issue
// careers page icon / alignment
// remove demo, change bangalore/ - done
