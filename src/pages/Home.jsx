import Hero from "../components/homepage/Hero.jsx";
import AimSection from "../components/homepage/AimSection.jsx";
import Services from "../components/homepage/Services.jsx";
import WhoWeAre from "../components/homepage/WhoWeAre.jsx";
import Work from "../components/homepage/Work.jsx"
import Testimonials from "../components/homepage/Testimonials.jsx";
import Insights from "../components/homepage/Insights.jsx";
import "./Home.css"
const Home = () => {
  return (
    <div >
      <Hero />
      <AimSection />
      <Services />
      <WhoWeAre />
      <Work/>
      <Testimonials />
      <Insights />
    </div>
  );
};

export default Home;