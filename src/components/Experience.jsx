import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { github } from "../assets";

const ExperienceCard = ({experience}) =>(
  
    <VerticalTimelineElement contentStyle={{
      background:"#1d1836", color: '#fff'
    }}contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain font-bold'
        />
      </div>
    }
    >
      <div>
        
        <h3 className='text-white text-[24px]'>
          {experience.title}
        </h3>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
  <div onClick={()=> window.open(source_code_link, "_blank")} 
  className="w-10 h-10 rounded-full-flex justifty-center items-center cursor-pointer"
  >
    <img 
      src={github}
      alt='source_code'
      className="w-1/2 h-1/2 object-contain"
    />
  </div>
</div>
        <p className='text-secondary text-[16px] font-semibold'>Role: {experience.role}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) =>(
          <li
          key={'experience-point-${index}'}
          className='text-whitw-100 text-[14px]
          pl-1 traxking-wider'>
              {point}
              
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
    
    <motion.div variants={ textVariant()}>
      
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Project Experience</h2>
      <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcases my skills and experience through
          real-world projects. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
    </motion.div>
    
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, index)=>(
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>

    </div>
    </>
  )
}
export default SectionWrapper(Experience, "work")