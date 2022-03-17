import Image from "next/image"
import nvidia from "../assets/nvidia.svg"
import danskeBank from "../assets/danskeBank.svg"
import alphaserve from "../assets/alphaserve.svg"
import backoffice from "../assets/backoffice.svg"
import exide from "../assets/exide.svg"
import lifestyle from "../assets/lifestyle.svg"
import manipalGlobal from "../assets/manipalGlobal.svg"
import marvel from "../assets/marvel.svg"
import mphasis from "../assets/mphasis.svg"
import pristine from "../assets/pristine.svg"
import crayon from "../assets/crayon.svg"
import zee from "../assets/zee.svg"
import hitachi from "../assets/hitachi.png"
import alchemy from "../assets/alchemy.png"
import flipkart from "../assets/flipkart.png"
import redhat from "../assets/redhat.svg"
import clientsGraphic from "../assets/clientsGraphic.png"
import style from "../styles/clients.module.scss"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useState } from "react"

export const getInitialProps = ({ req }) => {
    let userAgent
    let deviceType
    if (req) {
        userAgent = req.headers["user-agent"]
    } else {
        userAgent = navigator.userAgent
    }
    const md = new MobileDetect(userAgent)
    if (md.tablet()) {
        deviceType = "tablet"
    } else if (md.mobile()) {
        deviceType = "mobile"
    } else {
        deviceType = "desktop"
    }
    return { deviceType }
}

export default function Clients(props) {
    const clients1 = [
        { name: "Nvidia", src: nvidia },
        { name: "Hitachi", src: hitachi },
        { name: "Redhat", src: redhat },
        { name: "Flipkart", src: flipkart },
        { name: "Danske Bank", src: danskeBank },
        { name: "Exide Life Insurance", src: exide },
        { name: "Lifestyle", src: lifestyle },
        { name: "Alchemy", src: alchemy },
    ]
    const clients2 = [
        { name: "Alphaserve", src: alphaserve },
        { name: "Zee", src: zee },
        { name: "Manipal Global", src: manipalGlobal },
        { name: "Mphasis", src: mphasis },
        { name: "Pristine", src: pristine },
        { name: "BackOffice", src: backoffice },
        { name: "Marvel", src: marvel },
        { name: "Crayon", src: crayon },
    ]
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    }
    const [isMoving, setMoving] = useState(false)
    return (
        <div id={style.clients}>
            <h3>Our Clients</h3>
            <div className={style["clients-list"]}>
                <Carousel
                    responsive={responsive}
                    deviceType={props.deviceType}
                    infinite={true}
                    autoPlay={true}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    autoPlaySpeed={5000}
                    centerMode={true}
                    transitionDuration={1500}
                >
                    {clients1.map((client) => (
                        <div className={style.client} key={client.name}>
                            <div className={style.client}>
                                <Image
                                    alt={client.name}
                                    layout="responsive"
                                    objectFit="fill"
                                    src={client.src}
                                />
                            </div>
                        </div>
                    ))}
                </Carousel>
                <Carousel
                    responsive={responsive}
                    deviceType={props.deviceType}
                    infinite={true}
                    autoPlay={true}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    autoPlaySpeed={5000}
                    centerMode={true}
                    transitionDuration={1500}
                >
                    {clients2.map((client) => (
                        <div className={style.client} key={client.name}>
                            <div className={style.client}>
                                <Image
                                    alt={client.name}
                                    layout="responsive"
                                    objectFit="fill"
                                    src={client.src}
                                />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className={style["purple-bg"]}>
                <div className={style["clients-graphic"]}>
                    <Image
                        alt="Graphic"
                        layout="responsive"
                        objectFit="fill"
                        src={clientsGraphic}
                    />
                </div>
            </div>
        </div>
    )
}
