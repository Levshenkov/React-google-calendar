import React, { useState, useEffect } from 'react'
import axios from 'axios'

const { WEEK_DAYS, MONTHS, ONE_WEEK } = require('./calendar-const')

const { createMonth } = require('./calendar-func.js')


const Calendar = (props) => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    const url = `https://www.googleapis.com/calendar/v3/calendars/${props.calendarId}/events?key=${props.apiKey}`

    axios(url).then(({ data }) => {
      setEvents(
        data.items.map((event) => ({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary
        }))
      )
    })
  }, [props.apiKey, props.calendarId])

  const currentDate = new Date()
  const currentDayNumber = currentDate.getDate()
  const currentMonthNumber = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const [focusDate, setFocusDate] = useState(currentDate)


  const focusMonthNumber = focusDate.getMonth()
  const focusMonthName = MONTHS[focusMonthNumber]
  const focusYear = focusDate.getFullYear()

  const month = createMonth(focusDate)

  const weekDays = new Array(7).fill(0).map((it, i) => WEEK_DAYS[i])

  return (
    <div>
      <div className="bg-gray-800 h-16 flex flex-wrap justify-center items-center text-gray-600">
        <div className=" w-full flex  justify-center items-center">
          <div className="w-32 mr-2 ml-2 text-teal-300 font-light">
            {focusMonthName} {focusYear}
          </div>

          <button
            type="button"
            className="text-gray-600 hover:text-teal-500"
            onClick={() => {
              setFocusDate(new Date(+focusDate - ONE_WEEK))
            }}
          >

            &#8593;
          </button>
          <button
            type="button"
            className="mx-2 px-2 text-gray-200 bg-teal-500 hover:bg-teal-600 rounded"
            onClick={() => {
              setFocusDate(currentDate)
            }}
          >
            Today
          </button>
          <button
            type="button"
            className="text-gray-600 hover:text-teal-500"
            onClick={() => {
              setFocusDate(new Date(+focusDate + ONE_WEEK))
            }}
          >
            {' '}
            &#8595;{' '}
          </button>
        </div>
        <div className="w-full flex  justify-between px-2 ">
          {weekDays.map((day) => {
            return (
              <div key={day} className="text-xs font-light">
                {day}
              </div>
            )
          })}
        </div>
      </div>
      <div>
        {month.map((week, i) => {
          return (
            <div className="flex h-20" key={i}>
              {week.map((day) => {
                let dateCss = 'px-1'
                if (day.day === currentDayNumber && day.month === currentMonthNumber && currentYear === focusYear) {
                  dateCss = 'px-1 bg-teal-500 text-white'
                } else if (day.month !== focusMonthNumber) {
                  dateCss = 'px-1 text-gray-400'
                }

                return (
                  <div
                    key={day.day}
                    className="flex-1 hover:bg-teal-100 border border-gray-200 text-gray-800 text-left font-normal text-lg lg:text-sm"
                  >
                    <div className={dateCss}>{day.day}</div>
                    <div className="px-1 h-full text-xs pt-2">
                      webinar <br /> event
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar
