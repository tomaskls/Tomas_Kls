import { motion } from 'framer-motion';
import { useState } from 'react';
import { textVariant, fadeIn } from "../utils/motion";
import { ProjectCard } from './ProjectCard';
import { styles } from '../styles';




const Project = () => {
  const [active, setActive] = useState('project-2');
  
  const projects = [
    {
      id: 'project-1',
      name: 'Airport transfers',
      description: 'An innovative project showcasing the latest web technologies and modern development practices.',
      image: '/transport_app.png',
      repo: 'https://github.com/tomaskls/my-transport-app',
      demo: 'https://my-transport-app.vercel.app/'
    },
    {
      id: 'project-2',
      name: 'Sewing Shop website',
      description: 'Advanced solution demonstrating cutting-edge frontend development techniques and responsive design.',
      image: '/studija.png',
      repo: 'https://github.com/tomaskls/neringos_siuvimo_studija',
      demo: 'https://www.neringos-siuvimo-studija.lt/'
    },
    {
      id: 'project-3',
      name: 'Privat Chef',
      description: 'A sophisticated web application featuring real-time data processing and interactive user interfaces.',
      image: 'src/assets/projects/chef.png',
      repo: 'https://github.com/tomaskls/chefs-website',
      demo: 'https://privatchef.netlify.app/'
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
          <p className={`${styles.sectionSubText} `}>CASE STUDIES</p>
          <h1 className={`${styles.sectionHeadTextLight}`}>Projects</h1>
          <p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeIn('up', 'spring', 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="mt-4 flex lg:flex-row flex-col min-h-[70vh] gap-5"
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