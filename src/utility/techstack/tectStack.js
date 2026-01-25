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
    {id: 1, src:html ,name: 'HTML'},
    {id: 2, src:css, name: 'CSS'},
    {id: 3, src:tailwind, name: 'tailwindcss'},
    {id: 4, src:javascript, name: 'javascript'},
    {id: 5, src:node, name: 'node'},
    {id: 6, src:express, name: 'express'},
    {id: 7, src: mongodb, name: 'mongodb'},
    {id: 8, src: postgreSQL, name: 'postgreSQL'},
    {id: 9, src: firebase, name: 'firebase'},
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
