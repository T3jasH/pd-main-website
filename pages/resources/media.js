import React, { useEffect, useRef } from "react"
import Head from "next/head"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import NavPath from "../../components/NavPath"
import styles from "../../styles/resources/media.module.scss"

export default function Media() {
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
            <div className={styles.media}>
                <NavPath theme={"dark"} main={"Resources"} subPath={"Media"} />
                <h2>Published Articles</h2>
                <div className={styles.articles}>
                    {articles.map((article) => (
                        <div key={article.title} className={styles.article}>
                            <div className={styles.left}>
                                <div className={styles["article-img"]}>
                                    {
                                        //IMG
                                    }
                                </div>
                            </div>
                            <div className={styles.right}>
                                <h3>{article.title}</h3>
                                <p>{article.secTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}
