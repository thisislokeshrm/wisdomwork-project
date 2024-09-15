// src/app/page.tsx
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import SupportCategoriesSection from '../components/SupportCategoriesSection';
import SocialMediaSection from '../components/SocialMediaSection';
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
