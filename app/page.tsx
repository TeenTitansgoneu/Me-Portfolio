// app/page.tsx
"use client";

import './page.css'
import { motion, Variants } from "framer-motion";
import Image from 'next/image';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

export default function HomePage() {
  return (
    <main className="home">
      <motion.section
        className="hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.h1 variants={fadeUp} custom={1}>👋 Hi, I&apos;m Teen</motion.h1>
        <motion.p variants={fadeUp} custom={2}>
          I&apos;m a passionate full-stack developer, focused on building elegant, high-performance websites and bots.
          I believe in clean design, great user experience, and writing code that not only works, but scales beautifully.
        </motion.p>
        <motion.p className="ai-text" variants={fadeUp} custom={3}>
          ✨ This portfolio combines personal ideas and AI-assisted content to reflect who I am and what I do best.
          Everything has been carefully edited to authentically represent my journey as a developer.
        </motion.p>
      </motion.section>

      <motion.section
        className="projects"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.h2 variants={fadeUp} custom={4}>💼 My Projects</motion.h2>
        <div className="project-grid">
          {[...Array(3)].map((_, i) => (
            <motion.div
              className="project-card"
              key={i}
              variants={fadeUp}
              custom={i + 5}
              initial="hidden"
              animate="visible"
            >
              <h3>{['🌐 Portfolio Website', '🤖 Discord Bot', '🛍️ Roblox Group Shop'][i]}</h3>
              <p>
                {[
                  'A fully responsive personal website built with Next.js, showcasing my work, contact options, and blog. Includes smooth transitions and a sleek black & blue theme.',
                  'A powerful Discord bot for managing events, trainings, and custom commands. Role-based permissions, time-based actions and beautiful embeds included.',
                  "A custom-built shop system where users can purchase ranks, integrated with Roblox&apos;s API. Secure, fast, and stylish.",
                ][i]}
              </p>
              <div className="tag">{['#Next.js', '#Node.js', '#Roblox API'][i]}</div>
              <div className="tag">{['#CSS', '#Discord.js', '#Fullstack'][i]}</div>
              <div className="tag">{['#Design', '#Automation', '#Next.js'][i]}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="contact"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.h2 variants={fadeUp} custom={8}>📬 Contact Me</motion.h2>
        <motion.p variants={fadeUp} custom={9}>
          Whether you&apos;re looking to collaborate, hire, or just chat — feel free to message me anytime.
        </motion.p>

        <motion.div className="discord-profile" variants={fadeUp} custom={10}>
          <Image
            src="/OIP (2).jpeg"
            alt="Discord Avatar"
            width={100}
            height={100}
            className="discord-avatar"
          />
          <div className="discord-info">
            <p className="discord-name">teentitansgoneu</p>
            <p>☆*: .｡. o(≧▽≦)o .｡.:*☆</p>
          </div>
        </motion.div>

        <motion.p className="portfolio-offer" variants={fadeUp} custom={11}>
          📩 If you&apos;re looking for a personalized portfolio website, feel free to reach out!
          I create custom sites tailored to your needs, combining my expertise with AI-assisted content to deliver high-quality results.
        </motion.p>
      </motion.section>
    </main>
  )
}
