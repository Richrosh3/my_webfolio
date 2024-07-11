import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import goodReads from "@/public/goodReads.png";
import onlineCasino from "@/public/onlineCasino.jpg"
import webfolio from "@/public/webfolio.png"

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
    date: "2020 - 2021",
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
      "Mainly assisted in creating an OS and embedded software for a communication device used on ships, jets, and land bases.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Senior Associate Software Engineer",
    location: "McLean, VA",
    description:
      "Currently working as a software engineer at Capital One!",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - now",
  },
] as const;

export const projectsData = [
  {
    title: "Webfolio",
    description:
      "Got creative and made a web portfolio for myself! I really love the book reviews page since it's something I've been wanting to do for so long :)",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: webfolio,
  },
  {
    title: "goodreads Web Scraper",
    description:
      "I absolutely hate the goodreads UI/UX so I created an application to scrape the website since Goodreads stopped their API service.",
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
