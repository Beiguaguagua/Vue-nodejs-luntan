const s = parseInt(Math.random() * 999+9)
const date = new Date()
const yy = date.getFullYear()
const mm = date.getMonth()
const dd = date.getDate()
const final =  `${yy}${mm}${dd}${s}`
exports.id=final


