import React, { useRef } from "react"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Select from "react-select"
import styles from "../styles/events.module.scss"
import useNavTheme from "../hooks/useNavTheme"
import redhatForum from "../assets/redhatForum.jpeg"
import redhatForumUpcoming from "../assets/redhatForum.png"
import openSourceIndia from "../assets/openSourceIndia.jpg"
import { useState } from "react"
import Image from "next/image"

export default function Events() {
    const navRef = useRef(null)
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
    const [currentSelected, setCurrent] = useState({
        value: "upcoming",
        label: "Upcoming Events",
    })
    const pastEvents = [
        { title: "Open Source India", img: redhatForum },
        { title: "Redhat Forum-2018", img: openSourceIndia },
    ]
    const upcomingEvents = [{ title: "Redhat Forum", img: redhatForumUpcoming }]
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
                    // className={styles.dropdown}
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
                                  <div className={styles.left}>
                                      <Image
                                          alt={ev.title}
                                          layout="responsive"
                                          objectFit="fill"
                                          src={ev.img}
                                          className={styles["article-img"]}
                                      />
                                  </div>
                                  <div className={styles.right}>
                                      <h3>{ev.title}</h3>
                                  </div>
                              </div>
                          ))
                        : pastEvents.map((ev, i) => (
                              <div key={ev.title} className={styles.event}>
                                  <div className={styles.left}>
                                      <Image
                                          alt={ev.title}
                                          layout="responsive"
                                          objectFit="fill"
                                          src={ev.img}
                                          className={styles["article-img"]}
                                      />
                                  </div>
                                  <div className={styles.right}>
                                      <h3>{ev.title}</h3>{" "}
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </React.Fragment>
    )
}
