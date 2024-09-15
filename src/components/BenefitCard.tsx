// src/components/BenefitCard.tsx
import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default BenefitCard;
