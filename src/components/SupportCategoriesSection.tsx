import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS


const SupportCategoriesSection = () => {
  return (
    <section className="relative bg-black py-32 px-8 overflow-hidden">
      {/* Ellipses Background */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300 rounded-full blur-xl opacity-90"></div>
      <div className="absolute top-32 right-20 w-96 h-96 bg-orange-300 rounded-full blur-xl opacity-90"></div>
      <div className="absolute bottom-10 left-36 w-72 h-72 bg-purple-400 rounded-full blur-xl opacity-90"></div>
      <div className="absolute bottom-32 right-10 w-64 h-64 bg-pink-300 rounded-full blur-xl opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow-200 rounded-full blur-xl opacity-90"></div>

      {/* Spiral-bound Book Cards */}
      <div className="flex justify-around text-center space-x-4 relative z-10 mb-20">
        {/* For Students Spiral-bound Card */}
        <a href="#students" className="spiral-book-card">
          <div className="spiral-book-cover bg-blue-300 text-white w-56 h-72 rounded-md shadow-lg relative">
            <div className="spiral-binding absolute left-0 top-1/23 space-y-3">
              {[...Array(10)].map((_, idx) => (
                <div
                  key={idx}
                  className="w-4 h-4 bg-black rounded-full mx-auto"
                />
              ))}
            </div>
            <h2 className="spiral-book-title mt-0 font-bold text-lg">For Students</h2>
          </div>
        </a>

        {/* For Teachers Spiral-bound Card */}
        <a href="#teachers" className="spiral-book-card">
          <div className="spiral-book-cover bg-blue-300 text-white w-56 h-72 rounded-md shadow-lg relative">
            <div className="spiral-binding absolute left-0 top-1/23 space-y-3">
              {[...Array(10)].map((_, idx) => (
                <div
                  key={idx}
                  className="w-4 h-4 bg-black rounded-full mx-auto"
                />
              ))}
            </div>
            <h2 className="spiral-book-title mt-0 font-bold text-lg">For Teachers</h2>
          </div>
        </a>
      </div>

      {/* Updated Glassmorphic Social Media Card */}
      <div className="relative z-20">
        <div className="glass-card mx-auto w-full py-12 px-6 rounded-xl backdrop-blur-lg bg-white bg-opacity-10 shadow-lg border border-white border-opacity-30">
          <h2 className="text-white text-4xl font-bold mb-2 text-center">Follow us on social media</h2>
          <p className="text-white text-center mb-10 text-lg">Catch us on our social media for frequent updates</p>

          <div className="flex justify-center space-x-8 mb-4">
            <a href="https://instagram.com" className="text-white text-4xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-white text-4xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <p className="text-white text-center mb-4">For more details:</p>
          <div className="flex justify-center">
            <a href="#contact" className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition-all">
              Contact us!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportCategoriesSection;
