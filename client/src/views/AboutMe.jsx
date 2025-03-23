import React from "react"



const AboutMe = () => {


    return (
    <>
   
<div className="flex mt-20 p-2 justify-between">
<div className="leftside w1/2">
 <img className="profilePic w1/2" src={new URL('../assets/profileWborder.jpg', import.meta.url).href} alt="profile-pic" />
<div className="pt-6">
   
   <p className="text-[1em] pl-4 text-gray-500">Summary of</p>
   <p className="pl-13 font-bold text-[3em] skills" style={{ fontFamily: "'Agency FB', sans-serif" }} >Skills</p>
   <p className="list pl-2" >&#9745;HTML5</p>
   <p className="pl-2">&#9745;CSS3 </p>
   <p className="pl-2"> &#9745;JavaScript </p>
   <p className="pl-2">&#9745;ES6</p>
   <p className="pl-2">&#9745;React</p>
   <p className="pl-2">&#9745;jQuery</p>
   <p className="pl-2">&#9745;Bootstrap</p>
   <p className="pl-2">&#9745;Tailwind</p>
   <p className="pl-2">&#9745;Figma</p>
   <p className="pl-2">&#9745;Figma</p>
   <p className="pl-2">&#9745;Canva</p>
   <p className="pl-2">&#9745;Node.js</p>
   <p className="pl-2">&#9745;Mongo DB</p>
   <p className="pl-2">&#9745;GitHub</p>
   <p className="pl-2">&#9745;Jira</p>
   <p className="pl-2">&#9745;Confluence</p>
   <p className="pl-2">&#9745;Agile Methodologies</p>
   <p className="pl-2">&#9745;G-Suites</p>
   <p className="pl-2">&#9745;Toggl</p>

</div>
</div>

<div className="rightside w1/2">
<h1>Introduction</h1>
</div>
</div>
    </>
)}


export default AboutMe