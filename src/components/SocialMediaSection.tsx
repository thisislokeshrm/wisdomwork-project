// src/components/SocialMediaSection.tsx
import React from 'react';

const SocialMediaSection = () => {
  return (
    <section className="bg-black text-white py-16 px-8 text-center">
      <h2 className="text-2xl font-semibold mb-6">Follow us on social media</h2>
      <div className="flex justify-center space-x-8 mb-8">
        <a href="https://instagram.com" className="text-2xl">Instagram</a>
        <a href="https://linkedin.com" className="text-2xl">LinkedIn</a>
      </div>
      <a href="#contact" className="bg-blue-500 text-white py-2 px-6 rounded-full">Contact Us</a>
    </section>
  );
};

export default SocialMediaSection;
