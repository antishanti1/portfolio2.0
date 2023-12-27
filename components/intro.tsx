"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import me from "@/public/me.jpg";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Image
            src={me}
            alt="Alina Shutkova"
            height="192"
            width="192"
            quality="95"
            priority={true}
            className="object-cover shadow-xl h-28 w-28 rounded-full"
          />
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-sm font-regular !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold"> Hi, I&apos;m Alina.</span> I&apos;m a{" "}
        <span className="font-bold"> Full Stack Developer</span>.I am
        specialized in building websites and mobile applications with{" "}
        <span className="font-bold">
          React, React Native, Next.js, and Tailwind CSS.
        </span>
      </motion.p>
      <motion.div
        className="flex gap-4 items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          href="/#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 transition"
        >
          Contact me{" "}
          <FaChevronRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/resume.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 cursor-pointer transition border-black/10 border"
        >
          Download Resume{" "}
          <FaAngleDoubleDown className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
      <motion.div
        className="flex justify-center mt-5 sm:mb-10 gap-2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <a
          href="https://twitter.com/shutkova_a"
          target="_blank"
          className="bg-white h-12 w-12 rounded-full flex justify-center items-center border border-black/10 text-gray-900 hover:text-gray-950 transition hover:scale-105"
        >
          <FaXTwitter className="h-7 w-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/alinashutkova/"
          target="_blank"
          className="bg-white h-12 w-12 rounded-full flex justify-center items-center border border-black/10 text-gray-900 hover:text-gray-950 transition hover:scale-105"
        >
          <FaLinkedin className="h-7 w-7" />
        </a>
        <a
          href="https://github.com/antishanti1"
          target="_blank"
          className="bg-white h-12 w-12 rounded-full flex justify-center items-center border border-black/10 text-gray-900 hover:text-gray-950 transition hover:scale-105"
        >
          <FaGithub className="h-7 w-7" />
        </a>
      </motion.div>
      <motion.span
        className="text-gray-500"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        [scroll down]
      </motion.span>
    </section>
  );
}
