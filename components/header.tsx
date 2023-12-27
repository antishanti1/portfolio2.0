"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const [activeSec, setActiveSec] = useState("Home");
  return (
    <header className=" z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5] w-full rounded-none
    border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
    shadow-balck/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="h-3/4 flex item-center justify-center relative"
              key={link.hash}
            >
              <Link
                onClick={() => setActiveSec(link.name)}
                className={clsx(
                  "flex w-full py-3 px-3 hover:text-gray-950 transition items-center justify-center",
                  {
                    "text-white hover:text-white ": activeSec === link.name,
                  }
                )}
                href={link.hash}
              >
                {link.name}
                {link.name === activeSec && (
                  <motion.span
                    layoutId="activeSec"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="bg-gray-950 absolute inset-0 -z-10 rounded-full"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
