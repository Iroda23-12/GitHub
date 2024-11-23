
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Aloqa from './pages/Aloqa'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aloqa' element={<Aloqa/>}/>
      </Routes>
    </>
  )
}

export default App
