import { serialize } from "cookie"

/**
 * This sets `cookie` using the `res` object
 */

export default function setCookie(res, name, value, options) {
    if ("maxAge" in options) {
        options.expires = new Date(Date.now() + options.maxAge)
        console.log(options)
    }

    res.setHeader("Set-Cookie", serialize(name, value, options))
}
