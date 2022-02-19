import Image from "next/image"
import redhat from "../assets/redhat.svg"
import handsOn from "../assets/handsOn.svg"
import bespokeSolutions from "../assets/bespokeSolutions.svg"
import digitalTransfomation from "../assets/digitalTransfomation.svg"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import style from "../styles/whyPD.module.scss"

export default function WhyPD() {
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
        <div id={style["why-pd"]} ref={ref}>
            <div className={style["blue-bg"]}>
                <h2>Why should you choose Prodevans?</h2>
            </div>
            <div className={style["cards-table"]}>
                <div className={style.card}>
                    <div className={style.graphic}>
                        <Image
                            alt="Red Hat"
                            layout="fill"
                            objectFit="contain"
                            src={redhat}
                        />
                    </div>
                    <h2>14 Year Experience with Red Hat</h2>
                    <p>
                        #1 Training Partner in the Country. High Expertise in
                        Complete Red Hat Suite of Products
                    </p>
                </div>
                <div className={style.card}>
                    <div className={style.graphic}>
                        <Image
                            alt="Hands on field experience"
                            layout="fill"
                            objectFit="contain"
                            src={handsOn}
                        />
                    </div>
                    <h2>Hands On Field Experience</h2>
                    <p>
                        Solid Track record on OpenShift Implementations Provided
                        Solutions across India & ASEAN
                    </p>
                </div>
                <div className={style.card}>
                    <div className={style.graphic}>
                        <Image
                            alt="Bespoke solutions"
                            layout="fill"
                            objectFit="contain"
                            src={bespokeSolutions}
                        />
                    </div>
                    <h2>Bespoke Solutions</h2>
                    <p>
                        Great track record in digital transformation with
                        successful executions in Citibank, Singapore, ANZ &
                        Exide Life
                    </p>
                </div>
                <div className={style.card}>
                    <div className={style.graphic}>
                        <Image
                            alt="Digital transformation"
                            layout="fill"
                            objectFit="contain"
                            src={digitalTransfomation}
                        />
                    </div>
                    <h2>Digital Transformation Specialists</h2>
                    <p>
                        Great track record in digital transformation with
                        successful executions in Citibank, Singapore, ANZ &
                        Exide Life
                    </p>
                </div>
            </div>
        </div>
    )
}
