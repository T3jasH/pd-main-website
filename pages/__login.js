import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"
import Navbar from "../components/Navbar"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const router = useRouter()

    const submit = async (e) => {
        e.preventDefault()
        setErrorMessage("")
        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            router.push("/__admin")
        } catch (err) {
            console.log(err)
            setErrorMessage("Invalid credentials")
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>Login to Prodevans</title>
                <meta
                    name="description"
                    content="Prodevans is a leading technology solution provider specialising in end to end DevOps offerings that streamline and automate IT delivery."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="login">
                <form onSubmit={submit}>
                    <h2>Admin Login</h2>
                    <input
                        type={"text"}
                        defaultValue={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        type={"password"}
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <input type={"submit"} value={"Login"} />
                    <p>{errorMessage}</p>
                </form>
            </main>
        </React.Fragment>
    )
}
