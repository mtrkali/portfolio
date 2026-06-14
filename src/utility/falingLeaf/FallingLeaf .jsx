import React from 'react';
import { easeInOut, motion } from 'framer-motion';

const FallingLeaf = ({ delay, left }) => {
    return (
        <div>
            <motion.img 
            src='https://i.ibb.co.com/YBFDzPx2/leaf-1.png'
            alt='leaf'
            className = 'absolute top-0 w-44 opacity-80 pointer-events-none'
            style={{left}}
            initial={{y: -40, rotate:0, opacity: 0}}
            animate={{
                y:'120vh',
                rotate: 360,
                opacity: 1,
            }}
            transition={{
                duration: 5.5,
                delay,
                ease: 'easeInOut'
            }}
            />
        </div>
    );
};

export default FallingLeaf;