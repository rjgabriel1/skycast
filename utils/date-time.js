export function nowToHHMM() {
    const date = new Date()
    return `${date.getHours()}:${date.getMinutes()}`
}