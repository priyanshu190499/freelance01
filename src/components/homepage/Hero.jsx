
import bgImage from "../../assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
   <section className="relative  bg-black text-white overflow-hidden">
  {/* Background */}
  <img
  src={bgImage}
  alt="Background"
  className="absolute top-[-3%] inset-0 w-full h-full object-contain object-center z-0"
/>


  <div className="flex flex-col justify-end ">

  {/* Hero Content */}
 <div className="relative h-screen z-10 pt-60 text-left custom-hero-grid " >
  {/* AIM */}
  <div className="order-1 h-full flex justify-start items-start lg:justify-center" >
    <h1  className="text-[64px] lg:text-[200px] font-extrabold uppercase text-white/80 "
 >AIM</h1 >
  </div>

  {/* SKY */}
  <div className="order-2 h-full flex justify-start items-start lg:justify-center lg:items-end" >
    <h1 className="text-[64px] lg:text-[200px] font-extrabold uppercase text-white/80">SKY</h1>
  </div>

  {/* CENTER TEXT */}
  <div className="order-3 flex flex-col justify-around h-full " >
    <p className="text-base lg:text-xl leading-relaxed max-w-md">
      We are a creative agency committed to delivering innovative solutions,
      from concept to execution, ensuring your brand's success and growth.
    </p>
    <Link
      href="#"
      className="inline-flex items-center justify-start gap-2 text-white  hover:text-gray-300 transition"
    >
      <span className="border-b border-white">Projects</span>
      <img
        src="https://demoxml.com/wp/darkyn/wp-content/themes/darkyn/assets/images/arrow-right.png"
        alt="arrow"
        className="w-4 h-4"
      />
    </Link>
    <div className="text-lg lg:text-xl uppercase tracking-wider font-light border-l-4 border-[#dc5f00] pl-4">
      Where Innovation <br /> Meets Design.
    </div>
  </div>
</div>


  {/* Marquee */}
 <div className="relative w-full bg-black overflow-hidden shadow-[inset_0_1px_1px_-1px_white,inset_0_-1px_1px_-1px_white] py-8 group">
  <div className="w-full overflow-hidden relative">
    <div className="marquee-track flex gap-24">
      {[
        "Clandestine", "Boltshift", "Biosynthesis", "BuildingBlocks", "AltShift",
        "Clandestine", "Boltshift", "Biosynthesis", "BuildingBlocks", "AltShift"
      ].map((name, i) => (
        <img
          key={i}
          src={`https://demoxml.com/wp/darkyn/wp-content/uploads/2025/03/${name}.png`}
          alt={name}
          className="h-12 w-auto flex-shrink-0"
        />
      ))}
    </div>
  </div>
</div>
  </div>



</section>

  );
};

export default Hero;
