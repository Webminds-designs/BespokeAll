import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import background_img from "../assets/optImages/37.jpg";

function Landing() {
  const textRef = useRef(null);
  const [isImageOverlapping, setIsImageOverlapping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsImageOverlapping(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 50% of the text is overlapped
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#ffffff]">
      {/* Circle #1 (behind everything) */}
      <motion.div
        className="circle-div1 absolute -bottom-[30px] z-10 left-1/2 
                   transform -translate-x-1/2 w-[35vw] h-[35vw] 
                   rounded-full bg-[#cfb09a] overflow-hidden"
        // Animate scale/opacity, not layout
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Circle #2 with the background image */}
      <motion.div
        className="circle-div absolute bottom-[-50%] z-10 top-1/2 left-1/2 
                   transform -translate-x-1/2 -translate-y-1/2 
                   w-[20vw] h-[20vw] rounded-full bg-[#cfb09a] overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none"></div>

        {/* Background image (reserve space by making the parent w/h fixed) */}
        <motion.img
          src={background_img}
          alt="background image"
          className="w-full h-full object-cover"
          draggable="false"
          // Optionally animate the image scale for a subtle zoom-in effect
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>

      {/* Text container */}
      <div
        ref={textRef}
        className="text-container flex flex-col justify-center items-center 
                   absolute left-1/2 -translate-x-1/2 z-20 h-full select-none"
      >
        <motion.h1
          className="whitespace-nowrap text-[50px] md:text-[100px] lg:text-[160px] drop-shadow-md"
          animate={{
            color: isImageOverlapping ? "#ffffff" : "#533B30",
          }}
          transition={{ duration: 0.7 }}
        >
          Bespoke Furniture
        </motion.h1>
        <motion.h2
          className="text-[50px] md:text-[120px]"
          animate={{
            color: isImageOverlapping ? "#ffffff" : "#533B30",
          }}
          transition={{ duration: 0.7 }}
        >
          by Artisan
        </motion.h2>
      </div>
    </div>
  );
}

export default Landing;
