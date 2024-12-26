import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:pg-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-red-950 flex items-center gap-2"
          >
            {" "}
            <FaBlog className="inline-block" /> Books{" "}
          </Link>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer"
              >
                {" "}
                {link}{" "}
              </Link>
            ))}
          </ul>

          <div className="lg:flex items-center space-x-12 hidden">
            <button>
              <FaBarsStaggered className="w-s hover:text-blue-700" />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5 text-black focus:outline-none" />
              ) : (
                <FaBarsStaggered className="w-6 h-6 text-black" />
              )}
            </button>
          </div>

          <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-600 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer"
              >
                {" "}
                {link}{" "}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
