import React from 'react'
import ReactDOM from 'react-dom'
import Test from './components/test'
import './main.css'

const Home = () => {
  return (
    <div>
      <Test />
    </div>
  )
}

const target = document.getElementById('root')

ReactDOM.render(<Home />, target)
