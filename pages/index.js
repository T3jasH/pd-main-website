import Head from "next/head"
import rightImage from "../assets/rightImage.png"
import { useEffect, useRef } from "react"
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
import { useMediaQuery } from "react-responsive"
// import Whatsapp from "../components/Whatsapp"

export default function Home() {
    const { ref, inView } = useInView({
        rootMargin: "-50% 0%",
    })
    const navRef = useRef(null)
    const isPhone = useMediaQuery({
        query: "(max-device-width: 600px)",
    })

    useEffect(() => {
        const nav = document.querySelector("nav")
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #1b1b1b; --textColor: #fff;"
                )
            }
            const btn = document.querySelector("#home-btn > a")
            if (btn) {
                btn.setAttribute(
                    "style",
                    "color: var(--focusTextColor); font-weight: 600;"
                )
            }
        } else {
            const btn = document.querySelector("#home-btn > a")
            if (btn) {
                btn.setAttribute(
                    "style",
                    "color: var(--textColor); font-weight: 300;"
                )
            }
        }
    }, [inView])
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
            <Navbar ref={navRef} />
            <main className={style.main}>
                <div id={style.home} ref={ref}>
                    <div className={style.left}>
                        <h1>
                            Tech like <span className={style.blue}>never</span>{" "}
                            before
                        </h1>
                        <h2>A cloud and Devops partner</h2>
                        <h2>Fullstack Devops and automation experts</h2>
                        <h2>
                            Real world expertise in optimising applications for
                            cloud
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
                <About />
                <WhyPD />
                <Vision />
                <Reviews />
                <Clients />
                <Contact />
            </main>
        </div>
    )
}
