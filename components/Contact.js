import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import style from "../styles/contact.module.scss"
import styleMobile from "../styles/navMobile.module.scss"
import emailjs from "emailjs-com"

export default function Contact() {
    const { ref, inView } = useInView({
        rootMargin: "-25% 0%",
    })

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
        }
    }, [inView])
    const submit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
                e.target,
                process.env.NEXT_PUBLIC_EMAIL_USER_ID
            )
            .then((result) => console.log(result.text))
            .catch((err) => console.log(err.text))
    }

    return (
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
            </div>
        </div>
    )
}
