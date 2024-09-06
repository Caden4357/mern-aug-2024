import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Homepage from './views/Homepage'
import NotFound from './components/NotFound'
import ViewProduct from './components/ViewProduct'


function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path='/product/:id' element={<ViewProduct/>
        }/>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  )
}

export default App
