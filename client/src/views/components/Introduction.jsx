import React from "react";

const Introduction = ({ title, description, className }) => {

    return (
   
        <div>
          <h2 className="text-4xl font-extrabold text-black dark:text-black">{title}</h2>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>   
    )
  }

  export default Introduction