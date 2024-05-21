//Css
import './App.css'

//Hooks
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


//Pages
import Login from './Pages/Login/Login.jsx'
import Cadastro from './Pages/Cadastro/Cadastro.jsx';


function App() {


  return (
    <div className='app'>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={ <Login />}
          />
          <Route
            path="/cadastro"
            element={<Cadastro />}
          />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
