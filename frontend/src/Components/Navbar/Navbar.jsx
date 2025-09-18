import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {

  const navLinkVariants = {
    hidden: { opacity: 0, x: -20 }, 
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, 
        duration: 0.5,
      },
    }),
  };

  return (
    <div>
      <header className="w-full bg-[#010b18] px-10 h-14 flex items-center justify-between border-b border-blue-500">
        <div className="flex items-center">
          <Link to="/">
            <img src={assets.logo} alt="Logo" className="w-40" />
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-4 sm:gap-6 text-[#a1caff] text-sm sm:text-base">
          <nav className="flex gap-4 sm:gap-6">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={navLinkVariants}
            >
              <Link to="/home">
                <p className="hover:underline">Home</p>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1} 
              variants={navLinkVariants}
            >
              <Link to="/about">
                <p className="hover:underline">About</p>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2} 
              variants={navLinkVariants}
            >
              <Link to="/docs">
                <p className="hover:underline">Docs</p>
              </Link>
            </motion.div>
          </nav>

          <div className="ml-auto"></div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
