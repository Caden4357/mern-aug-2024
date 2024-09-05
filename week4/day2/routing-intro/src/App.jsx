import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Dynamic from './components/Dynamic'
import Form from './components/Form'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Form/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/m/:stackId/:color' element={<Dynamic/>}/>
      </Routes>
    </>
  )
}

export default App
