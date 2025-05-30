
import { HeroSection } from '@/components/HeroSection';
import { FastDeliverySection } from '@/components/FastDeliverySection';
import { CompleteServiceSection } from '@/components/CompleteServiceSection';
import { SmartPickupSection } from '@/components/SmartPickupSection';
import { FreeStorageSection } from '@/components/FreeStorageSection';
import { FreeReturnsSection } from '@/components/FreeReturnsSection';
import { FastPaymentSection } from '@/components/FastPaymentSection';
import { VipOfferSection } from '@/components/VipOfferSection';
import { ClosingSection } from '@/components/ClosingSection';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Reveal animation on scroll
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements(); // Check on initial load

    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <FastDeliverySection />
      <CompleteServiceSection />
      <SmartPickupSection />
      <FreeStorageSection />
      <FreeReturnsSection />
      <FastPaymentSection />
      <VipOfferSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
