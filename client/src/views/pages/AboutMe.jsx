
import Introduction from "../components/Introduction"
import React from "react"



const AboutMe = () => {


    return (
    <>
   
<div className="mt-20 ml-16 mr-16 p-2">
<div className="leftside">
 <img className="profilePic w1/2" src={new URL('../assets/profile-pics/profileWborder.jpg', import.meta.url).href} alt="profile-pic" />
<div className="pt-6">
   
   <p className="text-[1em] pl-4 text-gray-500">Summary of</p>
   <p className="pl-13 font-bold text-[3em] skills" style={{ fontFamily: "'Agency FB', sans-serif" }} >Skills</p>
  
</div>
</div>

<Introduction
      title="Introduction"
      description="Full Stack Developer skilled in end-to-end application development, agile teamwork, and cutting-edge technologies. 
      Experienced in building feature-rich solutions with seamless functionality and engaging UI/UX design."
    />
</div>
    </>
)}


export default AboutMe