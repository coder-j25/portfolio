import {Routes, Route} from "react-router-dom"
import React from "react"
import Home from "./views/Home"
import AboutMe from "./views/AboutMe"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
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
