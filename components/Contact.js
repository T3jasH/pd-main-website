import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import style from "../styles/contact.module.scss"
import navStyles from "../styles/navbar.module.scss"

export default function Contact() {
    const { ref, inView } = useInView({
        rootMargin: "-45% 0%",
    })

    useEffect(() => {
        const nav = document.querySelector("nav")
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #2e2e2e; --textColor: #fbfbf;"
                )
            }
            const btn = document.querySelector("#contact-us-btn")
            if (btn) {
                btn.classList.add(navStyles.active)
            }
        } else {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #f4f4f4; --textColor: #0a0a0a; --focusTextColor: #1b1b1b;"
                )
            }
            const btn = document.querySelector("#contact-us-btn")
            if (btn) {
                btn.classList.remove(navStyles.active)
            }
        }
    }, [inView])
    const submit = (e) => {
        e.preventDefault()
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
                            placeholder="First Name"
                            aria-label={"First Name"}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            aria-label={"Last Name"}
                        />
                    </div>
                    <div className={style["form-row"]}>
                        <input
                            type="text"
                            placeholder="Email"
                            aria-label={"Email"}
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            aria-label={"Phone"}
                        />
                    </div>
                    <div className={style["form-row"]}>
                        <input
                            type="text"
                            placeholder="Company"
                            aria-label={"Company"}
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            aria-label={"Subject"}
                        />
                    </div>
                    <div className={style["form-row"]}>
                        <textarea aria-label="Message" placeholder="Message" />
                    </div>
                    <div className={style["form-row"]}>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}
