import Head from "next/head"
import rightImage from "../assets/rightImage.png"
import Image from "next/image"
import Navbar from "../components/Navbar"
import Link from "next/link"
import About from "../components/About"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Prodevans</title>
                <meta
                    name="description"
                    content="Prodevans is a leading technology solution provider specialising in end to end DevOps offerings that streamline and automate IT delivery."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <div id="home">
                    <div className="left">
                        <h1>
                            Tech like <span className="blue">never</span> before
                        </h1>
                        <h2>A cloud and Devops partner</h2>
                        <h2>Fullstack Devops and automation experts</h2>
                        <h2>
                            Real world expertise in optimising applications for
                            cloud
                        </h2>
                        <div className="stats">
                            <div>
                                <h2>256</h2> <h3>Projects Done</h3>
                            </div>
                            <div>
                                <h2>189</h2> <h3>Satisfied Clients</h3>
                            </div>
                            <div>
                                <h2>25+</h2> <h3>Awards Won</h3>
                            </div>
                        </div>
                        <Link href="#about-us">Know More</Link>
                    </div>
                    <div className="rightImage">
                        <Image
                            alt=""
                            src={rightImage}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <About />
            </main>
        </div>
    )
}
