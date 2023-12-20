import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
        title: "Front-End Developer",
        location: "Miami, FL",
        description:
          "Collaborated with the development team to design and develop interactive web applications using React, HTML, CSS, and JavaScript. Translated design mockups into functional user interfaces, integrated third-party APIs, and actively participated in Agile development methodologies, ensuring project success through continuous improvement.",
        icon: React.createElement(CgWorkAlt),
        date: "2021 - 2023",
      },
  {
    title: "Graduated BrainStation bootcamp",
    location: "Miami, FL",
    description:
      "After working as a Front-End Developer for almost 2 years, I decided to take a bootcamp to learn more about Full-Stack development. I learned Node.js, Express, MongoDB, SQL, Python and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "React Native Developer",
    location: "Miami, Fl",
    description:
      "I'm now a full-stack developer as well as a mobile developer. I'm currently working on a React Native project for a startup.",
    icon: React.createElement(FaReact),
    date: "Jun 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ACENDI",
    description:
      "Mobile app for a startup. I'm the lead developer working on mobile app for meditation. It's a React Native app with a Node.js backend using Firebase for authentification and data storage.",
    tags: ["React Native", "Firebase", "Node.js", "Express"],
    imageUrl: corpcommentImg,
  },
  {
    title: "AI Marketplace",
    description:
      "Colaborated with a team of developers to build a marketplace for AI models. I was in charge of the front-end. It's a Next.js app with a AWS backend and data storage.",
    tags: ["Next,js", "TypeScript", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "TeamWise by UKG",
    description:
      "Psychological Safety Toolkit using Generative AI model trained by UKG engineers. In collaboration with UX designers in an Agile environment, leveraged Jira for project management, automated tasks,generated creative content, and made data-driven decisions by analyzing patterns.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "AidMapper",
    description:
      "Volunteering platform for refugees, featuring a map-based search for aid organizations. I was in charge of the front-end and back-end. ",
    tags: ["React", "Node.js", "Express", "MongoDB", "Mapbox"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "VoxAI",
    description:
      "Custom AI chatbot powered by OpenAI API.",
    tags: ["React Native", "OpenAi Api"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "InStock",
    description:
      "   Project for a Fortune 500 client—an Inventory Management System. The project involved building a scalable,full-stack web application. I was in charge of the front-end and back-end.",
    tags: ["React", "Node.js", "Express", "mySQL"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "Three.js",
    "Jest",
    "AWS",
    "Firebase",
    "Mapbox",
    "OpenAI",
    "MySQL",
    "Figma",
    "Postman",
] as const;