import React from 'react'
import './App.css'
import NavBar from './components/navbar/Navbar'
import HomePage from './screens/homepage/HomepageView'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <NavBar/>
      <HomePage/>
      <Footer />
    </>
  )
}

export default App