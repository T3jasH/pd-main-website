import Image from "next/image"
import aboutRightImage from "../assets/aboutRightImage.png"
import tiles from "../assets/tiles.png"
import { useInView } from "react-intersection-observer"
import { Fragment, useEffect } from "react"

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
        }
    }, [inView])

    return (
        <Fragment>
            <div id="about-us" ref={ref}>
                <div className="container">
                    <div className="left">
                        <h2>
                            We are what your{" "}
                            <span className="underline">brand</span> is missing.
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
                        <div className="tiles">
                            <Image
                                alt="tiles graphic"
                                layout="fill"
                                objectFit="contain"
                                src={tiles}
                            />
                        </div>
                    </div>
                    <div className="right">
                        <div className="rightImage">
                            <Image
                                alt="graphic"
                                layout="fill"
                                objectFit="contain"
                                src={aboutRightImage}
                            />
                        </div>
                    </div>
                </div>
                <div className="about-us-footer">
                    <div className="line blue-line"></div>
                    <div className="line gray-line"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
