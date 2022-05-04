import Image from "next/image"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import review1 from "../assets/review1.png"
import review2 from "../assets/review2.png"
import review3 from "../assets/review3.png"
import review4 from "../assets/review4.png"
import previous from "../assets/previous.svg"
import next from "../assets/next.svg"
import style from "../styles/reviews.module.scss"

export default function Reviews() {
    const reviewImages = [review1, review2, review3, review4]
    const reviews = [
        {
            text: " Having been with Red Hat for over a decade and having met numerous Academicians and Enterprise users, I can say with certainty that most of them are eager to go with Red Hat or Open Source technologies to minimise their investment. We have been waiting for product just like 'PDCloudEX', a game changer when it comes to minimising costs. What's more, it gives the students exposure to cutting-edge technologies which is indeed the need of the hour. Amazing technology. Amazing People ",
            name: "Abhijeet Roy\nAPAC Head - Training & Certification, Star Certification",
        },
        {
            text: " Setting up the labs when there are frequent changes is cumbersome and time consuming. Delivering on ROI is almost impossible with the number of students fluctuating all the time. PDCloudEX gave us the flexibility without compromising on availability. Whether it is public or private cloud, the students now have a way of accessing the labs anywhere, anytime.  We scale up and down as needed. Thanks to PDCloudEX, we now manage our labs with minimal downtime, focussing our energies on  course offerings rather than worrying about Infrastructure. ",
            name: "PV Aneesh\nManager, Global Learning Services, Red Hat INDIA",
        },
        {
            text: " Cloud in a Box (PDcloudEx) offers ready to use standard infrastructure for empowering and educating next generation software engineers with skills in Cloud application programming using Aneka and conducting advance research in powering emerging Big Data and Internet of Things (IoT) applications. ",
            name: "Dr Rajkumar Buyya\nRedmond Barry Distinguished Professor",
        },
        {
            text: " Setting up and managing labs is a constant headache. After watching the demo of PDCloudEX, I am confident that it provides a way out of this mess. It is our one-stop-solution to manage all our Lab sessions and projects. Kudos to Prodevans Team for their innovation! ",
            name: "Mr. S. R. Poojara\nAssistant Professor, Computer Science and Engineering, RIT Rajaramnagar, India",
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const { ref, inView } = useInView({
        rootMargin: "-45% 0%",
    })

    useEffect(() => {
        const nav = document.querySelector("nav")
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #447AB6; --textColor: #000; --borderColor: #fbfbfb; --focusTextColor: #447ab6;"
                )
            }
        } else {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a; --borderColor: #4a88da; --focusTextColor: #1b1b1b;"
                )
            }
        }
    }, [inView])

    return (
        <div id={style.reviews} ref={ref}>
            <h2>
                Hear first-hand from our{" "}
                <span className="underline">customers</span>, what they have to
                say about our services
            </h2>
            <div className={style.review}>
                <div className={style.text}>
                    <p>{reviews[currentIndex].text}</p>
                </div>
                <div className={style.reviewer}>
                    <div className={style.profile}>
                        <Image
                            alt={reviews[currentIndex].name}
                            layout="responsive"
                            objectFit="contain"
                            src={reviewImages[currentIndex]}
                        />
                    </div>
                    <p>{reviews[currentIndex].name}</p>
                </div>
            </div>
            <div className={style.controls}>
                <div className={style.arrow}>
                    <Image
                        alt={"previous review"}
                        layout="fill"
                        objectFit="fill"
                        src={previous}
                        onClick={(e) => {
                            setCurrentIndex(
                                (prev) => (prev + 1) % reviews.length
                            )
                        }}
                    />
                </div>
                <div className={style.arrow}>
                    <Image
                        alt={"next review"}
                        layout="fill"
                        objectFit="fill"
                        onClick={(e) => {
                            setCurrentIndex(
                                (prev) =>
                                    (prev - 1 + reviews.length) % reviews.length
                            )
                        }}
                        src={next}
                    />
                </div>
            </div>
        </div>
    )
}
