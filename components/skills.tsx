import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import styles from "./skills.module.css";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 mb-28 max-w-[53rem] text-center small:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2">
        {skillsData.map((skill, index) => (
          <li className={styles.neomorph} key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
