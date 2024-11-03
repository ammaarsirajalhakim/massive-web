import { useState } from 'react'
import Login from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/RegisterPage'

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
   </Router>
  )
}

export default App
