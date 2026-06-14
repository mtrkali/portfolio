import { motion } from 'framer-motion';
import React from 'react';

const SkillBar = ({name, level}) => {
    return (
        <div>
            <div className="flex justify-between mb-1 text-sm text-gray-100">
                <span>{name}</span>
                <span>{level}%</span>
            </div>

            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                initial = {{width: 0}}
                whileInView={{width: `${level}%`}}
                transition = {{duration: 1.2, ease: "easeInOut"}}
                className = 'h-full bg-blue-500 rounded-full'/>
            </div>
        </div>
    );
};

export default SkillBar;