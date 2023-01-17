import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Accommodation from './pages/Accomodation'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/accommodation">
          <Accommodation />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
