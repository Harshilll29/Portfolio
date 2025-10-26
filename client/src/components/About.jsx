import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[220px] h-60">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full h-full bg-linear-to-br from-[#1f1f1f] to-[#2d2d2d] p-px rounded-2xl shadow-lg transition-transform hover:scale-105"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-[#121212] rounded-2xl py-6 px-5 w-full h-full flex justify-center items-center flex-col border border-gray-700 hover:border-purple-500"
        >
          <img
            src={icon}
            alt={title}
            className="w-12 h-12 object-contain mb-4"
          />
          <h3 className="text-white text-lg font-semibold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section id="about" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-purple-400`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-gray-300 text-[17px] max-w-3xl leading-7 text-center mx-auto"
      >
        I'm a passionate software developer with experience in JavaScript and
        expertise in frameworks like React, Node.js, and Express.js. I’m a
        quick learner who collaborates closely with clients to build efficient,
        scalable, and user-friendly solutions to real-world problems.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
