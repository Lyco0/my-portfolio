import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'
import { motion } from 'motion/react'

const Services = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="work" className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        What I do in my free time.
      </motion.h4>
      <motion.h2 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.5}}
      className='text-center text-5xl font-Ovo'>
        My Projects
      </motion.h2>
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I am a simple developer who enjoys building interesting webpage and applications
        and also involve in designing UI/UX for fun. Here are some of my projects. 
      </motion.p>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6, delay:0.9}}
      className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project, index)=>(
          <motion.div 
          whileHover={{scale:1.05}}
          transition={{duration:0.3}}
          key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg
            relative cursor-pointer group'
            style={{backgroundImage: `url(${project.bgImage})`}}>
              <div className='bg-white w-10/12 rounded-md absolute bottom-5
              left-1/2 -translate-x-1/2 py-3 px-5 flex items-center 
              justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold'>{project.title}</h2>
                  <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
              </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:1.1}}
      href="https://github.com/Lyco0" target='_blank' className='w-max flex items-center justify-center gap-2
      text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
      my-20 hover:bg-[#fcf4ff] duration-500 dark:text-white dark:border-white dark:hover:bg-[#2a004a]'>
        Explore all my projects on GitHub.<Image src={isDarkMode ? assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='Rightarrow'
        className='w-4'/>
      </motion.a>

    </motion.div>
  )
}

export default Services
