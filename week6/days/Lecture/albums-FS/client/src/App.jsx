import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DisplayAll from './components/DisplayAll'
import Nav from './components/Nav'
import NewAlbumForm from './components/NewAlbumForm'
import Details from './components/Details'
import EditAlbumForm from './components/EditAlbumForm'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route index element={<DisplayAll/>}/>
        <Route path='/new/album' element={<NewAlbumForm/>}/>
        <Route path='/details/album/:id' element={<Details/>}/>
        <Route path='/edit/album/:id' element={<EditAlbumForm/>}/>
      </Routes>
    </>
  )
}

export default App
