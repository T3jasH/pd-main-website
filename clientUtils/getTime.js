export default function getTime(date) {
    const now = new Date().getTime()
    let diff = (now - date) / 1000 // In seconds
    if (diff < 10 * 60) {
        return "10 mins"
    }
    diff = diff / 60 // In mins
    if (diff < 60) {
        return `${Math.floor(diff)} mins`
    }
    diff = diff / 60 // In Hours
    if (diff < 24) {
        return `${Math.floor(diff)} hours`
    }
    diff = diff / 24 // In days
    if (diff < 7) {
        return `${Math.floor(diff)} days`
    }
    diff = diff / 7 // weeks
    if (diff < 52) {
        return `${Math.floor(diff)} weeks`
    }
    diff = diff / 52 // years
    return `${Math.floor(diff)} years`
}
