import { motion } from 'framer-motion';
import { html, css, javascript, reactjs, tailwind, nodejs, git, mysql } from '../assets/index.js'
const Tech = () => {
  const technologies = [
    {
      name: 'JavaScript',
      image: javascript
    },
    {
      name: 'ReactJS',
      image: reactjs
    },
    {
      name: 'HTML5',
      image: html
    },
    {
      name: 'CSS3',
      image: css
    },
    {
      name: 'git',
      image: git
    },
    {
      name: 'Tailwind CSS',
      image: tailwind
    },
    {
      name: 'NodeJS',
      image: nodejs
    },
    {
      name: 'MySQL',
      image: mysql

    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="h-screen bg-zinc-800 relative flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/nairobi.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.2'
        }}
      />

      <div className="absolute inset-0 bg-zinc-800/50 z-10" />
      <div className="max-w-7xl w-full mx-auto relative z-20 px-4 sm:px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-timberWolf mb-20 font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins"
        >
          Technologies.
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative h-24 bg-zinc-900/90 rounded-lg 
                         shadow-[0_0_15px_rgba(0,0,0,0.3)]
                         hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]
                         overflow-hidden"
            >
              <div className="absolute inset-0 p-[1px] rounded-[30px] bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700">
                <div className="h-full w-full bg-zinc-900/90 rounded-[30px]">
                  <div className="h-full w-full flex items-center justify-center gap-3 p-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <motion.img
                        src={tech.image}
                        alt={`${tech.name} logo`}
                        className="w-8 h-8 object-contain"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <h3 className="sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins">
                      {tech.name}
                    </h3>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className="absolute inset-0 bg-gradient-to-r from-zinc-400 to-zinc-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;