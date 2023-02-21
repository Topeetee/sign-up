import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgot from './components/Forgot';
import Home from "./components/Home";
import Login from './components/Login';
import Signup from './components/Signup';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path='signup' element={<Signup/>}/>
      <Route path='forgot' element={<Forgot/>}/>

    </Routes>
  </BrowserRouter>
  )
}

export default App