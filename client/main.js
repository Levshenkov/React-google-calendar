import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './components/calendar'
import './main.css'

const Home = () => {
  return (
    <div>
      <Calendar />
    </div>
  )
}

const target = document.getElementById('root')

ReactDOM.render(<Home />, target)
