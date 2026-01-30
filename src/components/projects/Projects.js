import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="FlipKart CLONE"
          des=" India's favourite e-commerce platform – empowering dreams with endless choices, amazing deals aur hassle-free shopping!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-Learning Website"
          des=" Learn anytime, anywhere with engaging video lessons, interactive quizzes, and expert-led courses to upgrade your skills at your own pace!"
          src={projectTwo}
        />
        <ProjectsCard
          title="CURD APPLICATION"
          des=" Full-featured web app demonstrating Create, Read, Update, and Delete operations with secure data management and clean user interface!"
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects