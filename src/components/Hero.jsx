import { styles } from '../styles';
import { bwmap } from '../assets';
import matrixBg from '../assets/backgrounds/matrix.png';

const Hero = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-[1] h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover opacity-50"
        />
      </div>

      {/* Content Section */}
      <section className='relative w-full h-screen mx-auto'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-gray-100/75 z-[2]' />

        {/* Text Content */}
        <div className='absolute z-[3] flex flex-col justify-center h-full w-full'>
          <div className='container mx-auto px-4 sm:px-8 lg:px-16'>
            <div className='ml-[10%] max-w-3xl'>
              <h2 className={`${styles.heroHeadText} text-zinc-800 font-poppins leading-tight`}>
                HI, I&#39;M <br />
                <span className="sm:text-[90px] text-[50px] font-mova font-extrabold text-chicago-400 tracking-wider">
                  TOM&#39;as
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Matrix Background */}
        <div className='absolute top-0 right-0 z-20 h-full max-w-[100%] overflow-hidden'>
          <img 
            src={matrixBg} 
            alt="matrix background" 
            className='h-full object-cover opacity-80'
          />
        </div>
      </section>
    </>
  );
};

export default Hero;