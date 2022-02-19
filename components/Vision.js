import Image from "next/image"
import vision from "../assets/vision.png"
import style from "../styles/vision.module.scss"

export default function Vision() {
    return (
        <div id={style.vision}>
            <div className={style["vision-img"]}>
                <Image
                    alt="Our vision"
                    layout="responsive"
                    objectFit="contain"
                    src={vision}
                />
                <h2>Delivering cutting-edge tech solutions for your team.</h2>
            </div>
            <div className={style["vision-table"]}>
                <div className={style["vision-card"]}>
                    <h2>Vision</h2>
                    <p>To be the #1 Cloud Solution Provider in world</p>
                </div>
                <div className={style["vision-card"]}>
                    <h2>Mission</h2>
                    <p>
                        To design and implemented solution that are
                        faster,easier and more reliable than ever before
                    </p>
                </div>
                <div className={style["vision-card"]}>
                    <h2>Values</h2>
                    <p>
                        Nourish relationship with our employees partner and ISVs
                        to be the organisation they can trust
                    </p>
                </div>
            </div>
        </div>
    )
}
