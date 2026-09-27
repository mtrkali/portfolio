// tectStack.js

export const tectStack = [
  {
    id: 1,
    name: "HTML",
    level: 90,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS",
    level: 85,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    level: 82,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "React",
    level: 88,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 5,
    name: "Next.js",
    level: 80,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 6,
    name: "TypeScript",
    level: 72,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    level: 88,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },

  // Backend
  {
    id: 8,
    name: "Node.js",
    level: 82,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 9,
    name: "Express.js",
    level: 84,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  // Database
  {
    id: 10,
    name: "MongoDB",
    level: 80,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 11,
    name: "PostgreSQL",
    level: 76,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 12,
    name: "Prisma ORM",
    level: 75,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },

  // Authentication
  {
    id: 13,
    name: "Firebase",
    level: 78,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    id: 14,
    name: "Better Auth",
    level: 72,
    src: "https://better-auth.com/icon.svg",
  },
  {
    id: 15,
    name: "Custom Authentication",
    level: 68,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  // Tools
  {
    id: 16,
    name: "Git",
    level: 82,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 17,
    name: "GitHub",
    level: 85,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export const containerVarients = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const itemVarients = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 20,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
    },
  },
};