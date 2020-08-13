import React from 'react'
import ReactDOM from 'react-dom'
import Test from './components/test'
import './main.css'

const Home = () => {
  const CALENDAR_ID = 'kcej035h7eidvmqc2cgcljchb0@group.calendar.google.com'
  const API_KEY = 'AIzaSyB3PqDm4Ndi3j_N0DcaRk5lQzu7c4GnFKY'
  return (
    <div>
      <Test calendarId={CALENDAR_ID} apiKey={API_KEY} />
    </div>
  )
}

const target = document.getElementById('root')

ReactDOM.render(<Home />, target)
