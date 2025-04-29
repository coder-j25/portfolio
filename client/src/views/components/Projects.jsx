import frames from "../components/ProjectFrames";
import React, { useState, useRef, useEffect } from "react";

const Projects = () => {

  const [index, setIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef(null)
  const platformRef = useRef(null)

  const handleResize = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey);
  }, [index])

  const next = () => {
    setIsTransitioning(true);
    if (index === frames.length - 1) {
      setIndex(frames.length);
    } else {
      setIndex(index + 1);
    }
  }

  const prev = () => {
    if (index === 0) {
      setIndex(frames.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const handleTransitionEnd = () => {
    if (index === frames.length) {
      setIsTransitioning(false);
      setIndex(0);
    }
  };

  const totalFrames = [...frames, frames[0]]

  return (

    <div
      ref={containerRef}
      className="gallery border-4 rounded mx-auto my-5 border-black shadow-lg bg-white w-[95%] sm:w-[90%] lg:w-[750px] overflow-hidden"
    >
      <div className="top flex flex-col sm:flex-row p-2 border-b select-none">
        <div className="heading text-gray-800 w-full font-semibold text-center sm:text-left my-auto">
          {frames[index % frames.length].title}
        </div>
        <div className="buttons ml-auto flex justify-center sm:justify-end text-gray-600 mt-2 sm:mt-0">
          <button
            onClick={prev}
            className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="w-7 border-2 rounded-r-lg p-1 cursor-pointer"
          >
            ▶
          </button>
        </div>
      </div>
      <div className="content-area">
        <div
          ref={platformRef}
          className={`platform flex ${isTransitioning ? "transition-all duration-300" : ""}`}
          style={{
            width: `${totalFrames.length * containerWidth}px`,
            transform: `translateX(-${index * containerWidth}px)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {totalFrames.map((frame, i) => (
            <div
              key={i}
              className="each-frame flex-none w-full"
              style={{ width: `${containerWidth}px` }}
            >
              <div className="main flex flex-col sm:flex-row w-full p-4 sm:p-8">
                <div className="sub w-full sm:w-2/3 my-auto">
                  <img
                    className="w-full p-4 sm:p-8 max-h-[400px] object-contain"
                    src={frame.img}
                    alt={frame.title}
                  />
                </div>
                <div className="sub w-full sm:w-1/3 my-auto text-center sm:text-left">
                  <div className="head text-xl sm:text-3xl font-bold mb-4">
                    {frame.title}
                  </div>
                  <div className="long-text text-base sm:text-lg">
                    {frame.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;