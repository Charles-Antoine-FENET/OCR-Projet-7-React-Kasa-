import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Accommodation from './pages/Accomodation'
import About from './pages/About'
import Header from './components/molecules/Header'
import Footer from './components/molecules/Footer'
import styled from 'styled-components'

// import GlobalStyle from './components/atoms/index'

export const GlobalStyle = styled.div`
  max-width: 1340px;
  width: 100%;
  margin: 0px auto;
  font-family: 'Montserrat';
`

function Router() {
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

export default Router
