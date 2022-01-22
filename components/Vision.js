import Image from "next/image"
import vision from "../assets/vision.png"

export default function Vision() {
    return (
        <div id="vision">
            <div className="vision-img">
                <Image
                    alt="Our vision"
                    layout="responsive"
                    objectFit="contain"
                    src={vision}
                />
                <h1>Delivering cutting-edge tech solutions for your team.</h1>
            </div>
            <div className="vision-table">
                <div className="vision-card">
                    <h2>Vision</h2>
                    <p>To be the #1 Cloud Solution Provider in world</p>
                </div>
                <div className="vision-card">
                    <h2>Mission</h2>
                    <p>
                        To design and implemented solution that are
                        faster,easier and more reliable than ever before
                    </p>
                </div>
                <div className="vision-card">
                    <h2>Values</h2>
                    <p>
                        Nourish relationship with our employees partner and ISVs
                        to be the organisation they can trust
                    </p>
                </div>
                <div className="quadrant" id="q1" />
                <div className="quadrant" id="q2" />
            </div>
        </div>
    )
}
