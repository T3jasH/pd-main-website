import React, { useEffect, useRef } from "react"
import Head from "next/head"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import NavPath from "../../components/NavPath"
import styles from "../../styles/resources/media.module.scss"
import useNavTheme from "../../hooks/useNavTheme"
import { articles } from "../../data"
import useActiveLink from "../../hooks/useActiveLink"

export default function Media() {
    const navRef = useRef(null)
    useNavTheme("#resources", "--bgColor: #1b1b1b; --textColor: #fff;", navRef)
    useActiveLink("resources", "a:nth-child(2)")
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
