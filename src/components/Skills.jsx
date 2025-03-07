import PropTypes from 'prop-types';
import { styles } from '../styles';
import analiticIcon from '../assets/icons/analytics.svg'
import keyIcon from '../assets/icons/key-idea.svg'
import managementIcon from '../assets/icons/website-management.svg'
import multitaskingIcon from '../assets/icons/multitasking.svg'
import scalabilityIcon from '../assets/icons/scalability.svg'
import ideaIcon from '../assets/icons/idea.svg'

const SkillCard = ({ title, iconSrc, position }) => {
  return (
    <div className="flex items-center w-full my-8 relative">
      <div className="flex-1">
        {position === 'left' && (
          <div className="pr-16">
            <div className="bg-[#eaeaec] p-6 rounded-lg shadow-lg relative ml-auto mr-0 max-w-lg z-20">
              <div className="absolute top-1/2 -mt-3 right-[-12px] border-l-[12px] border-l-[#eaeaec] border-t-[12px] border-b-[12px] border-transparent"></div>
              <h3 className="text-2xl font-bold text-[#292929] mb-2 text-right font-poppins">{title}</h3>
            </div>
          </div>
        )}
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center z-10">
        <img
          src={iconSrc}
          alt={title}
          className="w-7 h-7 object-contain"
        />
      </div>

      <div className="flex-1">
        {position === 'right' && (
          <div className="pl-16">
            <div className="bg-[#eaeaec] p-6 rounded-lg shadow-lg relative max-w-lg">
              <div className="absolute top-1/2 -mt-3 left-[-12px] border-r-[12px] border-r-[#eaeaec] border-t-[12px] border-b-[12px] border-transparent"></div>
              <h3 className="text-2xl font-bold text-[#292929] mb-2 font-poppins">{title}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired
};

const Skills = ({
  title = "Transferable Skills.", // default reikšmė
  subtitle = "While I'm beginning my journey in programming, I bring a wealth of transferable skills from my background in previous fields" // default reikšmė
}) => {
  const skills = [

    {
      title: "Analytical skills",
      iconSrc: analiticIcon  
    },
    {
      title: "Problem-solving",
      iconSrc: keyIcon
    },
    {
      title: "Result-driven",
      iconSrc: managementIcon
    },
    {
      title: "Multitasking",
      iconSrc: multitaskingIcon
    },
    {
      title: "Flexibility",
      iconSrc: scalabilityIcon
    },
    {
      title: " Organizational skills",
      iconSrc: ideaIcon
    }
  ];

  return (
    <div className="relative rounded-tl-[64px] rounded-br-[64px] overflow-hidden">
      <div className="absolute inset-0 bg-zinc-800 rounded-tl-[64px] rounded-br-[64px]">
        <div
          className="absolute inset-0 bg-gray-100 origin-top-right"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0% 100%)'
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-16">
        <div className="text-left mb-16">
          <h4 className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">{subtitle}</h4>
          <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>{title}</h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-[#232631]" />
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              {...skill}
              position={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Skills;