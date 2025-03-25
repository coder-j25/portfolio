import React from "react";

const Introduction = ({ title, description, className }) => {
    return (
      <div className={`ml-[340px] mr-[40px] ${className}`}>
        <div className="w-1/2">
          <h2 className="text-4xl font-extrabold text-black dark:text-black">{title}</h2>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    );
  };

  export default Introduction