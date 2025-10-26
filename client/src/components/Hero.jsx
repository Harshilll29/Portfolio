import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] opacity-90 z-[-1]" />
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          {/* fixed: correct utility name */}
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Harshil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces and web applications.
          </p>
        </div>
      </div>


      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      <div className="absolute bottom-5 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-16 rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div 
              animate={{y: [0, 24, 0]}} 
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop' 
              }} 
              className="w-3 h-3 rounded-full bg-white mb-1"
            />

      {/* <div className="absolute inset-0 bg-linear-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] opacity-90" />
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 bg-linear-to-b from-[#915eff] to-transparent"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Harshil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces and web applications.
          </p>
        </div>
      </div>


      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      <div className="absolute bottom-5 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-16 rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div 
              animate={{y: [0, 24, 0]}} 
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop' 
              }} 
              className="w-3 h-3 rounded-full bg-white mb-1"
            /> */}
          </div>
        </a>
      </div>
    </section> 
  )
}

export default Hero