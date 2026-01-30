import React from 'react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJava
} from 'react-icons/si';

const skills = [
  { name: 'HTML5',          icon: <FaHtml5 />,          color: 'text-orange-600'   },
  { name: 'CSS3',           icon: <FaCss3Alt />,        color: 'text-blue-600'     },
  { name: 'JavaScript',     icon: <FaJsSquare />,       color: 'text-yellow-400'   },
  { name: 'Java',      icon: <SiJava />,     color: 'text-blue-500'     },
  { name: 'React',          icon: <FaReact />,          color: 'text-cyan-400'     },
  { name: 'Next.js',        icon: <SiNextdotjs />,      color: 'text-gray-200'     },
  { name: 'Node.js',        icon: <FaNodeJs />,         color: 'text-green-500'    },
  { name: 'Express',        icon: <SiExpress />,        color: 'text-gray-300'     },
  { name: 'MongoDB',        icon: <SiMongodb />,        color: 'text-green-600'    },
  { name: 'Tailwind CSS',   icon: <SiTailwindcss />,    color: 'text-sky-400'      },
  // Add more as needed
];

function Skills() {
  return (
    <section className="py-16 px-6 bg-gray-950 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-100">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`
              group relative
              flex flex-col items-center justify-center
              w-full aspect-square
              bg-gray-900/70 backdrop-blur-sm
              border border-gray-800/50
              rounded-2xl
              shadow-[0_8px_30px_rgba(0,0,0,0.6),inset_0_-4px_12px_rgba(0,0,0,0.7)]
              transition-all duration-300 ease-out
              hover:-translate-y-3 hover:scale-[1.04]
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_8px] 
              hover:border-gray-700/70
            `}
            style={{
              '--tw-shadow-colored': `0 0 30px 8px ${skill.color.replace('text-', 'rgba(')}0.35)`
            }}
          >
            {/* Inner glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                 style={{ boxShadow: `inset 0 0 25px ${skill.color.replace('text-', '#')}` }}
            />

            <div className={`text-5xl md:text-6xl mb-3 transition-colors duration-300 ${skill.color} group-hover:brightness-125`}>
              {skill.icon}
            </div>

            <p className="text-sm md:text-base font-medium text-gray-300 group-hover:text-gray-100 transition-colors">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;