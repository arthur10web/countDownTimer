const endOfUniv = '31 May 2023'

function countDown() {
    const endOfUnivDate = new Date(endOfUniv)
    const currentDate = new Date()

    const totalSeconds = (endOfUnivDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 24 / 60 / 60)
    const hours = Math.floor(totalSeconds / 3600 % 24)
    const mins = Math.floor(totalSeconds / 60 % 60)
    const seconds = Math.floor(totalSeconds % 60)

    const daysElement = document.getElementById('days')
    const hoursElement = document.getElementById('hours')
    const minsElement = document.getElementById('mins')
    const secondsElement = document.getElementById('seconds')

    daysElement.innerHTML = checkTime(days)
    hoursElement.innerHTML = checkTime(hours)
    minsElement.innerHTML = checkTime(mins)
    secondsElement.innerHTML = checkTime(seconds)

    console.log(days, hours, mins, seconds)
}

function checkTime(time) {
    return time < 10 ? (`0${time}`) : time
}
setInterval(countDown, 1000)