import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaStar } from "react-icons/fa6";
// import pdf from "../assets/resume-of-mustafiz.pdf";
import pdf from "../assets/DeveloperAvinash8.pdf"

import "./banner.css";
import new2 from "../assets/new1.jpg"

const Banner = () => {
  const [isPreparing, setIsPreparing] = useState(false); // Loading state

  const handleDownload = () => {
    setIsPreparing(true); // Set loading state
    // Simulate a small delay for "preparing" (optional)
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "DeveloperAvinash8.pdf";
      link.click();
      setIsPreparing(false); // Reset loading state
    }, 1000); // Adjust delay as needed
  };

  return (
    <div id="home">
      <div className="w-full bg-transparent p-5 h-screen max-h-[700px] flex flex-col-reverse md:flex-row items-center justify-center gap-28 md:gap-20">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            HI, I'M Avinash!
          </h1>

          <TypeAnimation
            sequence={[
              "Front end Developer",
              2000,
              " Web Developer",
              1000,
              " React js Developer",
              1000,


              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-3xl md:text-4xl lg:text-5xl text-[#89b02d] block line"
          />
          <p className="text-justify pb-5 ">
            I'm a passionate Frontend Developer with expertise in HTML, CSS, JavaScript, and React. I love crafting visually appealing and user-friendly web experiences. With a keen eye for design and strong technical skills, I ensure seamless, responsive, and engaging interfaces
          </p>


          <button
            onClick={handleDownload}
            data-aos="zoom-in"
            className="btn mt-5 btn-outline text-[#89b02d] hover:bg-[#89b02d] hover:text-black "
          >
            {isPreparing ? "Preparing to download..." : "Download Resume"}
          </button>
        </div>
        <div className="mt-[143px] lg:mt-0">
          <div
            data-aos="zoom-in"
            className="border-8 hover:translate-y-10 duration-150 p-4 border-[#89b02d] rounded-full w-80 h-80"
          >
            <img
              className="rounded-[100%]  object-cover h-full w-full"
              src={new2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
