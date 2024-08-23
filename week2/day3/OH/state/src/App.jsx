import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const increment = () => {
    setCount((count) => count + 1)  // 0 => 1
    setCount((count) => count + 1) // 1 => 2

    // setCount(count + 1) // 0 => 1
    // console.log(count);
    // setCount(count + 1) // 0 => 1
    // console.log(count);
  }
  
  return (
    <>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
