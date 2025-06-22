import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const navItems = ['Home', 'About', 'Work', 'Blog', 'Contact'];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-10 pt-[12px] pb-[12px] left-1/2 -translate-x-1/2 w-[92%] bg-[#1f1f1f] rounded-md z-40 shadow-md"
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Darkyn Logo" className="h-7 w-auto" />
          </div>

          {/* Desktop Nav Items */}
          <ul className="hidden  custom-show-on-desktop space-x-6 uppercase text-sm tracking-wide">
            {navItems.map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <li key={item}>
                  <NavLink to={path} className="relative group py-1 inline-block">
                    <span className={`transition-colors text-xl duration-300 ${isActive ? "text-white" : "text-white"}`}>
                      {item}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-[#dc5f00] transition-all duration-300 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Hamburger for Mobile */}
          <div className="hidden custom-show-on-mobile">
            <button onClick={toggleSidebar} className="border p-4  text-white">
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* SIDEBAR */}
     <AnimatePresence>
  {sidebarOpen && (
    <>
     

      {/* Fullscreen Sidebar - Slide In from Left */}
      <motion.div
        className="fixed flex justify-end inset-0 bg-black opacity-90 text-white z-50 "
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.5 }}
      >
        {/* Close Button (top-right corner) */}

<motion.button
  onClick={closeSidebar}
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="absolute top-3 right-6 text-white text-2xl hover:text-[#dc5f00] transition duration-300"
>
  &times;
</motion.button>


        {/* Nav Items */}
        <motion.div 
        className="flex flex-col items-start w-[300px] border p-8 pt-12 space-y-6 text-right "
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.5, delay:0.5 }}
        >
          <div className="flex items-center">
            <img src={logo} alt="Darkyn Logo" className="h-7 w-auto" />
          </div>
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <NavLink
                key={item}
                to={path}
                className={`text-l uppercase tracking-wide ${
                  isActive ? 'text-[#dc5f00]' : 'text-white'
                }`}
                onClick={closeSidebar}
              >
                {item}
              </NavLink>
            );
          })}
        </motion.div>
      
      
      
      </motion.div>

    </>
  )}
</AnimatePresence>

    </>
  );
};

export default Navbar;
