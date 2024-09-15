// src/components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative py-80 px-8 text-center bg-white overflow-hidden" // White background and prevent overflow
    >
      <h1 className="text-5xl font-bold text-black mb-8">
        Experience the power of <span className="text-orange-500">e-learning</span> with <span className="text-indigo-600">WisdomWork</span>
      </h1>
      <p className="text-xl text-gray-500 mb-8">Our interactive courses and live classes make learning engaging and effective.</p>
      <div className="space-x-4 mb-16">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full">View Plan</button>
        <button className="bg-gray-300 text-black py-2 px-6 rounded-full">Schedule a Call</button>
      </div>
      {/* Ellipses */}
      <div className="absolute inset-0">
        {/* Ellipse 1 */}
        <div
          className="absolute"
          style={{
            width: '218px',
            height: '246px',
            borderRadius: '50%',
            backgroundColor: 'rgba(128, 196, 233, 0.20)',
            filter: 'blur(5px)',
            transform: 'rotate(-41deg)',
            top: '10%', // Adjust top position
            left: '10%', // Adjust left position
            transform: 'rotate(-41deg) translate(-50%, -50%)' // Rotate and center
          }}
        />
        {/* Ellipse 2 */}
        <div
          className="absolute"
          style={{
            width: '155.587px',
            height: '173.8px',
            borderRadius: '50%',
            backgroundColor: 'rgba(62, 3, 186, 0.20)',
            filter: 'blur(5px)',
            transform: 'rotate(-40deg)',
            top: '10%', // Adjust top position
            right: '10%', // Adjust right position
            transform: 'rotate(-40deg) translate(50%, -50%)' // Rotate and center
          }}
        />
        {/* Ellipse 3 */}
        <div
          className="absolute"
          style={{
            width: '399.189px',
            height: '312.058px',
            borderRadius: '50%',
            backgroundColor: 'rgba(128, 196, 233, 0.20)',
            filter: 'blur(5px)',
            transform: 'rotate(-131deg)',
            bottom: '10%', // Adjust bottom position
            left: '10%', // Adjust left position
            transform: 'rotate(-131deg) translate(-50%, 50%)' // Rotate and center
          }}
        />
        {/* Ellipse 4 */}
        <div
          className="absolute"
          style={{
            width: '400.47px',
            height: '639.209px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 127, 62, 0.20)',
            filter: 'blur(5px)',
            transform: 'rotate(-33deg)',
            bottom: '-10%', // Adjust bottom position
            right: '10%', // Adjust right position
            transform: 'rotate(-33deg) translate(50%, 50%)' // Rotate and center
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
