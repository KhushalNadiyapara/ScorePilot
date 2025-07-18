import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Demo from './Pages/Demo'
import Add from './Pages/AddUser'
import Edit from './Pages/EditUser'
import UserDetail from './Pages/UserDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
          path="/"
          element={<Dashboard />}
          /> 
          <Route path="/home" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/user/:id" element={<UserDetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
