// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white">
      <p>Follow us on social media for frequent updates</p>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/social-icons/instagram.png" alt="Instagram" className="h-8" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/social-icons/linkedin.png" alt="LinkedIn" className="h-8" />
        </a>
      </div>
      <div className="mt-4">
        <a href="/contact" className="text-blue-400">Contact us for more details</a>
      </div>
    </footer>
  );
};

export default Footer;
