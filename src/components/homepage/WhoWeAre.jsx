// import { motion } from "framer-motion";
import plus from "../../assets/plus.png"
import hwa1 from "../../assets/hwa1.jpg"
import hwa2 from "../../assets/hwa2.jpg"

const WhoWeAre = () => {
  return (
    <section className=" py-16 bg-black text-white">
  <div className=" mx-auto space-y-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] w-full font-bold uppercase inline-block shadow-[0_4px_3px_-3px_#dc5f00]">
  Who We Are
</h2>


    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Mission */}
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-6">
          <img src={plus} alt="plus" className="w-16 h-16" />
          <h4 className="uppercase text-3xl font-extralight leading-9 ">Our <br /> Mission</h4>
        </div>
       <div className=" relative h-[300px] flex flex-col lg:flex-row items-center gap-6  p-3 pl-6 rounded-xl overflow-hidden group border border-neutral-700 custom-glass-hover">
  {/* Text */}
  <div className="flex flex-col justify-between relative z-10 py-4 h-full w-[60%] ">
    <p className="text-lg text-orange-100 relative  z-10">
      We are a creative agency committed to delivering innovative solutions,
      from concept to execution, ensuring your brand's success and growth.
    </p>
    <div className="w-7 h-7 bg-orange-600 mt-4 rounded relative z-10" />
  </div>

  {/* Image */}
  <div className="flex-1 h-full overflow-hidden rounded-lg relative z-10 transition-transform duration-300 group-hover:scale-105">
    <img
      src={hwa1}
      alt="Mission"
      className="rounded-lg w-full h-full object-cover "
    />
  </div>

  {/* Optional extra glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-600/10 blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-sweep z-0" />
</div>

      </div>

      {/* Vision */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-end gap-6">
          <h4 className="uppercase text-3xl font-extralight leading-9 text-right">Our <br /> Vision</h4>
          <img src={plus} alt="plus" className="w-16 h-16" />
        </div>
        <div className="relative  h-[300px] flex flex-col-reverse lg:flex-row items-center gap-6  p-3 pr-6 rounded-xl overflow-hidden group border border-neutral-700 custom-glass-hover">
          {/* Image */}
          <div className="flex-1 h-full overflow-hidden rounded-lg relative z-10 transition-transform duration-300 group-hover:scale-105">
            <img
              src={hwa2}
              alt="Vision"
              className="rounded-lg w-full h-full object-cover "
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-between relative z-10 py-4 h-full w-[60%]">
            <p className="text-lg text-orange-100">
              We specialize in transforming your vision into reality, reativity with
              strategy to produce results. Our team works to elevate your brand.
            </p>
            <div className="w-7 h-7 border-2 border-orange-500 mt-4 rounded" />
          </div>

          {/* Glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-600/10 blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-sweep z-0" />
        </div>
      </div>
    </div>
  </div>

 
</section>

  );
};

export default WhoWeAre;