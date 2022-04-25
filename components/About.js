import Image from "next/image"
import aboutRightImage from "../assets/aboutRightImage.svg"
import tiles from "../assets/tiles.png"
import tilesTopRight from "../assets/tilesTopRight.png"
import { useInView } from "react-intersection-observer"
import { Fragment, useEffect } from "react"
import style from "../styles/about.module.scss"
import navStyle from "../styles/navbar.module.scss"
import styleMobile from "../styles/navMobile.module.scss"
import { useMediaQuery } from "react-responsive"

const About = () => {
    const { ref, inView } = useInView({
        rootMargin: "-10% 0%",
    })
    const isPhone = useMediaQuery({
        query: "(max-device-width: 650px)",
    })
    useEffect(() => {
        const nav = document.querySelector(`.${navStyle.nav}`)
        const navMobile = document.querySelector(`.${styleMobile.nav}`)
        console.log(inView)
        if (inView) {
            console.log(`.${style.nav}`)
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
                )
            } else if (navMobile) {
                navMobile.setAttribute(
                    "style",
                    "--bgColor: #1b1b1b; --textColor: #fff;"
                )
            }
            const btn = document.querySelector("#about-us-btn > a")
            if (btn) {
                btn.setAttribute(
                    "style",
                    "color: var(--focusTextColor); font-weight: 600;"
                )
            }
        } else {
            const btn = document.querySelector("#about-us-btn > a")
            if (btn) {
                btn.setAttribute(
                    "style",
                    "color: var(--textColor); font-weight: 400;"
                )
            }
        }
    }, [inView])

    return (
        <Fragment>
            <div id={`about-us`} className={style["about-us"]} ref={ref}>
                <div className={style.container}>
                    <div className={style.left}>
                        <h2>
                            We are what your{" "}
                            <span className={style.underline}>brand</span> is
                            missing
                        </h2>
                        <p>
                            Prodevans is an ISO 9001 | 27001 | 20000 Accredited
                            Certified Company,a leading technology solution
                            provider specialising in end-to-end DevOps offerings
                            that streamline and automate IT delivery. We
                            specialize in the entire spectrum of Cloud Solutions
                            from IaaS, PaaS to SaaS. We strive to offer
                            solutions that are time-driven &#38; efficient with
                            a stringent focus on ROI. Prodevans helps you
                            deliver great customer experience by deploying the
                            right Cloud-based tools and resources.
                        </p>
                        {isPhone ? null : (
                            <div className={style.tiles}>
                                <Image
                                    alt="tiles graphic"
                                    layout="fill"
                                    objectFit="contain"
                                    src={tiles}
                                />
                            </div>
                        )}
                    </div>
                    <div className={style.right}>
                        <div className={style["tiles-top-right"]}>
                            <Image
                                alt="graphic"
                                layout="responsive"
                                objectFit="contain"
                                src={tilesTopRight}
                            />
                        </div>
                        <div className={style.rightImage}>
                            <Image
                                alt="graphic"
                                layout="responsive"
                                objectFit="contain"
                                src={aboutRightImage}
                            />
                        </div>
                    </div>
                </div>
                <div className={style["about-us-footer"]}>
                    <div
                        className={`${style["blue-line"]} ${style.line}`}
                    ></div>
                    <div
                        className={`${style["gray-line"]} ${style.line}`}
                    ></div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
