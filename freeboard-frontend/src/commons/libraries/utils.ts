export const getMyDate = (myDate) => {
    const aaa = new Date(myDate)
    const yyyy = aaa.getFullYear()
    const mm = aaa.getMonth() + 1
    const dd = aaa.getDate()
    const hh = aaa.getHours()
    const tt = aaa.getMinutes()
    return `${yyyy}-${mm}-${dd}-${hh}:${tt}`
}