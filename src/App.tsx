import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import "./App.css";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Apply smooth scrolling to the whole page
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Navbar />
      <Body />
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Go to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
}

export default App;
