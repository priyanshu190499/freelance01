import { motion } from "framer-motion";

const AimSection = () => {
  return (
    <section className="bg-black text-white py-16">
  <div className=" mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" >
    
    {/* Box 1 - Orange */}
    <div className="bg-[#dc5f00] rounded-md p-6 relative h-80 flex flex-col justify-end">
      <div className="absolute top-4 left-4 w-5 h-5 bg-black rounded-full"></div>
      <div className="text-sm font-light">Numbers And Facts</div>
    </div>

    {/* Box 2 - Dark Grey */}
    <div className="bg-[#3c3c3c] rounded-md p-6 relative h-80 flex flex-col justify-end">
      <div className="absolute top-4 left-4 w-5 h-5 bg-black rounded-full"></div>
      <div>
        <div className="text-4xl font-bold">15+</div>
        <div className="text-sm font-light mt-1">Numbers And Facts</div>
      </div>
    </div>

    {/* Box 3 - Black */}
    <div className="bg-[#1a1a1a] rounded-md p-6 relative h-80 flex flex-col justify-end">
      <div className="absolute top-4 left-4 w-5 h-5 bg-[#dc5f00] rounded-full"></div>
      <div>
        <div className="text-4xl font-bold">82+</div>
        <div className="text-sm font-light mt-1">Completed Projects</div>
      </div>
    </div>

    {/* Box 4 - Light Grey */}
    <div className="bg-[#999999] rounded-md p-6 relative h-80 flex flex-col justify-end">
      <div className="absolute top-4 left-4 w-5 h-5 bg-[#cfcfcf] rounded-full"></div>
      <div>
        <div className="text-4xl font-bold">12+</div>
        <div className="text-sm font-light mt-1">Awards Won</div>
      </div>
    </div>
    
  </div>
</section>

  );
};

export default AimSection;