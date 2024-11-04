import PropTypes from 'prop-types';

const SkillCard = ({ title, company, iconSrc, position }) => {
  return (
    <div className="flex items-center w-full my-8 relative">
      {/* Left side */}
      <div className="flex-1">
        {position === 'left' && (
          <div className="pr-16">
            <div className="bg-[#eaeaec] p-6 rounded-lg shadow-lg relative ml-auto mr-0 max-w-lg">
              <div className="absolute top-1/2 -mt-3 right-[-12px] border-l-[12px] border-l-[#eaeaec] border-t-[12px] border-b-[12px] border-transparent"></div>
              <h3 className="text-2xl font-bold text-[#292929] mb-2 text-right">{title}</h3>
              <p className="text-lg text-[#666666] text-right">{company}</p>
            </div>
          </div>
        )}
      </div>

      {/* Centered icon */}
      <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center z-10">
        <img 
          src={iconSrc} 
          alt={title} 
          className="w-7 h-7 object-contain"
        />
      </div>

      {/* Right side */}
      <div className="flex-1">
        {position === 'right' && (
          <div className="pl-16">
            <div className="bg-[#eaeaec] p-6 rounded-lg shadow-lg relative max-w-lg">
              <div className="absolute top-1/2 -mt-3 left-[-12px] border-r-[12px] border-r-[#eaeaec] border-t-[12px] border-b-[12px] border-transparent"></div>
              <h3 className="text-2xl font-bold text-[#292929] mb-2">{title}</h3>
              <p className="text-lg text-[#666666]">{company}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired
};

const Skills = ({ title, subtitle }) => {
  const skills = [
    {
      title: "Analytical skills",
      iconSrc: "/analytics.svg"
    },
    {
      title: "Problem-solving",
      iconSrc: "/key-idea.svg"
    },
    {
      title: "Result-driven",
      iconSrc: "/website-management.svg"
    },
    {
      title: "Multitasking",
      iconSrc: "/multitasking.svg"
    },
    {
      title: "Flexibility",
      iconSrc: "/scalability.svg"
    },
    {
      title: " Organizational skills",
      iconSrc: "/idea.svg"
    }
  ];

  return (
    <div className="relative rounded-tl-[64px] rounded-br-[64px] overflow-hidden">
      {/* Background with zinc base and gray overlay */}
      <div className="absolute inset-0 bg-zinc-800 rounded-tl-[64px] rounded-br-[64px]">
        <div 
          className="absolute inset-0 bg-gray-100 origin-top-right"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0% 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h4 className="text-lg text-[#666666] mb-2">{subtitle}</h4>
          <h2 className="text-4xl font-bold text-[#292929]">{title}</h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-[#232631]" />

          {/* Skills Cards */}
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

Skills.defaultProps = {
  title: "Transferable Skills.",
  subtitle: "While I'm beginning my journey in programming, I bring a wealth of transferable skills from my background in previous fields"
};

export default Skills;