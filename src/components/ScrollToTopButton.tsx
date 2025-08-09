"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[1000] w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white shadow-xl text-2xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl border-none outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
      style={{ boxShadow: '0 4px 24px rgba(80, 0, 200, 0.15)' }}
      aria-label="Scroll to top"
    >
      <FaArrowUpLong style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }} />
    </button>
  );
};

export default ScrollToTopButton;
