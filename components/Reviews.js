import Image from "next/image"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import review1 from "../assets/review1.png"
import review2 from "../assets/review2.jpg"
import review3 from "../assets/review3.jpg"
import review4 from "../assets/review4.png"
import previous from "../assets/previous.svg"
import next from "../assets/next.svg"

export default function Reviews() {
    const reviewImages = [review1, review2, review3, review4]
    const reviews = [
        {
            text: "Having been with Red Hat for over a decade, and having met numerous  Academics and Enterprise users, I can say with certainty  that most of them are eager to go with Red Hat or open Source technologies to minimise their investment.. We have been waiting for product just like PDCloudEX.” “PDCloudEx is a game changer when it comes to minimising costs. What’s more, it gives the students exposure to  cutting edge technologies – the need of the hour. Amazing technology. Amazing People” APAC Head – Training & Certification at Star Certification",
            name: "Abhijeet Roy",
        },
        {
            text: "Setting up the labs when there are frequent changes is cumbersome and time consuming. Delivering on ROI is almost impossible with the number of students fluctuating all the time. PDCloudEX gave us the flexibility without compromising on availability. Whether it is public or private cloud, the students now have a way of accessing the labs anywhere, anytime.  We scale up and down as needed. Thanks to PDCloudEX, we now manage our labs with minimal downtime, focussing our energies on  course offerings rather than worrying about Infrastructure” Manager, Global Learning Services, Red Hat INDIA  ",
            name: "PV Aneesh",
        },
        {
            text: "Cloud in a Box (PDcloudEx) offers ready to use standard infrastructure for empowering and educating next generation software engineers with skills in Cloud application programming using Aneka and conducting advance research in powering emerging BigData and Internet Of Things (IoT) applications.- ” Redmond Barry Distinguished Professor and Director of Cloud Computing and Distributed Systems Laboratory at the University of Melbourne, Australia",
            name: "Dr Rajkumar Buyya",
        },
        {
            text: "“Setting up and managing labs is a constant headache. After watching the demo of PDCloudEX, I am confident that it provides a way out of this mess. It is our one-stop-solution to manage all our Lab sessions and projects. Kudos to Prodevans Team for their innovation!”   Assistant Professor, Computer Science and Engineering, RIT Rajaramnagar, India",
            name: "Mr. S. R. Poojara",
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
                    "--bgColor: #73b0f4; --textColor: #fff;"
                )
            }
        } else {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a;"
                )
            }
        }
    }, [inView])

    return (
        <div id="reviews" ref={ref}>
            <h2>
                Hear first hand from our{" "}
                <span className="underline">customers</span>, what they thought
                about our services.
            </h2>
            <div className="review">
                <p className="text">{reviews[currentIndex].text}</p>
                <div className="reviewer">
                    <div className="profile">
                        <Image
                            alt={reviews[currentIndex].name}
                            layout="responsive"
                            objectFit="contain"
                            src={reviewImages[currentIndex]}
                        />
                    </div>
                    <p>{reviews[currentIndex].name}</p>
                </div>
                <div className="controls">
                    {/* <div className="arrow">
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
                    <div className="arrow">
                        <Image
                            alt={"next review"}
                            layout="fill"
                            objectFit="fill"
                            onClick={(e) => {
                                setCurrentIndex(
                                    (prev) =>
                                        (prev - 1 + reviews.length) %
                                        reviews.length
                                )
                            }}
                            src={next}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
