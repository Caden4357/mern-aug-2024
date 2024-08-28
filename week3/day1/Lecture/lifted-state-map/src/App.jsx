import './App.css'
import Display from './components/Display'
import Form from './components/Form'
import { useState } from 'react'
function App() {
  const [albums, setAlbums] = useState([])
  return (
    <>
      <Form albums={albums} setAlbums={setAlbums}/>
      <Display albums={albums} />
    </>
  )
}

export default App
