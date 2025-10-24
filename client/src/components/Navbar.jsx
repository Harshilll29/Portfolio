import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logoh, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#050816]/90 shadow-lg" : "bg-[#050816]/80"
      } backdrop-blur-md border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoh} alt="logo" className="w-10 h-10 object-contain" />
          <span className="text-white text-lg sm:text-xl font-semibold tracking-wide">
            Harshil Joshi
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer text-base font-medium transition-all duration-200 ${
                active === link.title ? "text-white" : "text-gray-400"
              } hover:text-white`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Dropdown */}
        {toggle && (
          <div className="sm:hidden absolute top-20 right-4 w-56 bg-[#0f1125] border border-gray-700 rounded-xl shadow-lg p-4 z-30 transition-all duration-300">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-sm font-medium px-4 py-2 rounded-md ${
                    active === link.title ? "bg-white/10 text-white" : "text-gray-400"
                  } hover:bg-white/10 transition-colors`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className="block w-full">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
