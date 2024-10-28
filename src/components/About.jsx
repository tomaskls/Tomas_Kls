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
        className="w-full sm:w-[250px] bg-zinc-800 rounded-[20px] shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
        <div className="py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
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

export default ServiceCard;

export function About() {
    return (
        <section className="bg-gray-100 relative w-full min-h-screen mx-auto px-4 sm:px-8 lg:px-16" id="about">
            {/* Text Content Container */}
            <div className="w-full flex flex-col items-start pt-24 sm:pt-32">
                <motion.div 
                    variants={textVariant()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                >
                    <p className={`${styles.sectionSubText} mb-2`}>Introduction</p>
                    <h2 className={styles.sectionHeadText}>Overview.</h2>
                </motion.div>

                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="mt-4 text-gray-400 text-[16px] sm:text-[18px] max-w-2xl leading-[30px]"
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
                    veniam dolorum ipsum doloribus.
                </motion.p>
            </div>

            {/* Services Cards Container */}
            <div className="mt-20 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-7 sm:gap-10">
                {services.map((service, index) => (
                    <ServiceCard 
                        key={service.title} 
                        index={index} 
                        {...service} 
                    />
                ))}
            </div>
        </section>
    );
}