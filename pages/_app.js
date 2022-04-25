import "../styles/index.scss"
import Router from "next/router"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import CommonFooter from "../components/CommonFooter"
import is from "sharp/lib/is"

function MyApp({ Component, pageProps }) {
    const [isLoading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        Router.events.on("routeChangeStart", () => {
            setLoading(true)
            setIsOpen(false)
        })
        Router.events.on("routeChangeComplete", () => setLoading(false))
    }, [])
    const toggleNav = (state) => setIsOpen(state)
    pageProps.toggleNav = toggleNav
    return isLoading ? (
        <Loading />
    ) : (
        <>
            <Component {...pageProps} />
            {isOpen ? null : <CommonFooter />}
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

// 3rd meeting

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

// 4th meeting

/* Logo bg incrase padding - done
About us empty space, low res image
why pd images fix
Remove about us from navbar, make company > about us - done
careers icons for time and stuff - done
careers page image for icon - done ig
education image center align - done
financial and banking at top in dropdown - done
cloud.services headings bigger - done
our cloud management portfolio heading grammar - done
identity access management images fixing (size and color of one image) - kinda done
highlights of automation points fix 
products - new images for iventura and pdCloudex
resources -> media -> add links on titles, and images - done
downloadable brochures - done
Review openshift captain
events dropdown width increase - done
dedicated contact us page like on current website
email id to which details should get sent in contact us form - done
*/
