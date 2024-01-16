"use client";

import { useRef } from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 3", "1.55 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id="experience">
      <SectionHeading>Experience</SectionHeading>
      {experiencesData.map((experience, index) => (
        <motion.div
          key={index}
          ref={ref}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
          className=" flex flex-col justify-center items-center  max-w-[42rem]  sm:h-[18rem] gap-2 sm:p-2  hover:bg-gray-200 transition"
        >
          <span className="text-3xl text-violet-500">{experience.icon}</span>
          <p className="mt-2 leading-relaxed text-gray-700">
            {experience.date}
          </p>
          <p className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
            {experience.location}
          </p>
          <h3 className="text-2xl font-semibold">{experience.title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 text-center px-5">
            {experience.description}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
