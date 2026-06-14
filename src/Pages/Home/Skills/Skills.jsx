import React from 'react';
import { tectStack } from '../../../utility/techstack/tectStack';
import SkillBar from '../../../utility/skillBar/skillBar';

const Skills = () => {
    return (
        <section data-aos="fade-right" className='py-20 bg-black text-white w-full md:w-[98%] lg:w-[98%] mx-auto'>
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10"><span className="text-amber-500">My</span> Skills</h2>

                {
                    tectStack.map((skill,index)=>(
                        <SkillBar key={index} 
                                 name={skill.name}
                                 level={skill.level}
                                 />
                    ))
                }
            </div>
        </section>
    );
};

export default Skills;