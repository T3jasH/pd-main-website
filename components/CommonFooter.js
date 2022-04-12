import Link from "next/link"
import useScroll from "../hooks/useScroll"
import style from "../styles/commonFooter.module.scss"

export default function CommonFooter() {
    const industries = [
        { name: "Industries" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Education", href: "/industries/education" },
        { name: "Insurance", href: "/industries/insurance" },
        { name: "Telecom", href: "/industries/telecom" },
    ]
    useScroll()
    return (
        <footer className={style["common-footer"]}>
            <div className={style.list}>
                <p>Bengaluru&apos;s Office Address</p>
                <span>
                    <p>Building # 403 , 4th Floor, Saket</p>
                    <p>
                        Callipolis Sarjapur Main Rd, Rainbow Drive,
                        Doddakannelli Bengaluru - 560035
                    </p>
                </span>
                <p>Phone: +91 8095933365</p>
                <p>Email: ask@Prodevans.com</p>
            </div>
            <div className={style.list}>
                <p>Our Services</p>
                <Link href={"/services/cloud"}>Cloud Services</Link>
                <Link href={"/services/modernization"}>
                    Application Moderation
                </Link>
                <Link href={"/services/devops-tools-support"}>
                    DevOps Tools
                </Link>
                <Link href={"/services/identity-access-management"}>
                    Identity &#38; Access Management
                </Link>
                <Link href={"/services/automation"}>Automation</Link>
                <Link href={"/services/infrastructure"}>Infrastructure</Link>
                <Link href={"/services/monitoring"}>
                    360 Degrees Monitoring
                </Link>
            </div>
            <div className={style.list}>
                {industries.map((industry, i) => {
                    if (i == 0) {
                        return <p key={i}>{industry.name}</p>
                    }
                    return (
                        <Link key={i} href={industry.href}>
                            {industry.name}
                        </Link>
                    )
                })}
            </div>
        </footer>
    )
}
