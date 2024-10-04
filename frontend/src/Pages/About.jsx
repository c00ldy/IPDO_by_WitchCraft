import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, 
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#010b18] text-[#a1caff] p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={0} 
        >
          About IPDO (IP Discovery & Open Ports)
        </motion.h1>

        <motion.div
          className="mb-6"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={1} 
        >
          <p className="text-lg">
            IPDO is a cutting-edge platform for IP address intelligence and threat assessment. Our team of cybersecurity experts and data scientists have developed advanced algorithms to provide you with comprehensive insights about any IP address.
          </p>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={2}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="mb-6 text-lg"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={3}
        >
          At IPDO, our mission extends beyond merely displaying a public IP address in real time. We empower our users with a comprehensive suite of tools designed to effectively manage, monitor, and obscure their IP addresses.
        </motion.p>
        <motion.p
          className="mb-6 text-lg"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={4}
        >
          In today’s digital landscape, where privacy and security are paramount, we recognize the need for complete control over one’s online presence. Our goal is to equip individuals and organizations with the insights they need to navigate the complexities of IP monitoring.
        </motion.p>
        <motion.p
          className="mb-6 text-lg"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={5}
        >
          We are committed to providing valuable resources that not only inform our users but also enhance their ability to safeguard their digital identities. Our innovative tracking tools enable real-time monitoring of IP changes, and our guidance on securely altering or concealing an IP address ensures that users have support at every step of the way.
        </motion.p>
        <motion.p
          className="mb-6 text-lg"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={6}
        >
          At the core of our mission lies a dedication to fostering a safer and more private internet experience for everyone. We believe that informed users are empowered users, and we aim to cultivate an environment where individuals can confidently take charge of their online interactions.
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={7}
        >
          Our Team
        </motion.h2>
        <motion.ul
          className="list-disc list-inside mb-6"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={8}
        >
          <li>Dhruval Mevada - Threat Analyst</li>
          <li>Kunjan Herma - UI Designer</li>
          <li>Himanshu Makwana - Full Stack Developer</li>
          <li>Krunal Vaishnav - Full Stack Developer</li>
        </motion.ul>

        <motion.p
          className="text-lg mb-6"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={9}
        >
          Together, we're committed to enhancing global cybersecurity by providing actionable intelligence and empowering organizations to protect their digital assets.
        </motion.p>

        <motion.p
          className="text-lg"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          custom={10}
        >
          Join us on our mission to create a safer online world, one IP address at a time.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
