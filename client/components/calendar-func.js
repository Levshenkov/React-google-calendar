const { ONE_DAY, ONE_WEEK } = require('./calendar-const')

function createWeek(date) {
  return new Array(7).fill(0).map((day, i) => {
    return {
      day: new Date(+date + ONE_DAY * i).getDate(),
      month: new Date(+date + ONE_DAY * i).getMonth()
    }
  })
}

function getStartDate(date) {
  const weekDayNumber = date.getDay() === 0 ? 6 : date.getDay() - 1
  const msToStartDay = 1000 * 60 * 60 * 24 * (weekDayNumber + 7)
  return +date - msToStartDay
}


module.exports = {
createMonth(firstDate) {
  const startDay = getStartDate(firstDate)
  return new Array(4).fill(0).map((week, i) => {
    return createWeek(+startDay + ONE_WEEK * i)
  })
}

}