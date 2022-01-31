import React, { useEffect, useRef } from "react"
import Head from "next/head"
import Navbar from "../../components/Navbar"
import arrow from "../../assets/arrowWhite.svg"
import Image from "next/image"

export default function About() {
    const articles = [
        {
            title: "Interview with Deepak Mishra | Founder and CEO Prodevans Technologies",
            src: "",
            secTitle: "Most popular stories magazine",
        },
        {
            title: "How machine learning is contributing to evolution of online education space",
            src: "",
            secTitle: "Published on India Today Magazine",
        },
        {
            title: "Prodevans technologies launches new internship platform called LEAP to provide opportunities to youn IT graduates",
            src: "",
            secTitle: "Business News This Week Magazine",
        },
        // {
        //     title: "Automation may take our jobs - But AI will create them",
        //     src: "",
        //     secTitle: "Startup City Magazine",
        // },
    ]
    const navRef = useRef(null)
    useEffect(() => {
        if (navRef.current) {
            navRef.current.querySelector("#resources").classList.add("active")
        }
    }, [navRef])

    return (
        <React.Fragment>
            <Head>
                <title>Prodevans - Media</title>
                <meta
                    name="description"
                    content="Find pubished articles by Prodevans in popular media"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className="media">
                <div className="nav-info">
                    <p>Resources</p>
                    <div className="arrow">
                        <Image
                            alt="arrow"
                            layout="responsive"
                            objectFit="fill"
                            src={arrow}
                        />
                    </div>
                    <h1>Media</h1>
                </div>
                <h2>Published Articles</h2>
                <div className="articles">
                    {articles.map((article) => (
                        <div key={article.title} className="article">
                            <div className="article-img">
                                {
                                    //IMG
                                }
                            </div>
                            <h3>{article.title}</h3>
                            <p>{article.secTitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}
