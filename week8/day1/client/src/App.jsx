import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  return (
    <>
      <h1>Todo List with useReducer and Context API</h1>
      <Form />
      <Display />
    </>
  )
}

export default App
