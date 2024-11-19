import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import PropTypes from 'prop-types';
import { services } from '../constants';

const ServiceCard = ({ index, title, icon }) => (
    <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="w-full sm:w-[250px] bg-zinc-800 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
        <div className="py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <motion.img
                src={icon}
                alt={title}
                className="w-16 h-16 object-contain"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
            />
            <h3 className="text-gray-200 text-[18px] font-bold text-center">
                {title}
            </h3>
        </div>
    </motion.div>
);

ServiceCard.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export function About() {
    return (
        <section className="bg-gray-100 relative w-full min-h-screen mx-auto" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24">
                <div className="w-full flex flex-col items-start">
                    <motion.div
                        variants={textVariant()}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className="w-full"
                    >
                        <p className={`${styles.sectionSubText} mb-2`}>Introduction</p>
                        <h2 className={styles.sectionHeadText}>Overview.</h2>
                    </motion.div>

                    <motion.p
                        variants={fadeIn('', '', 0.1, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className="mt-4 text-gray-600 text-[16px] sm:text-[18px] max-w-3xl leading-[30px]"
                    >I&apos;m a recent graduate of the Baltic Institute of Technology (BIT), where I honed my skills in the exciting world of programming. With a strong foundation in React and JavaScript, I am eager to continue my journey as a software developer. <br /> My primary focus lies in front-end development, particularly working with React and JavaScript to build dynamic and responsive web applications. I enjoy the creativity and problem-solving that comes with coding, and I`&apos`m always keen to learn and implement the latest technologies and best practices.
                    </motion.p>
                </div>
                <motion.div
                    variants={fadeIn('up', 'spring', 0.5, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="mt-20 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-7 sm:gap-10"
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            index={index}
                            {...service}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default About;