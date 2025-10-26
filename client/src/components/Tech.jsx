// import { BallCanvas } from './canvas';
// import { SectionWrapper } from '../hoc';
// import { technologies } from '../constants';


// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>{technologies.map((technology) => (
//       <div className='w-28 h-28' key={technology.name}>
//         <BallCanvas icon={technology.icon}/>
//       </div>
//     ))}</div>
//   )
// }

// export default SectionWrapper(Tech, "");

import { useEffect, useState } from "react";
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() =>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex items-center justify-center' key={technology.name}>
          {isMobile ? (
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-20 h-20 object-contain"
              draggable={false}
            />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");