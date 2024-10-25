// import { motion } from 'framer-motion';
import { styles } from '../styles';
import { bwmap } from '../assets';
// import { color } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <div className=" top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
  <section className='absolute top-0 left-0 z-0 bg-gray-100/75 w-full h-full'>
  <div>
    <h2 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>HI, I&#39;M <br />
      <span className="sm:text-battleGray sm:text-[90px] text-eerieBlack text-[50px] font-mova font-extrabold uppercase">TOM&#39;as
      </span>
    </h2>
  </div>
  <div >
    <img className='absolute top-0 right-0 ' src="../src/assets/backgrounds/matrix-4493783_1280.png" alt="" />
  </div>
 </section>
 
    </>
  );
};

export default Hero;
