import Head from "next/head"
import rightImage from "../assets/rightImage.png"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Navbar from "../components/Navbar"
import Link from "next/link"
import About from "../components/About"
import WhyPD from "../components/WhyPD"
import Vision from "../components/Vision"
import Reviews from "../components/Reviews"
import Clients from "../components/Clients"
import Contact from "../components/Contact"
import style from "../styles/home.module.scss"
import styleMobile from "../styles/navMobile.module.scss"
import { useMediaQuery } from "react-responsive"

// import Whatsapp from "../components/Whatsapp"

export default function Home({ toggleNav }) {
    const { ref, inView } = useInView({
        rootMargin: "-5% 0%",
    })
    const navRef = useRef(null)
    const isPhone = useMediaQuery({
        query: "(max-device-width: 600px)",
    })
    const [isOpen, setOpen] = useState(false)
    const [theme, setTheme] = useState("dark")
    useEffect(() => {
        const nav = document.querySelector("nav")
        const navMobile = document.querySelector(`.${styleMobile["nav"]}`)
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #1b1b1b; --textColor: #fff;"
                )
            } else if (navMobile) {
                navMobile.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
                )
            }
            const btn = document.querySelector("#home-btn > a")
            if (btn) {
                btn.setAttribute(
                    "style",
                    "color: var(--focusTextColor); font-weight: 600;"
                )
            }
            setTheme("dark")
        } else {
            const btn = document.querySelector("#home-btn > a")
            if (btn) {
                btn.setAttribute(
                    "style",
                    "color: var(--textColor); font-weight: 400;"
                )
            }
        }
    }, [inView])
    useEffect(() => {
        document
            .querySelector(":root")
            .style.setProperty(
                "background",
                "linear-gradient(135.03deg, #1b1b1b 75.01%, #1b1b1b 75.01%)"
            )
    }, [])
    return (
        <div>
            <Head>
                <title>Prodevans - Tech Like Never Before</title>
                <meta
                    name="description"
                    content="Prodevans is a leading technology solution provider specialising in end to end DevOps offerings that streamline and automate IT delivery."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                ref={navRef}
                toggleNav={(state) => {
                    setOpen(state)
                    toggleNav(state)
                }}
                theme={theme}
            />

            {!isOpen ? (
                <main className={style.main}>
                    <div id={style.home} ref={ref}>
                        <div className={style.left}>
                            <h1>
                                Tech like{" "}
                                <span className={style.blue}>never</span> before
                            </h1>
                            <h2>A Cloud and DevOps partner</h2>
                            <h2>Fullstack Devops and automation experts</h2>
                            <h2>
                                Real world expertise in optimising applications
                                for cloud
                            </h2>
                            <div className={style.stats}>
                                <div>
                                    <h2>256</h2> <h3>Projects Done</h3>
                                </div>
                                <div>
                                    <h2>189</h2> <h3>Satisfied Clients</h3>
                                </div>
                                <div>
                                    <h2>25+</h2> <h3>Awards Won</h3>
                                </div>
                            </div>
                            {isPhone ? null : (
                                <Link href="#about-us">Know More</Link>
                            )}
                        </div>
                        <div className={style.right}>
                            <div className={style.rightImage}>
                                <Image
                                    alt=""
                                    src={rightImage}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            {isPhone ? (
                                <Link href="#about-us">Know More</Link>
                            ) : null}
                        </div>
                    </div>
                    <About setTheme={(propTheme) => setTheme(propTheme)} />
                    <WhyPD setTheme={(propTheme) => setTheme(propTheme)} />
                    <Vision setTheme={(propTheme) => setTheme(propTheme)} />
                    <Reviews setTheme={(propTheme) => setTheme(propTheme)} />
                    <Clients setTheme={(propTheme) => setTheme(propTheme)} />
                    <Contact setTheme={(propTheme) => setTheme(propTheme)} />
                </main>
            ) : null}
        </div>
    )
}
