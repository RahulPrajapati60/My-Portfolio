import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";


const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Computer Applications"
            subTitle="United University (2023 - 2026)"
            result="7.33/10"
          />
          <ResumeCard
            title="Intermediate Education"
            subTitle="Tileswary Devi I C Gaura Patoi Ballia (2021)"
            result="88.6%"
            des=""
          />
          <ResumeCard
            title="High School Education"
            subTitle="Tileswary Devi I C Gaura Patoi Ballia (2019)"
            result="5.00/5"
            des=""
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
};

export default Education;
