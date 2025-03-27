
import Introduction from "../components/Introduction"
import Timeline from "../components/Timeline";
import html from "../../assets/icons/html-css-js.png"

import React from "react"



const AboutMe = () => {
    const timelineData = [
        {
          date: "March 2025 - Current",
          title: "Banyan Labs | Web Developer",
          description:
            "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React, ensuring cross-browser compatibility and mobile responsiveness. Collaborated with team members to design, build, and test features using React.js and Node.js, improving application functionality.",
        },
  
      ];
      const educationData = [
        {
          date: "February 2025- Current",
          title: "Coursera | UX/UI Design Certificate",
         
        },
        {
            date: "July 2023 - June 2024",
            title: "Persevere | Full Stack Developer Bootcamp",
           
          },
          {
            date: "February 2010",
            title: "GED | Pima Community College ",
           
          },
  
  
      ];
    

    return (
    <>
   
<div className="mt-20 ml-16 mr-16 p-2  flex flex-row">
  <div>
<div className=" left-0 w-64 h-full bg-white-800 text-black">
 <img className="profilePic w1/2" src={new URL('../../assets/portfolio/aboutPic.png', import.meta.url).href} alt="profile-pic" />
<div className="pt-6">
   
   <p className="text-[1em] pl-4 text-gray-500">Summary of</p>
   <p className="pl-13 font-bold text-[3em] skills" style={{ fontFamily: "'Agency FB', sans-serif" }} >Skills</p>
  <div className="flex flex-col justify-center pl-6">
    <img className="w-[42%] pt-5" 
    src={new URL('../../assets/icons/html-css-js.png', import.meta.url).href}/>
    <div className="flex flex-row w-[20%]">
    <img src={new URL('../../assets/icons/jquery.png', import.meta.url).href}/>
    <img src={new URL('../../assets/icons/react.png', import.meta.url).href}/>
    </div>
    <div className="flex flex-row w-[20%]">
    <img src={new URL('../../assets/icons/bootstrap.png', import.meta.url).href}/>
    <img src={new URL('../../assets/icons/tailwind_css.png', import.meta.url).href}/>
    </div>
    <img  className="w-[40%]" 
    src={new URL('../../assets/icons/mongoDb.png', import.meta.url).href}/>
    <img  className="w-[40%]" 
     src={new URL('../../assets/icons/node.png', import.meta.url).href}/>
  </div>
</div>
</div>
</div>
<div className="p-16">
<Introduction
      title="Introduction"
      description="Full Stack Developer skilled in end-to-end application development, agile teamwork, and cutting-edge technologies. 
      Experienced in building feature-rich solutions with seamless functionality and engaging UI/UX design."
    />
    <Timeline 
    category="Experience"
    events={timelineData} />
    <Timeline 
    category="Education/Certification"e
    events={educationData} />
    </div>
  </div>  

    </>
)}


export default AboutMe