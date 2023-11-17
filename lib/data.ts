import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    location: "College Park, MD",
    description:
      "Worked as a front-end developer, mainly utilizing React and React-Native, for a startup company called Memley.",
    icon: React.createElement(FaReact),
    date: "2020-2021",
  },
  {
    title: "Graduated College",
    location: "College Park, MD",
    description:
      "I graduated from the University of Maryland, College Park with a Bachelors in Computer Engineering!",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Engineer",
    location: "Baltimore, MD",
    description:
      "I am currently working as a software engineer at Northrop Grumman.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-current",
  },
] as const;

export const projectsData = [
  {
    title: "goodReads Web Scraper",
    description:
      "Absolutely hate the goodReads UI/UX so I created an application to scrape the website.",
    tags: ["Python"],
    // imageUrl: ,
  },
  {
    title: "Online Casino",
    description:
      "A simulated online casino with single and multi-player functionality. Have fun!",
    tags: ["Python", "HTML", "JavaScript"],
    // imageUrl: ,
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
] as const;
