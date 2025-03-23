import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
	return (
	<div className="bg-base-100 mt-20">
  <div
    id="Education"
    className="flex flex-col md:flex-row rounded-md text-black md:text-inherit bg-[#89b02d] md:bg-inherit gap-5 min-h-[300px] max-h-[600px]"
  >
    <div className="md:w-1/2 py-8 flex justify-center items-center bg-[#89b02d]">
      <div className="text-center">
        <FaGraduationCap size={120} className="mx-auto text-black md:text-8xl" />
        <h1 className="text-4xl mt-4 text-black font-bold">Education</h1>
      </div>
    </div>
    <div className="md:w-1/2 bg-[#89b02d] md:bg-base-100 p-4 md:p-6 overflow-y-auto text-center md:text-left flex flex-col justify-center">
      <div className="space-y-6 md:space-y-10">
        <div>
          <h1 className="text-xl md:text-3xl mb-2 font-semibold">Bachelor of Engineering (BE)</h1>
          <h2 className="text-lg md:text-xl mb-1">Computer Science and Engineering (CSE)</h2>
          <p className="text-sm md:text-base">Moodlakatte Institute of Technology Kundapura (MITK), Kundapura - 576211</p>
        </div>
        <div>
          <h1 className="text-xl md:text-3xl mb-2 font-semibold">Pre-University Course (PUC)</h1>
          <p className="text-sm md:text-base">Morarji Desai P U Science College Karaginakoppa, Mundgod - 581349</p>
        </div>
      </div>
    </div>
  </div>
</div>
	);
};

export default Education;
