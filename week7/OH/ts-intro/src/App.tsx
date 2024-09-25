import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Form from './components/Form'
function App() {
  const [count, setCount] = useState<number>(0)
  return (
    <>
      <Nav username='Ethan'/>
      <Form/>
    </>
  )
}

export default App
