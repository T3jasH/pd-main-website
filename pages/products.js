import Head from "next/head"
import Image from "next/image"
import React, { useRef, useState } from "react"
import Navbar from "../components/Navbar"
import product from "../assets/product.png"
import productHover from "../assets/productHover.png"
import useNavTheme from "../hooks/useNavTheme"
import styles from "../styles/products.module.scss"
import useActiveLink from "../hooks/useActiveLink"

export default function Products({ toggleNav }) {
    const navRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    useNavTheme(
        "#products-btn",
        "--bgColor: #1b1b1b; --textColor: #fff;",
        navRef
    )
    useActiveLink(
        "products-btn",
        null,
        isOpen,
        "linear-gradient(135.03deg, #1b1b1b 75.01%, #1b1b1b 75.01%)"
    )
    const [products, setProducts] = useState([
        {
            title: "PDCloudEX",
            img: product,
            hoverText:
                "Pre Configured private cloud platform on OpenStack for Compute, Network & Storage",
            hoverImg: productHover,
            hovering: false,
            href: "https://pdcloudex.com/",
        },
        {
            title: "IVentura",
            img: product,
            hoverText:
                "One-Stop-Shop for Data Scientists to Code, Collaborate, Deploy & Share Machine Learning Models",
            hoverImg: productHover,
            hovering: false,
            href: "https://www.iventura.ai/",
        },
    ])
    return (
        <React.Fragment>
            <Head>
                <title>Our Products</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                ref={navRef}
                toggleNav={(state) => {
                    setIsOpen(state)
                    toggleNav(state)
                }}
                theme={"dark"}
            />
            {!isOpen ? (
                <div className={styles.products}>
                    {products.map((product) => (
                        <div className={styles.product} key={product.title}>
                            <a
                                href={product.href}
                                target={"_blank"}
                                rel="noreferrer"
                                className={styles["product-img"]}
                                onMouseEnter={() =>
                                    setProducts((prev) =>
                                        prev.map((prod) => {
                                            if (prod.title === product.title) {
                                                return {
                                                    ...prod,
                                                    hovering: true,
                                                }
                                            }
                                            return prod
                                        })
                                    )
                                }
                                onMouseLeave={() =>
                                    setProducts((prev) =>
                                        prev.map((prod) => {
                                            if (prod.title === product.title) {
                                                return {
                                                    ...prod,
                                                    hovering: false,
                                                }
                                            }
                                            return prod
                                        })
                                    )
                                }
                            >
                                <Image
                                    alt={product.title}
                                    layout="responsive"
                                    objectFit="fill"
                                    src={
                                        product.hovering
                                            ? product.hoverImg
                                            : product.img
                                    }
                                />
                                <p>{product.hoverText}</p>
                            </a>
                            <h2
                                style={{
                                    color: product.hovering
                                        ? "#4987d8"
                                        : "#fbfbfb",
                                }}
                            >
                                {product.title}
                            </h2>
                        </div>
                    ))}
                </div>
            ) : null}
        </React.Fragment>
    )
}
