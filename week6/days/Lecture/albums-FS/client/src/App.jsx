import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DisplayAll from './components/DisplayAll'
import Nav from './components/Nav'
import NewAlbumForm from './components/NewAlbumForm'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route index element={<DisplayAll/>}/>
        <Route path='/new/album' element={<NewAlbumForm/>}/>
      </Routes>
    </>
  )
}

export default App
