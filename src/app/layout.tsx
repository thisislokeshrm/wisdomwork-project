// src/app/layout.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import './globals.css'; // Ensure global CSS is included

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>WisdomWork - E-learning Platform</title>
        <meta name="description" content="Experience the power of e-learning with interactive courses and live classes." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
