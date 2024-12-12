"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", .6);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .2 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-2">
        After graduating from the{" "}
        <span className="font-semibold">
          University of Maryland, College Park{" "}
        </span>
        with a <span className="font-semibold">Bachelors </span>
        in <span className="font-semibold">Computer Engineering, </span>I was
        fortunate to receive an offer to work as a Software Engineer at Northrop 
        Grumman. During my time at NG, I learned a lot about embedded software
        and had more hands on experience with FPGA boards than I ever did in college!
      </p>
      <p className="mb-2">
        <span className="font-light italic">
          Now, you may ask yourself, "why did he decide to split paths and solely
          focus on software engineering?" <br></br>Good question!
        </span>
      </p>
      <p className="mb-4">
        {" "}
        Well, during the pandemic, I worked as a{" "}
        <span className="font-semibold">front-end developer </span>
        for a startup company. In this position, I fell in{" "}
        <span className="font-semibold underline">love</span> with working with
        a dedicated team of engineers, UI/UX designers, and the CEO of the
        company. The goal of the company was to create a mobile and web
        application that would allow affordable and accessible education to students all over
        the US. It was an amazing feeling to be able to see the work I had put
        in being used by various users. I began focusing on software engineering
        at that point, and specifically became more{" "}
        <span className="font-semibold underline">
          interested in full-stack development
        </span>
        . At Northrop Grumman, I feel the same euphoric feeling after finishing
        a difficult task, or seeing my work in action during a demonstration
        to our customers.
      </p>
      
      <p>
          Currently, I am working as a Senior Associate Software Engineer at Capital One! My main role now
          includes more backend and data engineering work for an internal application, which I'm really excited 
          to do. Capital One is a lot more fast paced compared to Northrop Grumman, but I feel like my learning 
          potential has increased exponentially. I'm really excited to be working here!
      </p>

      <p className="mt-4 mb-4">
        <span className="font-light italic">
          Anyways, enough of my professional side!
        </span>
      </p>
      <p className="mb-2">
        Outside of work, I've been really enjoying learning the guitar, watching movies, and playing a variety of sports.
        One of my personal goals of 2023 was to read 25 books by the end of the year and I am thrilled to say I completed the challenge!
        Since I no longer have homework to do or exams to study for, I have been enjoying reading so much more. Take a look at the books 
        that I've read by clicking on the book button!
        Another one of my goals was to finish the Richmond Half Marathon, and I'm proud to say I finished the race 🥳!!!
        I absolutely hate running for long periods of time, but I feel like I should at least finish one full marathon in
        my lifetime. The Richmond Half Marathon felt so rewarding to finish, so I'm sure I'll feel even more ecstatic if I
        complete a full marathon. For now, I'll continue with half-marathons and 5k's.
      </p>
      <p className="mt-4 mb-4">
        Some life-long goals I have are to obtain either a Masters or PhD; not because I'm a natural student,
        but because at some point I want to become a professor at a university. Sadly, the advanced degrees are the
        minimal requirement to become a professor at a university 😭. Alas, when the time comes, I will once again prevail
        against the hardships of studying. I also want to own a cafe by the time I'm 50. I just have a feeling it will be a 
        fulfilling and rewarding endeavor, and a way I can give back to the community once I get my feet grounded.
      </p>
      <p>
        <span className="font-light italic">
          Hope you learned a bit about me :)
        </span>
      </p>
    </motion.section>
  );
}
