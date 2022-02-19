import style from "../styles/commonFooter.module.scss"

export default function CommonFooter() {
    const industries = [
        "Industries",
        "Financial & Banking",
        "Health Care",
        "Education",
        "Insurance",
        "Telecom",
        "Retail",
    ]
    return (
        <footer className={style["common-footer"]}>
            <div className={style.list}>
                <p>Bangalore Office Address</p>
                <p>
                    Building # 403 , 5th Floor, Saket Callipolis Sarjapur Main
                    Rd,
                </p>
                <p>Rainbow Drive, Doddakannelli</p>
                <p>Bengaluru - 560035.</p>
                <p>Phone: +91 8095933365</p>
                <p>Email:ask@Prodevans.Com</p>
            </div>
            <div className={style.list}>
                <p>Our Services</p>
                <p>Cloud Services</p>
                <p>Application Moderation</p>
                <p>DevOps Tools</p>
                <p>IAM</p>
                <p>ML And Analytics</p>
                <p>Automation</p>
            </div>
            <div className={style.list}>
                {industries.map((text) => (
                    <p key={text}>{text}</p>
                ))}
            </div>
            <div className={style.list}>
                <p>Terms Of Use</p>
                <p>Privacy Policy</p>
            </div>
        </footer>
    )
}
