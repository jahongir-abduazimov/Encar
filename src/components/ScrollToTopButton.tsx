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
      className="fixed bottom-8 cursor-pointer duration-200 right-8 z-[1000] w-[50px] h-[60px] border border-white flex items-center justify-center rounded-md bg-primary text-white shadow-lg text-2xl transition-opacity hover:opacity-80"
      aria-label="Scroll to top"
    >
      <FaArrowUpLong />
    </button>
  );
};

export default ScrollToTopButton;
