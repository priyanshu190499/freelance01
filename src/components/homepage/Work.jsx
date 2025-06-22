import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Insigne",
    tag: "Branding",
    image: "https://demoxml.com/wp/darkyn/wp-content/uploads/2025/04/8-553x447.png",
    link: "https://demoxml.com/wp/darkyn/project/insigne/",
  },
  {
    title: "Logico",
    tag: "Branding",
    image: "https://demoxml.com/wp/darkyn/wp-content/uploads/2025/04/2-553x447.png",
    link: "https://demoxml.com/wp/darkyn/project/logico/",
  },
  {
    title: "Nightwish",
    tag: "Branding",
    image: "https://demoxml.com/wp/darkyn/wp-content/uploads/2025/04/9-553x447.png",
    link: "https://demoxml.com/wp/darkyn/project/nightwish/",
  },
];

const Work = () => {
  return (
    <section className=" py-16 bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-12 shadow-[0_4px_3px_-3px_#dc5f00] w-full">
       <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold uppercase relative inline-block">
  WORK
</h2>

        <Link
  href="#"
  className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wider uppercase hover:text-orange-500 transition"
>
  All Projects
</Link>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((item, index) => (
          <div key={index} className="group">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-all duration-500 cursor-pointer block"
            >
              {/* Image container */}
              <div className="overflow-hidden transition-all duration-500 rounded-3xl group-hover:rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-all duration-500 group-hover:brightness-75 group-hover:rotate-2"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl group-hover:rounded-xl pointer-events-none" />
            </a>

            {/* Title & Badge - moved outside the image container */}
            <div className="mt-4">
              <h3 className="text-[1.75rem] font-semibold transition-colors duration-300 text-neutral-500 group-hover:text-white">
                {item.title}
              </h3>
              <div className="mt-2 px-3 py-1 bg-orange-600 text-white text-sm font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-block">
                {item.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;