import Image from "next/image"
import styles from "../styles/whatsapp.module.scss"
import whatsapp from "../assets/whatsapp.png"

export default function Whatsapp() {
    return (
        <div className={styles.container}>
            <a
                href={
                    "https://web.whatsapp.com/send?phone=919513067091&text=Hey%20there!%20Interested%20in%20learning%20how%20to%20save%20a%20lot%20of%20time%20and%20money%20launching%20your%20Open%20source%20platform"
                }
                target="_blank"
                rel="noreferrer"
            >
                <div className={styles.img}>
                    <Image
                        alt="Text  Us"
                        layout="responsive"
                        objectFit="fill"
                        src={whatsapp}
                    />
                </div>
            </a>
        </div>
    )
}
