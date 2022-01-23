import Image from "next/image"
import nvidia from "../assets/nvidia.svg"
import danskeBank from "../assets/danskeBank.svg"
import alphaserve from "../assets/alphaserve.svg"
import backoffice from "../assets/backoffice.svg"
import exide from "../assets/exide.svg"
import lifestyle from "../assets/lifestyle.svg"
import manipalGlobal from "../assets/manipalGlobal.svg"
import marvel from "../assets/marvel.svg"
import mphasis from "../assets/mphasis.svg"
import pristine from "../assets/pristine.svg"
import crayon from "../assets/crayon.svg"
import zee from "../assets/zee.svg"
import hitachi from "../assets/hitachi.png"
import alchemy from "../assets/alchemy.png"
import flipkart from "../assets/flipkart.png"
import aspireNXT from "../assets/aspireNXT.png"
import redhat from "../assets/redhat.svg"

export default function Clients() {
    return (
        <div id="clients">
            <h3>Our Clients</h3>
            <div className="clients-list">
                <div className="client">
                    <Image
                        alt="Nvidia"
                        layout="responsive"
                        objectFit="fill"
                        src={nvidia}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Hitachi"
                        layout="responsive"
                        objectFit="fill"
                        src={hitachi}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Redhat"
                        layout="responsive"
                        objectFit="fill"
                        src={redhat}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Flipkart"
                        layout="responsive"
                        objectFit="fill"
                        src={flipkart}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Danske Bank"
                        layout="responsive"
                        objectFit="fill"
                        src={danskeBank}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Exide Life Insurance"
                        layout="responsive"
                        objectFit="fill"
                        src={exide}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Lifestyle"
                        layout="responsive"
                        objectFit="fill"
                        src={lifestyle}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Alchemy"
                        layout="responsive"
                        objectFit="fill"
                        src={alchemy}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="AspireNXT"
                        layout="responsive"
                        objectFit="fill"
                        src={aspireNXT}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Zee"
                        layout="responsive"
                        objectFit="fill"
                        src={zee}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Alphaserve"
                        layout="responsive"
                        objectFit="fill"
                        src={alphaserve}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Lifestyle"
                        layout="responsive"
                        objectFit="fill"
                        src={lifestyle}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Manipal Global"
                        layout="responsive"
                        objectFit="fill"
                        src={manipalGlobal}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Mphasis"
                        layout="responsive"
                        objectFit="fill"
                        src={mphasis}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Pristine"
                        layout="responsive"
                        objectFit="fill"
                        src={pristine}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Marvel"
                        layout="responsive"
                        objectFit="fill"
                        src={marvel}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="BackOffice"
                        layout="responsive"
                        objectFit="fill"
                        src={backoffice}
                    />
                </div>
                <div className="client">
                    <Image
                        alt="Crayon"
                        layout="responsive"
                        objectFit="fill"
                        src={crayon}
                    />
                </div>
            </div>
        </div>
    )
}
