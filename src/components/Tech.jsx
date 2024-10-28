import { motion } from 'framer-motion';

const Tech = () => {
  const technologies = [
    { 
      name: 'HTML5',
      image: '/html.png'
    },
    { 
      name: 'CSS3',
      image: '/css3.png'
    },
    { 
      name: 'JavaScript',
      image: '/javascript.png'
    },
    { 
      name: 'React',
      image: '/react.png'
    },
    { 
      name: 'Next.js',
      image: '/nextjs.png'
    },
    { 
      name: 'Tailwind CSS',
      image: '/tailwind.png'
    },
    { 
      name: 'Node.js',
      image: '/nodejs.png'
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
    <section className="min-h-screen bg-zinc-800 py-16 px-4 relative">
      {/* Background Image */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc-800/50 z-10" />

      {/* Content */}
      <div className="max-w-5xl mx-auto relative z-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-100 mb-16 text-center"
        >
          Technical Skills
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
              {/* Gradient Border */}
              <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700">
                <div className="h-full w-full bg-zinc-900/90 rounded-lg">
                  
                  {/* Content Container */}
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
                    
                    <h3 className="text-gray-300 text-sm font-medium">
                      {tech.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
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