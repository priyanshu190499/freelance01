import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const glassRef = useRef();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const platforms = ["Facebook", "Instagram", "Youtube"];

  useEffect(() => {
    const glass = glassRef.current;
    if (!glass) return;

    let pos = -40;
    const move = () => {
      pos = pos >= 100 ? -40 : pos + 0.2;
      glass.style.bottom = `${pos}%`;
      requestAnimationFrame(move);
    };
    move();
  }, []);

  return (
    <footer className="bg-black text-white text-center overflow-hidden ">
      {/* ---------------- Top Container: Contact + Socials ---------------- */}
      <div className="relative py-16  rounded-lg border border-white/10 w-[100%]  mx-auto mt-6 group overflow-hidden" style={{background:"rgba(255,255,255,0.05)"}}>
        {/* Moving Orange Glass Effect */}
       <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
  <div className="moving-glass absolute w-[200%] h-[200%] rotate-[30deg] -left-[80%] -bottom-[40%]" />
</div>



        <div className="relative z-10 flex flex-col items-center space-y-6">
          {/* Email */}
          <a
            href="mailto:info@example.com"
            className="text-lg text-white/80 hover:text-[#dc5f00] transition-colors duration-300"
          >
            info@example.com
          </a>

          {/* Phone */}
          <a
            href="tel:+5-(123)-456-78-90"
            className="text-5xl font-bold tracking-wide hover:text-[#dc5f00] transition-colors duration-300"
          >
            +5-(123)-456-78-90
          </a>

          {/* Social Buttons */}
            <div className="flex gap-4 pt-4">
      {platforms.map((platform, index) => (
        <a
          key={platform}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`relative px-6 py-2 rounded-md border border-neutral-700 flex items-center gap-2 transition-all duration-300 transform ${
            hoveredIndex === index
              ? "bg-[#dc5f00] text-white shadow-[0_0_10px_#dc5f00] scale-105"
              : "bg-transparent text-white/80 scale-100"
          }`}
        >
          <span className="text-sm font-medium">{platform}</span>

          <img
            src="https://demoxml.com/wp/darkyn/wp-content/themes/darkyn/assets/images/arrow-down-right.png"
            alt="Arrow Icon"
            className={`w-4 h-4 rotate-45 transform transition-all duration-300 ${
              hoveredIndex === index
                ? "translate-y-0 opacity-100"
                : "translate-y-1 opacity-0"
            }`}
          />
        </a>
      ))}
    </div>
        </div>
      </div>

      {/* ---------------- Bottom Container: Copyright + Arrow ---------------- */}
      <div className="mt-6 flex items-center justify-between w-[100%]  mx-auto py-6  text-sm text-white/70">
        <span>© 2025 Darkyn. &nbsp; All Rights Reserved.</span>
        <a
          href="#home"
          className="w-10 h-10 rounded border border-white/20 flex items-center justify-center hover:bg-[#dc5f00] transition duration-300 group overflow-hidden"
        >
          <svg
            className="w-4 h-4 text-white/70 group-hover:text-white transform group-hover:animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
