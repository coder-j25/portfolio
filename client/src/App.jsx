
import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import AboutMe from "./views/AboutMe"
import Blog from "./views/Blog"
import NavBar from "./views/NavBar"

import './App.css'

function App() {
 

  return (
    <>
         <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
