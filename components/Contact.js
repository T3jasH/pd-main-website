import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import style from "../styles/contact.module.scss"
import styleMobile from "../styles/navMobile.module.scss"
import emailjs from "emailjs-com"

export default function Contact({ setTheme }) {
    const { ref, inView } = useInView({
        rootMargin: "-25% 0%",
    })
    const [message, setMessage] = useState({ content: "", className: "" })
    const locationsData = [
        {
            id: "blr",
            address:
                "Building # 403, 4th Floor, Saket Callipolis\n Sarjapur Main Rd, Rainbow Drive,\n Doddakannelli\n Bengaluru - 560035\n Phone: +91 8095933365",
        },
        {
            id: "blrCorp",
            address:
                "Building # 389, Second Floor, 8th Main, 7th Cross,\n MICO Layout, BTM 2nd stage,\n Bengaluru - 560076\n Phone: +91 8095933365",
        },
        {
            id: "hyd",
            address:
                "Office # 422, Manjeera Majestic,\n JNTU Road, Hyderabad - 500072\n Phone: +91 40 66773365",
        },
        {
            id: "bkmr",
            address:
                "167 Jalan Bukit Merah #05-12\n Connections One Singapore, 150167",
        },
        {
            id: "okm",
            address:
                "5164, Madison Avenue, C02, Okemos,\n Michigan - 48864\n Phone: +1 (513) 394-1287",
        },
        {
            id: "bom",
            address:
                "308- B Wing, 3rd Floor, Town Centre 2,\n Opposite Times Square, Andheri - Kurla Rd,\n Marol, Andheri East, Mumbai,\n Maharashtra 400059",
        },
    ]
    const [currentSelected, setSelected] = useState("blr")
    useEffect(() => {
        const nav = document.querySelector("nav")
        const navMobile = document.querySelector(`.${styleMobile["nav"]}`)
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #2e2e2e; --textColor: #fbfbf;"
                )
            } else if (navMobile) {
                navMobile.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #1a1a1a;"
                )
            }
            const btn = document.querySelector("#contact-us-btn > a")
            if (btn) {
                btn.setAttribute(
                    "style",
                    "color: var(--focusTextColor); font-weight: 600;"
                )
            }
            setTheme("dark")
        } else {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a; --focusTextColor: #1b1b1b;"
                )
            } else if (navMobile) {
                navMobile.setAttribute(
                    "style",
                    "--bgColor: #1b1b1b; --textColor: #fff;"
                )
            }
            const btn = document.querySelector("#contact-us-btn > a")
            if (btn) {
                btn.setAttribute(
                    "style",
                    "color: var(--textColor); font-weight: 400;"
                )
            }
            setTheme("light")
        }
    }, [inView])
    const validate = (msg) => {
        console.log(msg, masg.name, msg.designation, msg.email, msg.message)
        throw new Error("Error")
    }
    const submit = (e) => {
        e.preventDefault()
        try {
            validate(e.target)
        } catch (err) {
            setMessage({ content: err.message, className: "error" })
        }
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
                e.target,
                process.env.NEXT_PUBLIC_EMAIL_USER_ID
            )
            .then((result) => {
                setMessage({
                    content: "Message sent successfully",
                    className: "success",
                })
                setTimeout(() => {
                    setMessage({ content: "", className: "" })
                }, 3000)
            })
            .catch((err) => {
                console.log(err.text)
                setMessage({
                    content: "Message could not be sent",
                    className: "error",
                })
            })
    }

    return (
        <>
            <div id={"contact"} className={style.contact} ref={ref}>
                <div className={style.left}>
                    <h2>Get in touch.</h2>
                    <p>You have an idea in mind? Let us help you execute it.</p>
                    <p>
                        Send in your message and one of our team members will
                        contact you with the best solution for your current
                        challenges.
                    </p>
                </div>
                <div className={style.right}>
                    <form onSubmit={submit}>
                        <div className={style["form-row"]}>
                            <input
                                type="text"
                                placeholder="Name"
                                aria-label={"Name"}
                                name="sender"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                aria-label={"Email"}
                                name="emailId"
                            />
                        </div>
                        <div className={style["form-row"]}>
                            <input
                                type="text"
                                placeholder="Phone"
                                aria-label={"Phone"}
                                name="phoneNo"
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                aria-label={"Company"}
                                name="company"
                            />
                        </div>
                        <div className={style["form-row"]}>
                            <input
                                type="text"
                                placeholder="Designation"
                                aria-label={"Designation"}
                                name="designation"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                aria-label={"Subject"}
                                name="subject"
                            />
                        </div>
                        <div className={style["form-row"]}>
                            <textarea
                                aria-label="Message"
                                placeholder="Message"
                                name="message"
                            />
                        </div>
                        <div className={style["form-row"]}>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                    <p className={style[`${message.className}`]}>
                        {message.content}
                    </p>
                </div>
            </div>
            <div className={style.locations}>
                <h2>Find us at</h2>
                <div className={style.map}>
                    <div className={style.left}>
                        <div className={style.row}>
                            <div
                                className={`${style.circle} ${
                                    currentSelected === "blr"
                                        ? style.selected
                                        : null
                                }`}
                                onClick={() => setSelected("blr")}
                            >
                                Bengaluru, India
                            </div>
                            <div
                                className={`${style.circle} ${
                                    currentSelected === "blrCorp"
                                        ? style.selected
                                        : null
                                }`}
                                onClick={() => setSelected("blrCorp")}
                            >
                                Bengaluru, India (Corporate)
                            </div>
                        </div>
                        <div className={style.row}>
                            <div
                                className={`${style.circle}  ${
                                    currentSelected === "hyd"
                                        ? style.selected
                                        : null
                                }`}
                                onClick={() => setSelected("hyd")}
                            >
                                Hyderabad, India
                            </div>
                            <div
                                className={`${style.circle} ${
                                    currentSelected === "bkmr"
                                        ? style.selected
                                        : null
                                }`}
                                onClick={() => setSelected("bkmr")}
                            >
                                Bukit Merah, Singapore
                            </div>
                        </div>
                        <div className={style.row}>
                            <div
                                className={`${style.circle} ${
                                    currentSelected === "okm"
                                        ? style.selected
                                        : null
                                }`}
                                onClick={() => setSelected("okm")}
                            >
                                Okemos, USA
                            </div>
                            <div
                                className={`${style.circle} ${
                                    currentSelected === "bom"
                                        ? style.selected
                                        : null
                                }`}
                                onClick={() => setSelected("bom")}
                            >
                                Mumbai, India
                            </div>
                        </div>
                    </div>
                    <div className={style.right}>
                        {
                            locationsData.find(
                                ({ id }) => id === currentSelected
                            )?.address
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
