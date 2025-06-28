import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact-us' element={<Contact />} />
            </Routes>
        </>
    )
}

export default App
