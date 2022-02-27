import Head from "next/head"
import Image from "next/image"
import React, { useRef, useState } from "react"
import Navbar from "../components/Navbar"
import product from "../assets/product.png"
import productHover from "../assets/productHover.png"
import useNavTheme from "../hooks/useNavTheme"
import styles from "../styles/products.module.scss"

export default function Products() {
    const navRef = useRef(null)
    useNavTheme(
        "#products-btn",
        "--bgColor: #1b1b1b; --textColor: #fff;",
        navRef
    )
    const [products, setProducts] = useState([
        {
            title: "PDCloudEX",
            img: product,
            hoverText:
                "Pre Configured private cloud platform on OpenStack for Compute, Network & Storage",
            hoverImg: productHover,
            hovering: false,
        },
        {
            title: "IVentura",
            img: product,
            hoverText:
                "One-Stop-Shop for Data Scientists to Code, Collaborate, Deploy & Share Machine Learning Models",
            hoverImg: productHover,
            hovering: false,
        },
    ])
    return (
        <React.Fragment>
            <Head>
                <title>Our Products</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar ref={navRef} />
            <div className={styles.products}>
                {products.map((product) => (
                    <div className={styles.product} key={product.title}>
                        <div
                            className={styles["product-img"]}
                            onMouseEnter={() =>
                                setProducts((prev) =>
                                    prev.map((prod) => {
                                        if (prod.title === product.title) {
                                            return { ...prod, hovering: true }
                                        }
                                        return prod
                                    })
                                )
                            }
                            onMouseLeave={() =>
                                setProducts((prev) =>
                                    prev.map((prod) => {
                                        if (prod.title === product.title) {
                                            return { ...prod, hovering: false }
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
                        </div>
                        <h2
                            style={{
                                color: product.hovering ? "#4987d8" : "#fbfbfb",
                            }}
                        >
                            {product.title}
                        </h2>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}
