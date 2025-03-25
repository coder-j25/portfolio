import {Routes, Route} from "react-router-dom"
import React from "react"
import Home from "./views/pages/Home"
import AboutMe from "./views/pages/AboutMe"
import NavBar from "./views/components/Navbar"
import Footer from "./views/components/Footer"
import './App.css'
function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
