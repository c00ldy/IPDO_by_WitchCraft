import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const { token, setToken } = useContext(StoreContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Animation variants for staggered effect
  const navLinkVariants = {
    hidden: { opacity: 0, x: -20 }, // Start hidden and slightly to the left
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Stagger the animation by 0.2s for each item
        duration: 0.5,
      },
    }),
  };

  return (
    <div>
      <header className="w-full bg-[#010b18] px-10 h-14 flex items-center justify-between border-b border-blue-500">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={assets.logo} alt="Logo" className="w-40" />
          </Link>
        </div>

        {/* Right Section: Navigation Links and Sign Up Button */}
        <div className="ml-auto flex items-center gap-4 sm:gap-6 text-[#a1caff] text-sm sm:text-base">
          <nav className="flex gap-4 sm:gap-6">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0} // First item
              variants={navLinkVariants}
            >
              <Link to="/home">
                <p className="hover:underline">Home</p>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1} // Second item
              variants={navLinkVariants}
            >
              <Link to="/about">
                <p className="hover:underline">About</p>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2} // Third item
              variants={navLinkVariants}
            >
              <Link to="/docs">
                <p className="hover:underline">Docs</p>
              </Link>
            </motion.div>
          </nav>

          {/* Sign Up / Profile Section */}
          <div className="ml-auto">
            {!token ? (
              <button
                onClick={() => setShowLogin(true)}
                className="px-3 py-1 border border-blue-500 text-[#a1caff] rounded hover:bg-blue-500 hover:text-[white] transition-colors text-sm sm:text-base"
              >
                Sign Up
              </button>
            ) : (
              <div className="nav-profile" onClick={toggleDropdown}>
                <img src={assets.profile_icon} alt="Profile" />
                {isDropdownOpen && ( // Render dropdown if it's open
                  <ul className="nav-profile-dropdown">
                    <li onClick={logout}>
                      <img src={assets.logout_icon} alt="Logout" />
                      <p>Logout</p>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
