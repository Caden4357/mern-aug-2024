import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Details from './components/Details'
import EditAlbumForm from './components/EditAlbumForm'
import Home from './views/Home'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/details/album/:id' element={<Details/>}/>
        <Route path='/edit/album/:id' element={<EditAlbumForm/>}/>
      </Routes>
    </>
  )
}

export default App
