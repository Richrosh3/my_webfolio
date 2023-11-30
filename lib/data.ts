import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import goodReads from "@/public/goodReads.png";
import onlineCasino from "@/public/onlineCasino.jpg"

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
      "Utilized React and React-Native to create a web/mobile application for a startup company called Memley.",
    icon: React.createElement(FaReact),
    date: "2020-2021",
  },
  {
    title: "Graduated College",
    location: "College Park, MD",
    description:
      "Graduated from the University of Maryland, College Park with a Bachelors in Computer Engineering!",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Engineer",
    location: "Baltimore, MD",
    description:
      "Currently working as a software engineer at Northrop Grumman.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-current",
  },
] as const;

export const projectsData = [
  {
    title: "goodreads Web Scraper",
    description:
      "I absolutely hate the goodreads UI/UX so I created an application to scrape the website. Eventually, I will create a book reviews page on this website!",
    tags: ["Python"],
    imageUrl: goodReads,
  },
  {
    title: "Online Casino",
    description:
      "A simulated online casino with single and multi-player functionality. I had a lot of fun working with three other students to make this!",
    tags: ["Python", "HTML", "JavaScript"],
    imageUrl: onlineCasino,
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
] as const;
