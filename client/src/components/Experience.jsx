import { motion } from 'framer-motion';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="relative"
    >
      <div className="flex items-start mb-12 sm:mb-8">
        {/* Timeline line and icon */}
        <div className="flex flex-col items-center mr-6 sm:mr-8">
          <div 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20"
            style={{ backgroundColor: experience.iconBg }}
          >
            <img 
              src={experience.icon} 
              alt={experience.company_name} 
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
          {/* Connecting line - only show if not last item */}
          {index !== experiences.length - 1 && (
            <div className="w-1 h-20 sm:h-24 bg-gradient-to-b from-[#915eff] to-transparent mt-2"></div>
          )}
        </div>

        {/* Content card */}
        <div className="flex-1 min-w-0">
          <div className="bg-[#1d1836] p-4 sm:p-6 rounded-lg shadow-lg border border-[#232631] relative">
            {/* Arrow pointing to timeline */}
            <div 
              className="absolute left-0 top-6 w-0 h-0 transform -translate-x-full"
              style={{
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderRight: '8px solid #1d1836'
              }}
            />
            
            <div className="mb-4">
              <h3 className="text-white text-[20px] sm:text-[24px] font-bold leading-tight">
                {experience.title}
              </h3>
              <p className="text-secondary text-[14px] sm:text-[16px] font-semibold mt-1">
                {experience.company_name}
              </p>
              <p className="text-secondary text-[12px] sm:text-[14px] mt-1 opacity-80">
                {experience.date}
              </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, pointIndex) => (
                <li
                  key={`experience-point-${pointIndex}`}
                  className="text-white-100 text-[13px] sm:text-[14px] pl-1 tracking-wider leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="work" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-16 sm:mt-20 flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={`experience-${index}`} 
            experience={experience} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");