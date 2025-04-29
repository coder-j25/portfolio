
import Introduction from "../components/Introduction";
import Timeline from "../components/Timeline";
import React from "react";

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
      title: "GED | Pima Community College",
    },
  ];

  return (
    <>
      <div className="mt-20 px-4 md:px-8 lg:px-16 py-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
          <div className="w-full text-black">
            <img
              className="profilePic w-1/2 mx-auto lg:mx-0"
              src={new URL("../../assets/portfolio/aboutPic.png", import.meta.url).href}
              alt="profile-pic"
            />
            <div className="pt-6 lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex flex-col items-center lg:items-start pl-2">
                  <p className="text-[3em] pl-4 text-gray-500">Summary of</p>
                  <p className="pl-25 font-bold text-[6em] skills" style={{ fontFamily: "'Agency FB', sans-serif" }} >Skills</p>
                  <img
                    className="w-40 pt-5"
                    src={new URL("../../assets/icons/html-css-js.png", import.meta.url).href}
                    alt="HTML, CSS, JS"
                  />
                  <div className="flex flex-row gap-x-4 pt-4">
                    <img className="w-20" src={new URL("../../assets/icons/jquery.png", import.meta.url).href} alt="jQuery" />
                    <img className="w-20" src={new URL("../../assets/icons/react.png", import.meta.url).href} alt="React" />
                  </div>
                  <div className="flex flex-row gap-x-4 pt-4">
                    <img className="w-20" src={new URL("../../assets/icons/bootstrap.png", import.meta.url).href} alt="Bootstrap" />
                    <img className="w-20" src={new URL("../../assets/icons/tailwind_css.png", import.meta.url).href} alt="Tailwind CSS" />
                  </div>
                  <img
                    className="w-40 pt-4"
                    src={new URL("../../assets/icons/mongoDb.png", import.meta.url).href}
                    alt="MongoDB"
                  />
                  <img
                    className="w-40 pt-4"
                    src={new URL("../../assets/icons/node.png", import.meta.url).href}
                    alt="Node.js"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
          <Introduction
            title="Introduction"
            description="Full Stack Developer skilled in end-to-end application development, agile teamwork, and cutting-edge technologies. Experienced in building feature-rich solutions with seamless functionality and engaging UI/UX design."
          />
          <Timeline category="Experience" events={timelineData} />
          <Timeline category="Education/Certification" events={educationData} />
        </div>
      </div>
    </>
  )
}

export default AboutMe;