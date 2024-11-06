import { useState } from 'react'
import Login from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Kategori from './pages/admin/Kategori'
import Produk from './pages/admin/Produk'
import Header from './components/Header'
import Forgot from './pages/ForgotPage'
<<<<<<< HEAD
=======
import MainDropship from './pages/MainDropship'
import SidebarProfile from './components/SidebarProfile'
>>>>>>> 6ca12a5 (add dropshiper(fix))

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/kategori' element={<Kategori/>}/>
      <Route path='/produk' element={<Produk/>}/>
<<<<<<< HEAD
=======
      <Route path='/dropshipper' element={<MainDropship/>}/>
      <Route path='/sidebar' element={<SidebarProfile/>}/>
>>>>>>> 6ca12a5 (add dropshiper(fix))
    </Routes>
   </Router>
  )
}

export default App
