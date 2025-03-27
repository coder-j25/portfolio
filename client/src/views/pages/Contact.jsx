import React from "react";


const Contact = () => {
    return (
        <>
            <div className="m-36">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-extrabold text-black dark:text-black pb-8">Contact Me</h1>
                    <div className="pl-10 ">
                       <a href="https://github.com/coder-j25"><img className="w-[8%] pb-8"
                            src={new URL('../../assets/icons/github-black.png', import.meta.url).href} /></a>
                        <a href="https://www.linkedin.com/in/justinee-hanson-5a938134a/"><img className="w-[8%]"
                            src={new URL('../../assets/icons/linkedin_icon_black.png', import.meta.url).href} /></a>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </>
    )
}


export default Contact