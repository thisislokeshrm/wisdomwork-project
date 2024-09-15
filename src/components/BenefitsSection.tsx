// src/components/BenefitsSection.tsx
import React from 'react';

const BenefitsSection = () => {
  return (
    <section 
      className="bg-black text-white py-20 px-8 bg-cover bg-center" 
      style={{ backgroundImage: "url('/assets/images/background.svg')" }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Benefits with WisdomWork</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
        <div className="bg-[#ffb87a] p-10 rounded-md flex flex-col justify-between text-center h-full">
          <h3 className="text-3xl font-semibold">Affordable</h3>
          <p className="mt-4 text-lg">We provide quality education at the most affordable price.</p>
        </div>
        <div className="bg-[#ffb87a] p-10 rounded-md flex flex-col justify-between text-center h-full">
          <h3 className="text-3xl font-semibold">Collaborate</h3>
          <p className="mt-4 text-lg">We collaborate with colleges to make things convenient for students.</p>
        </div>
        <div className="bg-[#ffb87a] p-10 rounded-md flex flex-col justify-between text-center h-full">
          <h3 className="text-3xl font-semibold">Jobs & Higher Studies</h3>
          <p className="mt-4 text-lg">We provide a roadmap for job opportunities and top colleges for higher studies.</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
