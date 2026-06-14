import html from '../../assets/images/html.jpg'
import css from '../../assets/images/css.png'
import tailwind from '../../assets/images/tailwindcss.png';
import javascript from '../../assets/images/javascript.png';
import node from '../../assets/images/node.png';
import express from '../../assets/images/expressjs.png';
import mongodb from '../../assets/images/mongodb.png';
import postgreSQL from '../../assets/images/posgreSQL.png';
import firebase from '../../assets/images/firebase.png';

export const tectStack = [
    {id: 1, level:65, src:html ,name: 'HTML'},
    {id: 2, level:50, src:css, name: 'CSS'},
    {id: 3, level:65, src:tailwind, name: 'tailwindcss'},
    {id: 4, level:60, src:javascript, name: 'javascript'},
    {id: 5, level:50, src:node, name: 'node'},
    {id: 6, level:40, src:express, name: 'express'},
    {id: 7, level:55, src: mongodb, name: 'mongodb'},
    {id: 8, level:70, src: firebase, name: 'firebase'},
    {id: 9, level:55, src: postgreSQL, name: 'postgreSQL'},
]

export const containerVarients = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.7,
        },
    },
}

 export const itemVarients = {
    hidden: {
        opacity: 0,
        x: -40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
        },
    },
}
