import React, { useRef } from "react"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Select from "react-select"
import styles from "../styles/events.module.scss"
import useNavTheme from "../hooks/useNavTheme"
import { useState } from "react"
import Image from "next/image"
import { pastEvents, upcomingEvents } from "../data"

export default function Events() {
    const navRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    useNavTheme("#events-btn", "--bgColor: #1b1b1b; --textColor: #fff;", navRef)
    const customStyles = {
        control: (base, state) => ({
            ...base,
            color: "#fbfbfb",
            placeholder: "#fbfbfb",
            background: "inherit",
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "#4987D8" : "#fbfbfb",
            // Removes weird border around container
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? null : null,
            },
        }),
        option: (base, state) => ({
            ...base,
            color: "#000",
        }),
        container: (base, state) => ({
            ...base,
            width: "20%",
            background: "#1b1b1b",
        }),
        placeholder: (base) => ({ ...base, color: "#fbfbfb" }),
        singleValue: (base) => ({ ...base, color: "#fbfbfb" }),
    }
    useActiveLink(
        "events-btn",
        null,
        isOpen,
        "linear-gradient(135.03deg, #1b1b1b 75.01%, #1b1b1b 75.01%)"
    )
    const [currentSelected, setCurrent] = useState({
        value: "upcoming",
        label: "Upcoming Events",
    })
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
            {!isOpenc ? (
                <div className={styles.events}>
                    <Select
                        className={styles.dropdown}
                        styles={customStyles}
                        placeholder={"Events"}
                        isSearchable={false}
                        options={[
                            { value: "upcoming", label: "Upcoming Events" },
                            { value: "past", label: "Past Events" },
                        ]}
                        defaultValue={{
                            value: "upcoming",
                            label: "Upcoming Events",
                        }}
                        onChange={(e) => {
                            setCurrent(e)
                        }}
                    />
                    <div className={styles.list}>
                        {currentSelected.value === "upcoming"
                            ? upcomingEvents.map((ev, i) => (
                                  <div key={ev.title} className={styles.event}>
                                      <a href={ev.link} className={styles.left}>
                                          <Image
                                              alt={ev.title}
                                              layout="responsive"
                                              objectFit="fill"
                                              src={ev.img}
                                              className={styles["article-img"]}
                                          />
                                      </a>
                                      <div className={styles.right}>
                                          <a href={ev.link}>
                                              <h3>{ev.title}</h3>
                                          </a>
                                          <p>{ev.description}</p>
                                      </div>
                                  </div>
                              ))
                            : pastEvents.map((ev, i) => (
                                  <div key={ev.title} className={styles.event}>
                                      <a href={ev.link} className={styles.left}>
                                          <Image
                                              alt={ev.title}
                                              layout="responsive"
                                              objectFit="fill"
                                              src={ev.img}
                                              className={styles["article-img"]}
                                          />
                                      </a>
                                      <div className={styles.right}>
                                          <a href={ev.link}>
                                              <h3>{ev.title}</h3>{" "}
                                          </a>
                                          <p>{ev.description}</p>
                                      </div>
                                  </div>
                              ))}
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}
