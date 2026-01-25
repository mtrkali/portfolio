import React, { useEffect, useState } from 'react';
import CodeBackground from '../../../utility/BackgroundCode/CodeBackground';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import FallingLeaf from '../../../utility/falingLeaf/FallingLeaf ';
import { containerVarients, itemVarients, tectStack } from '../../../utility/techstack/tectStack';

const Home = () => {
    const [typingDone, setTypingDone] = useState(false)
    const text = "i am full-stack developer who loves building things for the web. From responsible user interfaces to secure and efficient backends. i focus on performance, clean code, and great user experience"

    useEffect(() => {
        const typingTime = text.length * 90
        const timer = setTimeout(() => {
            setTypingDone(true)
        }, typingTime + 5000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className=' min-h-screen w-full md:w-[98%] lg:w-[98%] mx-auto mt-3'>
            <div className='flex flex-col md:flex-row lg:flex-row gap-5 items-center md:items-start lg:items-start justify-around bg-amber-500/10 relative p-3'>
                <CodeBackground></CodeBackground>
                <div className='w-full md:w-1/2 lg:w-1/2 rounded-lg mt-20 text-center lg:text-start'>
                    <h1 className="text-3xl font-bold p-2"><strong>Hey, <span className='text-red-500'>I</span> am <span className='text-amber-500'>developer</span></strong></h1>
                    <p className='w-full md:w-11/12 lg:w-11/12 p-2 '>
                        <Typewriter
                            words={[text]}
                            loop={1}          // 0 = infinite
                            cursor={false}
                            typeSpeed={90}
                            deleteSpeed={0}
                            delaySpeed={1500}
                        />
                    </p>
                    <div>
                        {typingDone &&
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}>
                                <button className='btn hover:scale-105 bg-amber-800 text-xs mr-2'>Download CV</button>
                                <button className='btn hover:scale-105 btn-outline border-amber-800 text-xs'>RESUME</button>
                            </motion.div>}
                    </div>

                    <div className='mt-5'>
                        {typingDone && <h1 className="text-2xl">we also work with</h1>}
                        {(typingDone &&
                            <motion.div
                                variants={containerVarients}
                                initial="hidden"
                                animate="visible"
                                className="flex items-center gap-4 mt-5 justify-center "
                            >
                                {tectStack.map((tech) => (
                                    <motion.img
                                        key={tech.id}
                                        src={tech.src}
                                        alt={tech.name}
                                        variants={itemVarients}
                                        className="w-8 lg:w-14 lg:h-14 rounded-lg hover:scale-110"
                                    />
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>
                <div className=' w-full max-w-md shadow-2xl rounded-full bg-black/60 shadow-amber-600 relative'>
                    {
                        typingDone &&
                        <>
                            <FallingLeaf delay={0} left="0%" />
                            <FallingLeaf delay={0.3} left="20%" />
                            <FallingLeaf delay={0.6} left="50%" />
                            <FallingLeaf delay={0.9} left="75%" />
                        </>
                    }
                    <img src="https://i.ibb.co.com/WvT1Mxrz/Whats-App-Image-2026-01-20-at-5-50-05-PM.png" className='w-full h-auto rounded-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;