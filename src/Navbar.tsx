import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-black font-bold text-xl tracking-wide">
            MyPortfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-black hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
            <a href="#experience" className="text-black hover:text-blue-600 transition-colors duration-200 font-medium">Experience</a>
            <a href="#projects" className="text-black hover:text-blue-600 transition-colors duration-200 font-medium">Projects</a>
            <a href="#contact" className="text-black hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-md">
          <a href="#about" className="block text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#experience" className="block text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Experience</a>
          <a href="#projects" className="block text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#contact" className="block text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
