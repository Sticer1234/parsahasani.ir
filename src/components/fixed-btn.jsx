import { useEffect, useState } from "react";
import { IoArrowUpSharp } from "react-icons/io5";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200); // وقتی بیشتر از ۲۰۰ پیکسل اسکرول شد
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed flex items-center justify-center bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-zinc-800 text-white shadow-lg transition-opacity duration-500 md:hover:bg-zinc-700 ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <IoArrowUpSharp className="text-2xl"/>
    </button>
  );
}

export default ScrollToTopButton;
