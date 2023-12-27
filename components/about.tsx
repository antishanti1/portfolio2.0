"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0"
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        I&apos;m passionate about creating attractive and user-friendly
        interfaces. I&apos;m skilled in both web and mobile development and
        excel at communication, collaboration, and problem-solving within my
        teams.
      </p>
      <p>
        I have been interested in programming since I was 12 years old but just
        recently got a chance to make a transition to this amazing career. I
        have been working as a contractor/freelancer for the first 2 years
        specializing mostly in Front-End and decided to go through a bootcamp to
        get a more structured education and learn more about Back-End. I&apos;m
        currently working as a Mobile Developer at a startup and I&apos;m
        looking for new opportunities.
      </p>
    </motion.section>
  );
}
