import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Register from './components/Register'
function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/api/hello')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error('Error fetching data: ', error)
    })
  }, [])
  return (
    <>
      <h1>React App w/ Python</h1>
      <Register/>
    </>
  )
}

export default App
