import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'

const About = ({isDarkMode}) => {
  return (

    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}>
      
      <motion.h4 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>

      <motion.h2 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.5}}
      className='text-center text-5xl font-Ovo'>About me</motion.h2>

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='flex w-full flex-col lg:flex-row items-center
            gap-20 my-18'>
            <motion.div 
            initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full
                rounded-3xl' />
            </motion.div>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.8}}
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                    I am a passionate and driven BCA Graduate with a knack 
                    for coding and a love for turning innovative ideas into reality. 
                    My journey in the world of technology began with a curiosity-driven 
                    dive into programming languages like Python, Java, and C. 
                </p>

                <motion.ul  
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8, delay:1}}
                className='grid grid-cols-1 sm:grid-cols-3 gap-6
                max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description},
                     index)=>(
                        <motion.li 
                        className='border-[0.5px] border-gray-400 rounded-xl
                        p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1
                        duration-500 hover-customb-shadow
                        dark:hover:bg-[#2a004a]/50 dark:border-white hover-customw-shadow' 
                            key={index}>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700
                            dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>
                            {description}</p>
                        </motion.li>  
                    ))}
                </motion.ul>
                <motion.h4 
                initial={{y:20,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:0.5, delay:1.3}}
                className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use regularly and have strong experience with.</motion.h4>
                <motion.ul 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.6, delay:1.5}}
                className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <motion.li 
                        className='cursor-pointer hover:-translate-y-1 
                        duration-500'
                         key={index}>
                            <Image src={tool} alt='Tool' className='w-5
                            sm:w-7'/>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
