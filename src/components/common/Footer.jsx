// src/components/common/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">DARKYN</div>
          <div className="text-gray-400">
            © {new Date().getFullYear()} Darkyn Creative. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;