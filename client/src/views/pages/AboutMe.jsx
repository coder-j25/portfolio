
import Introduction from "../components/Introduction"
import Timeline from "../components/Timeline";
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
   
<div className="mt-20 ml-16 mr-16 p-2">
<div className=" left-0 w-64 h-full bg-white-800 text-black">
 <img className="profilePic w1/2" src={new URL('../assets/profilePics/aboutPic.png', import.meta.url).href} alt="profile-pic" />
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
    <Timeline 
    category="Experience"
    events={timelineData} />
    <Timeline 
    category="Education/Certification"e
    events={educationData} />
    
</div>
    </>
)}


export default AboutMe