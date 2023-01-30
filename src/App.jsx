import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Accommodation from './pages/Accomodation'
import About from './pages/About'
// import Header from './components/molecules/Header'
import Header from './components/Header'
import Footer from './components/molecules/Footer'
import {GlobalStyle} from './components/atoms/index'


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </GlobalStyle>
    </BrowserRouter>
  )
}

export default App
