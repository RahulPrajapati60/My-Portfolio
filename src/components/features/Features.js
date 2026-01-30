import React from 'react'
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full Stack Development"
          des="MERN Stack Full-Stack Developer building scalable, responsive web applications with clean code & modern tech."
        />
        <Card
          title="App Development"
          des="Cross-Platform Mobile App Developer crafting high-performance apps with React Native & Flutter for iOS & Android."  
        />
        <Card
          title="Web Development"
          des="Web Developer crafting responsive, high-performance websites with HTML, CSS, JavaScript & React."
        />
      </div>
    </section>
  );
}

export default Features