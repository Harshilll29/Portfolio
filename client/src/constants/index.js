import { title } from "framer-motion/client";
import {
  mobile,
  backend,
  brainybeam,
  oasisinfobyte,
  web,
  javascript,
  html,
  css,
  java,
  express,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  blog,
  nexora
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: web,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  }, 
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Development Intern",
    company_name: "Oasis Infobyte ",
    icon: oasisinfobyte,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      " Developed an ATM interface system and interactive number guessing game during a one-month  Java development internship. Gained hands-on experience with object-oriented programming principles, user input handling, and Java core libraries while implementing functional software solutions.",
    ],
  },
  {
    title: "React Js Development",
    company_name: "BrainyBeam Technologies Pvt.Ltd ",
    icon: brainybeam,
    iconBg: "#E6DEDD",
    date: "May-2025",
    points: [
      "Developed and implemented key React.js functionalities during a one-week intensive internship, including React Hooks for state management, component state handling, and routing implementation for single-page application navigation. Gained practical experience with modern React development patterns and frontend architecture",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blog Space",
    description:
      "Build a comprehensive blogging website using MERN stack with secure JWT and Google OAuth authentication. Built feature-rich blog editor with draft/publish functionality, commenting system, trendin sections, and category filtering. Implemented responsive UI with React and Tailwind CSS, including user dashboard, pagination, and email OTP for password recovery. Utilized MongoDB for complete data storage and management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node/express",
        color: "green=text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Harshilll29/BlogSpace",
  },
  {
    name: "Nexora",
    description:
      "Build a MERN stack language exchange platform where users connect with native speakers for interactive language learning. Leveraged Stream API for real-time messaging and video calls, enabling authentic language practice sessions. Built with secure authentication, Zustand for state management, and TanStack Query for data fetching, delivering a smooth and responsive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node/express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nexora,
    source_code_link: "https://github.com/Harshilll29/Nexora",
  },
];

export { services, technologies, experiences, testimonials, projects };