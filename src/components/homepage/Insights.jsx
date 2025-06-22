import avatar from "../../assets/avatar.jpg";
import arrowIcon from "../../assets/aarrow.png";
import post1 from "../../assets/post1.jpg";
import post2 from "../../assets/post2.jpg";
import post3 from "../../assets/post3.jpg";
import post4 from "../../assets/post4.jpg";

const blogPosts = [
  {
    title: "Startup Spotlight: Unveiling Business Triumphs",
    category: "technology",
    image: post1,
    link: "https://demoxml.com/wp/darkyn/2025/03/startup-spotlight-unveiling-business-triumphs/",
  },
  {
    title: "Tech Trends: Navigating the Digital Frontier",
    category: "technology",
    image: post2,
    link: "https://demoxml.com/wp/darkyn/2025/03/tech-trends-navigating-the-digital-frontier/",
  },
  {
    title: "Console Corner: Exploring Gaming Platforms",
    category: "technology",
    image: post3,
    link: "https://demoxml.com/wp/darkyn/2025/03/console-corner-exploring-gaming-platforms/",
  },
  {
    title: "Exploring Gaming Platforms: Console Corner",
    category: "technology",
    image: post4,
    link: "https://demoxml.com/wp/darkyn/2025/03/exploring-gaming-platforms-console-corner/",
  },
];

const wrapLastWord = (text) => {
  const words = text.trim().split(" ");
  const lastWord = words.pop();
  const firstLine = words.join(" ");
  return (
    <>
      {firstLine}
      <br />
      <span className="block border-b border-neutral-800 w-fit pt-1">{lastWord}</span>
    </>
  );
};

const Insights = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="space-y-12">
        <h2 className="text-[100px] font-extrabold uppercase shadow-[0_4px_3px_-3px_#dc5f00]">
          Insights
        </h2>

        <div className="flex flex-col gap-10">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col lg:flex-row justify-between gap-6 items-center p-6 border border-neutral-800 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_4px_1px_#dc5f00] blog-glass"
            >
              {/* Left Section */}
              <div className="flex flex-col justify-between gap-4 w-full lg:w-[60%] z-10 transform transition-all duration-300 group-hover:-translate-y-2">
                <div>
                  <div className="inline-block text-sm w-fit px-4 py-1 shadow-[0_0_1px_#dc5f00] text-[#999] font-medium group-hover:shadow-[0_0_4px_#dc5f00] group-hover:text-white rounded-lg transition-all duration-300">
                    {post.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#bbb] group-hover:text-white mt-3">
                    {wrapLastWord(post.title)}
                  </h2>
                </div>

                <div className="flex justify-start items-center gap-4 pt-4 ">
                  <img
                    src={avatar}
                    alt="Author"
                    className="w-12 h-12 shadow-[0_0_0px_3px_#404040] rounded-full bg-neutral-700"
                  />
                  <div className="w-13 h-13 rounded-full bg-neutral-800 flex items-center justify-center">
                    <img src={arrowIcon} alt="Arrow" className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="relative w-full lg:w-[35%] h-40 lg:h-60 overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-105 z-10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Moving Glass Effect */}
              <div className="absolute inset-0 pointer-events-none z-0 after:content-[''] after:absolute after:top-full after:left-0 after:w-[150%] after:h-[200%] after:skew-x-[-30deg] after:bg-gradient-to-tr after:from-white/5 after:via-white/10 after:to-white/5 after:transition-all after:duration-700 group-hover:after:top-[-50%]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
