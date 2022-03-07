import Image from "next/image"
import aboutRightImage from "../assets/aboutRightImage.png"
import tiles from "../assets/tiles.png"
import { useInView } from "react-intersection-observer"
import { Fragment, useEffect } from "react"
import style from "../styles/about.module.scss"
import navStyles from "../styles/navbar.module.scss"

const About = () => {
    const { ref, inView } = useInView({
        rootMargin: "-45% 0%",
    })

    useEffect(() => {
        const nav = document.querySelector("nav")
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
                )
            }
            const btn = document.querySelector("#about-us-btn")
            if (btn) {
                btn.classList.add(navStyles.active)
            }
        } else {
            const btn = document.querySelector("#about-us-btn")
            if (btn) {
                btn.classList.remove(navStyles.active)
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
                            missing.
                        </h2>
                        <p>
                            Prodevans is an ISO 9001 | 27001 | 20000 Accredited
                            Certified,a leading technology solution provider
                            specialising in end-to-end DevOps offerings that
                            streamline and automate IT delivery. We specialize
                            in the entire spectrum of Cloud Solutions from IaaS,
                            PaaS to SaaS. We strive to offer solutions that are
                            time-driven & efficient with a stringent focus on
                            ROI Prodevans helps you deliver great customer
                            experience by deploying the right Cloud-based tools
                            and resources.
                        </p>
                        <div className={style.tiles}>
                            <Image
                                alt="tiles graphic"
                                layout="fill"
                                objectFit="contain"
                                src={tiles}
                            />
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.rightImage}>
                            <Image
                                alt="graphic"
                                layout="fill"
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
