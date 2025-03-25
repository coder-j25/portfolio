import React from "react";



const Timeline = ({ events , category}) => {
    return ( <>
        <div className="ml-[340px] mr-[40px] pt-16">
        <h2 className="text-2xl font-extrabold text-black dark:text-black pb-8">{category}</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {events.map((event, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {event.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {event.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {event.description}
            </p>
          </li>
        ))}
      </ol>
      </div>
      </>
    );
  };
  

  export default Timeline