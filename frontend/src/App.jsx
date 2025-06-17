import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Button from './pages/Button'

function App() {
  const [todo, setTodo] = useState([])

  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <React.Suspense fallback={<div>Loading.....</div>}>
              <Routes>
                <Route path='/' element={<Button />}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/signin' element={<Signin />}/>
                <Route path='/home' element={<Home />}/>
              </Routes>
          </React.Suspense>
        </BrowserRouter>
      </RecoilRoot>
        
    </div>
  )
}

export default App
