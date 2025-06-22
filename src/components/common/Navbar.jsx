import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const location = useLocation();
  const navItems = ['Home', 'About', 'Work', 'Blog', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-[#1f1f1f] rounded-md z-50 shadow-md"
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Darkyn Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Nav Items */}
        <ul className="flex space-x-6 uppercase text-sm tracking-wide">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <li key={item}>
                <NavLink
                  to={path}
                  className="relative group py-1 inline-block"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white hover:text-[#dc5f00]"
                    }`}
                  >
                    {item}
                  </span>

                  {/* Orange underline animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#dc5f00] transition-all duration-300 ease-out ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
