import quote from "../../assets/quote.png";
import t1 from "../../assets/testimonials-photo1.png";
import t2 from "../../assets/testimonials-photo2.png";

const testimonials = [
  {
    name: "Mike Smith",
    img: t1,
    text: "Throughout our collaboration, Darkyn's dedication to exceptional results was evident. Our portfolio now exceeds expectations, thanks to their expertise.",
  },
  {
    name: "William Green",
    img: t2,
    text: "Throughout our collaboration, Darkyn's dedication to exceptional results was evident. Our portfolio now exceeds expectations, thanks to their expertise.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="space-y-12  mx-auto ">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] w-full font-bold uppercase relative inline-block shadow-[0_4px_3px_-3px_#dc5f00]">
  Testimonials
</h2>


        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-md p-6 bg-[#1a1a1a] border border-[#333] overflow-hidden group transition-all duration-300  hover:scale-103 hover:shadow-[0_0_4px_1px_#dc5f00]
"
            >
              {/* Top Header */}
              <div className="flex items-center gap-3 mb-6 ">
                <img src={quote} alt="quote" className="w-6 h-6 " />
                <h4 className="text-lg font-semibold text-white">{t.name}</h4>
              </div>

              {/* Divider */}
              <hr className="border-t border-[#444] mb-6" />

              {/* Image + Text */}
              <div className="flex items-start gap-4 z-2">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-36 h-36 object-cover rounded-md bg-gray-950"
                />
                <p className="text-lg text-white/90 leading-relaxed">
                  {t.text}
                </p>
              </div>

                   {/* Moving Glass Effect */}
 <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
  <div
    className="absolute top-[-80%] left-[-100%] rotate-[20deg] w-[200%] h-[200%]
      transition-all duration-700 ease-out
      group-hover:left-[-60%]"
    style={{
      background: `linear-gradient(
        to right,
        rgba(220, 95, 0, 0.2) 0%,
        rgba(220, 95, 0, 0.1) 30%,
        rgba(220, 95, 0, 0.2) 50%,
        rgba(220, 95, 0, 0.1) 70%,
        rgba(220, 95, 0, 0.1) 100%
      )`
    }}
  ></div>
</div>




              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
