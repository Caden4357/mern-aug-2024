import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [name, setName] = useState("")
  //      Getter, Setter      (starting value)
  const [count, setCount] = useState(10)

  const increment = () => {
    setCount(count+1)
    console.log('COUNT: ', count);
  }
  return (
    <>
        <div className="card">
          <p>{count}</p>
        <button onClick={increment}>
          Increment++
        </button>
        <button onClick={() => setCount(count-1)}>
          Decrement--
        </button>
      </div>
    </>
  )
}

export default App
