// src/app/page.tsx
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import SupportCategoriesSection from '../components/SupportCategoriesSection';
import RotatingTextScroll from '../components/RotatingTextScroll';



const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <RotatingTextScroll />
      <SupportCategoriesSection />
    </div>
  );
};

export default HomePage;
