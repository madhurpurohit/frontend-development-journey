import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Course", href: "#" },
    { name: "Library", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <>
      {/* Main Navigation Bar (Header) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
        <div className="max-w-[1460px] mx-auto flex items-center justify-between p-6">
          {/* Logo/Brand Name */}
          <a href="#" className="text-white text-2xl font-bold">
            DevFlux
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white font-medium transition-colors duration-300 hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* --- Mobile Menu (Sidebar) --- */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-6 right-6 z-[100] text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {!isOpen ? <Menu size={30} /> : <X size={30} />}
      </button>

      {/* Overlay effect */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 transform transition-transform duration-500 ease-in-out z-50 md:hidden
                   ${isOpen ? "translate-x-0" : "translate-x-full"}
                   bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-2xl`}
      >
        <div className="p-6 pt-24">
          <h2 className="text-2xl font-bold text-white mb-8">Menu</h2>
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="text-white text-lg font-medium p-4 rounded-lg hover:bg-white/20 transition-all duration-200 ease-in-out transform hover:translate-x-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
