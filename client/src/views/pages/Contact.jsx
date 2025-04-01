import React from "react";
import ContactForm from "../components/ContactForm";


const Contact = () => {
    return (
        <>


<div className="mt-26 flex flex-col justify-center">
              <div>
               <h1 className="text-2xl font-extrabold text-black dark:text-black pb-8 text-center ">Contact Me</h1>
               <div className="flex justify-center gap-4 pb-8">
<a href="https://github.com/coder-j25">
<img className="w-12" src={new URL('../../assets/icons/github-black.png', import.meta.url).href} alt="GitHub" />
</a>
<a href="https://www.linkedin.com/in/justinee-hanson-5a938134a/">
<img className="w-12" src={new URL('../../assets/icons/linkedin_icon_black.png', import.meta.url).href} alt="LinkedIn" />
</a>
</div></div> 

<ContactForm/></div>



        </>
    )
}


export default Contact