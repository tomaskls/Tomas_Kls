import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

const ProjectCard = ({ id, name, description, image, repo, demo, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', id === 'project-1' ? 0 : 0.2 * parseInt(id.split('-')[1]), 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer transition-all duration-500 ease-in-out shadow-lg`}
      onClick={() => handleClick(id)}
    >
      <div className="absolute top-0 left-0 z-10 bg-zinc-700/50 h-full w-full rounded-2xl" />
      <motion.img 
        src={image} 
        alt={name} 
        className="absolute w-full h-full object-cover rounded-2xl"
        whileHover={{ scale: active === id ? 1 : 1.05 }}
        transition={{ duration: 0.3 }}
      />
      
      {active !== id ? (
        <div className="flex items-center justify-start pr-16">
          <motion.h3 
            className="font-extrabold font-sans uppercase w-[200px] h-[30px] whitespace-nowrap text-2xl text-zinc-200 tracking-wider absolute lg:bottom-28 lg:-rotate-90 lg:origin-[0,0] leading-none z-20"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>
        </div>
      ) : (
        <motion.div 
          className="absolute bottom-0 p-8 justify-start w-full flex-col bg-zinc-800/50 rounded-b-2xl z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 flex justify-end m-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(repo, '_blank');
              }}
              className="bg-zinc-900 w-11 h-11 rounded-full flex justify-center items-center cursor-pointer opacity-90 hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.button>
          </div>
          
          <motion.h2 
            className="font-bold text-3xl text-zinc-200 uppercase font-sans mt-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {name}
          </motion.h2>
          
          <motion.p 
            className="text-zinc-300 text-sm max-w-3xl leading-relaxed font-sans tracking-wide mt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {description}
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(demo, '_blank');
            }}
            className="flex items-center gap-2 px-4 py-2 mt-6 bg-zinc-900/80 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors duration-200 font-bold"
          >
            <span className="text-sm">LIVE DEMO</span>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

const Project = () => {
  const [active, setActive] = useState('project-2');
  
  const projects = [
    {
      id: 'project-1',
      name: 'First Project',
      description: 'An innovative project showcasing the latest web technologies and modern development practices.',
      image: '/api/placeholder/800/600',
      repo: 'https://github.com/example/project-one',
      demo: 'https://example.com/demo-one'
    },
    {
      id: 'project-2',
      name: 'Second Project',
      description: 'Advanced solution demonstrating cutting-edge frontend development techniques and responsive design.',
      image: '/api/placeholder/800/600',
      repo: 'https://github.com/example/project-two',
      demo: 'https://example.com/demo-two'
    },
    {
      id: 'project-3',
      name: 'Third Project',
      description: 'A sophisticated web application featuring real-time data processing and interactive user interfaces.',
      image: '/api/placeholder/800/600',
      repo: 'https://github.com/example/project-three',
      demo: 'https://example.com/demo-three'
    },
    {
      id: 'project-4',
      name: 'Fourth Project',
      description: 'An enterprise-level solution implementing complex business logic and scalable architecture.',
      image: '/api/placeholder/800/600',
      repo: 'https://github.com/example/project-four',
      demo: 'https://example.com/demo-four'
    }
  ];

  return (
    <section id='projects' className="min-h-screen py-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <h1 className="text-4xl font-bold text-zinc-200 mb-2">Projektai</h1>
          <p className="text-zinc-400 text-lg mb-12">
            Peržiūrėkite mano naujausius darbus
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeIn('up', 'spring', 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="flex lg:flex-row flex-col min-h-[70vh] gap-5"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;