
import { useState } from 'react'
import './App.css'
import Bench from './components/Bench'
import Header from './components/Header'
import Player from './components/Player'
import Team from './components/Team'

function App() {

  // const [getter, setGetter] = useState(someValueORNull);
  
  return (
    <div className='border mx-auto text-center'>
      <Header />
      <Team />
      <Player name={"Kevin Durant"} position={"Forward"} number={34} points={10}/>
      <Player name={"Kyrie Irving"} position={"Guard"} number={11} points={15}/>
      <Player name={"James Harden"} position={"Guard"} number={13} points={10}/>
      <Bench/>
    </div>
  )
}

export default App;
