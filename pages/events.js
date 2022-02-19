import React, { useRef } from "react"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Select from "react-select"
import styles from "../styles/events.module.scss"
import useNavTheme from "../hooks/useNavTheme"

export default function Events() {
    const navRef = useRef(null)
    useNavTheme("#events-btn", "--bgColor: #1b1b1b; --textColor: #fff;", navRef)
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
            <div className={styles.events}>
                <Select
                    className={styles.dropdown}
                    placeholder={"Events"}
                    isSearchable={false}
                    options={[
                        { value: "upcoming", label: "Upcoming Events" },
                        { value: "past", label: "Past Events" },
                    ]}
                />
            </div>
        </React.Fragment>
    )
}
