"use client";

import React from "react";
import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Let&apos;s connect!</SectionHeading>
      <p>
        You can reach me via my{" "}
        <a
          href="mailto:shutkova2603@gmal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 hover:underline"
        >
          email
        </a>
      </p>
      <p className="mt-3">
        I would love to recieve a feedback, get my hand&apos;s on the new
        project, and most imortant - BE A PART OF YOUR TEAM AS A DEVELOPER.
        Let&apos;s create amazing stuff together!
      </p>
    </section>
  );
}
