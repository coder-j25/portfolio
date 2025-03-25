

import React from "react"



const AboutMe = () => {


    return (
    <>
   
<div className="flex mt-20 p-2 justify-between">
<div className="leftside w1/2">
 <img className="profilePic w1/2" src={new URL('../assets/profile-pics/profileWborder.jpg', import.meta.url).href} alt="profile-pic" />
<div className="pt-6">
   
   <p className="text-[1em] pl-4 text-gray-500">Summary of</p>
   <p className="pl-13 font-bold text-[3em] skills" style={{ fontFamily: "'Agency FB', sans-serif" }} >Skills</p>
  
</div>
</div>

<div className="rightside w1/2">
<h1>Introduction</h1>
</div>
</div>
    </>
)}


export default AboutMe