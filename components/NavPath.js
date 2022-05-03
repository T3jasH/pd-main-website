import Image from "next/image"
import whiteArrow from "../assets/arrowWhite.svg"
import blackArrow from "../assets/arrowBlack.svg"
import styles from "../styles/navbar.module.scss"

export default function NavPath({ theme, main, subPath }) {
    return (
        <div className={"nav-info"}>
            <p>{main}</p>
            <div className="arrow">
                <Image
                    alt="arrow"
                    layout="responsive"
                    objectFit="fill"
                    src={theme === "dark" ? whiteArrow : blackArrow}
                />
            </div>
            <h1>{subPath}</h1>
        </div>
    )
}
