
import bgImage from "../../assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
   <section className="relative  bg-black text-white overflow-hidden">
  {/* Background */}
 <img
  src={bgImage}
  alt="Background"
  className="absolute top-[-100px] md:top-[-60px] sm:top-[-40px] xs:top-[-20px] inset-0 w-full h-full object-contain object-center z-0"
/>



  <div className="flex flex-col justify-end pt-48 z-1">

  {/* Hero Content */}
 <div className="flex flex-col py-8  justify-end  lg:flex-row lg:items-stretch h-[60vh] z-1">
  {/* AIM */}
  <div className="order-1 lg:order-1 flex justify-start items-start lg:justify-center lg:w-1/3">
    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[130px] xl:text-[180px] font-extrabold uppercase text-white">
      AIM
    </h1>
  </div>

  {/* CENTER TEXT */}
  <div className="order-3 lg:order-2 flex flex-col justify-center gap-6 lg:w-1/3 ">
    <p className="text-base lg:text-xl leading-relaxed max-w-md">
      We are a creative agency committed to delivering innovative solutions,
      from concept to execution, ensuring your brand's success and growth.
    </p>
    <a
      href="#"
      className="inline-flex items-center justify-start gap-2 text-white hover:text-gray-300 transition"
    >
      <span className="border-b border-white">Projects</span>
      <img
        src="https://demoxml.com/wp/darkyn/wp-content/themes/darkyn/assets/images/arrow-right.png"
        alt="arrow"
        className="w-4 h-4"
      />
    </a>
    <div className="text-lg lg:text-xl uppercase tracking-wider font-light border-l-4 border-[#dc5f00] pl-4">
      Where Innovation <br /> Meets Design.
    </div>
  </div>

  {/* SKY */}
  <div className="order-2 lg:order-3 flex justify-start items-start lg:justify-center lg:items-end lg:w-1/3">
    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[150px] xl:text-[180px] font-extrabold uppercase text-white">
      SKY
    </h1>
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
