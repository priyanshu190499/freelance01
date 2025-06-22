import { motion } from "framer-motion";
import service01 from "../../assets/service01.jpg"
import service02 from "../../assets/service02.jpg"
import service03 from "../../assets/service03.jpg"
import service04 from "../../assets/service04.jpg"
const services = [
  "BRANDING DESIGN",
  "WEEDESIGN",
  "COUNTRY",
  "MOTION DESIGN",
  "MARKETING"
];

const Services = () => {
  return (
    <section className="bg-black text-white py-16 ">
  <div className=" space-y-10">
    
  <h2 className="text-[100px] w-full font-extrabold uppercase  inline-block  shadow-[0_4px_3px_-3px_#dc5f00] ">
  Services
</h2>


    <div >
      {[
        { number: '01', title: 'Branding Design', s_img: service01 },
        { number: '02', title: 'Web Design', s_img: service02 },
        { number: '03', title: 'Motion Design', s_img: service03 },
        { number: '04', title: 'Marketing', s_img: service04 },
      ].map((service, index) => (
        <div
          key={index}
         
          className="flex flex-col lg:flex-row justify-between items-center py-8 gap-8 group transition-all duration-300 ease-in-out shadow-[0_4px_3px_-5px_white]"
        >
          {/* Left Text */}
          <div className="flex items-center gap-6 w-full lg:w-1/2">
            <div className="text-sm font-semibold bg-[#191919] w-10 h-10 flex items-center border border-[#292929] justify-center rounded-sm text-white group-hover:bg-[#dc5f00] transition">
              {service.number}
            </div>
            <h3 className="text-3xl md:text-5xl uppercase font-light tracking-wide">
              {service.title}
            </h3>
          </div>

          {/* Right Image Placeholder */}
         <div className="relative overflow-hidden rounded-lg w-full lg:w-1/2 transition-transform duration-500 ease-in-out group-hover:scale-[1.05]">
  <div className="w-full h-40 bg-gray-800 flex items-center justify-center rounded-lg">
    <img
      src={service.s_img}
      alt={service.title}
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;