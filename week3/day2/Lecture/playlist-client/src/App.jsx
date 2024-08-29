import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const [albums, setAlbums] = useState([])

  return (
    <>
      <Form albums={albums} setAlbums={setAlbums}/>
      <Display albums={albums} setAlbums={setAlbums}/>
    </>
  )
}

export default App
