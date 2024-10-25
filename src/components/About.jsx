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
        viewport={{ once: true }}
        className="xs:w-[250px] w-64 bg-gray-300 card-gradient p-[1px] rounded-[20px] shadow-card"
    >
        <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-taupe text-[18px] font-bold text-center">
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
        <section className="relative bg-red-300 mt-[6rem]" id="about">
            <motion.div 
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
                veniam dolorum ipsum doloribus.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10 justify-center">
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