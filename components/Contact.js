import { Fragment, useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function Contact() {
    const { ref, inView } = useInView({
        rootMargin: "-45% 0%",
    })
    const industries = [
        "Industries",
        "Financial & Banking",
        "Health Care",
        "Education",
        "Insurance",
        "Telecom",
        "Retail",
    ]

    useEffect(() => {
        const nav = document.querySelector("nav")
        if (inView) {
            if (nav) {
                nav.setAttribute(
                    "style",
                    "--bgColor: #2e2e2e; --textColor: #fbfbf; --borderColor: #4a88da;"
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
    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="contact-page" ref={ref}>
            <div id="contact">
                <div className="left">
                    <h2>Get in touch.</h2>
                    <p>You have an idea in mind? Let us help you execute it.</p>
                    <p>
                        Send in your message and one of our team members will
                        contact you with the best solution for your current
                        challenges.
                    </p>
                </div>
                <div className="right">
                    <form onSubmit={submit}>
                        <div className="form-row">
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
                        <div className="form-row">
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
                        <div className="form-row">
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
                        <div className="form-row">
                            <textarea
                                aria-label="Message"
                                placeholder="Message"
                            />
                        </div>
                        <div className="form-row">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
            <footer>
                <div className="list">
                    <p>Bangalore Office Address</p>
                    <p>
                        Building # 403 , 5th Floor, Saket Callipolis Sarjapur
                        Main Rd,
                    </p>
                    <p>Rainbow Drive, Doddakannelli</p>
                    <p>Bengaluru – 560035.</p>
                    <p>Phone: +91 8095933365</p>
                    <p>Email:ask@Prodevans.Com</p>
                </div>
                <div className="list">
                    <p>Our Services</p>
                    <p>Cloud Services</p>
                    <p>Application Moderation</p>
                    <p>DevOps Tools</p>
                    <p>IAM</p>
                    <p>ML And Analytics</p>
                    <p>Automation</p>
                </div>
                <div className="list">
                    {industries.map((text) => (
                        <p key={text}>{text}</p>
                    ))}
                </div>
                <div className="list">
                    <p>Terms Of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </footer>
        </div>
    )
}
