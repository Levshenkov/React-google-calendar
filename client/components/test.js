import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Test = (props) => {
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

  return <div className="text-blue-500">Test component {JSON.stringify(events)}</div>
}

Test.propTypes = {}

export default Test
