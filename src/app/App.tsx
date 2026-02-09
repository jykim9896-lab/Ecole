import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { DigitalArtSection } from "./components/DigitalArtSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ProgramSection } from "./components/ProgramSection";
import { ReviewSection } from "./components/ReviewSection";
import { PartnerSection } from "./components/PartnerSection";
import { Footer } from "./components/Footer";
import { PrivacyPolicyKo } from "./components/PrivacyPolicyKo";
import { PrivacyPolicyEn } from "./components/PrivacyPolicyEn";
import { TermsOfServiceKo } from "./components/TermsOfServiceKo";
import { TermsOfServiceEn } from "./components/TermsOfServiceEn";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy-ko' | 'privacy-en' | 'terms-ko' | 'terms-en'>('home');

  useEffect(() => {
    const checkPath = () => {
      const path = window.location.pathname;
      if (path === '/privacy-policy/' || path === '/privacy-policy') {
        setCurrentPage('privacy-ko');
        window.scrollTo(0, 0);
      } else if (path === '/privacy-policy-en/' || path === '/privacy-policy-en') {
        setCurrentPage('privacy-en');
        window.scrollTo(0, 0);
      } else if (path === '/terms-of-service/' || path === '/terms-of-service') {
        setCurrentPage('terms-ko');
        window.scrollTo(0, 0);
      } else if (path === '/terms-of-service-en/' || path === '/terms-of-service-en') {
        setCurrentPage('terms-en');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    checkPath();
    window.addEventListener('popstate', checkPath);
    return () => window.removeEventListener('popstate', checkPath);
  }, []);

  const navigateToPrivacyKo = () => {
    window.history.pushState({}, '', '/privacy-policy/');
    setCurrentPage('privacy-ko');
    window.scrollTo(0, 0);
  };

  const navigateToPrivacyEn = () => {
    window.history.pushState({}, '', '/privacy-policy-en/');
    setCurrentPage('privacy-en');
    window.scrollTo(0, 0);
  };

  const navigateToTermsKo = () => {
    window.history.pushState({}, '', '/terms-of-service/');
    setCurrentPage('terms-ko');
    window.scrollTo(0, 0);
  };

  const navigateToTermsEn = () => {
    window.history.pushState({}, '', '/terms-of-service-en/');
    setCurrentPage('terms-en');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'privacy-ko') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigateHome={navigateToHome} />
        <div className="pt-24">
          <PrivacyPolicyKo onNavigateHome={navigateToHome} onNavigateToEn={navigateToPrivacyEn} />
        </div>
        <Footer onNavigateToPrivacy={navigateToPrivacyKo} onNavigateToPrivacyEn={navigateToPrivacyEn} onNavigateToTerms={navigateToTermsKo} />
      </div>
    );
  }

  if (currentPage === 'privacy-en') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigateHome={navigateToHome} />
        <div className="pt-24">
          <PrivacyPolicyEn onNavigateHome={navigateToHome} onNavigateToKo={navigateToPrivacyKo} />
        </div>
        <Footer onNavigateToPrivacy={navigateToPrivacyKo} onNavigateToPrivacyEn={navigateToPrivacyEn} onNavigateToTerms={navigateToTermsKo} />
      </div>
    );
  }

  if (currentPage === 'terms-ko') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigateHome={navigateToHome} />
        <div className="pt-24">
          <TermsOfServiceKo onNavigateHome={navigateToHome} onNavigateToEn={navigateToTermsEn} />
        </div>
        <Footer onNavigateToPrivacy={navigateToPrivacyKo} onNavigateToPrivacyEn={navigateToPrivacyEn} onNavigateToTerms={navigateToTermsKo} />
      </div>
    );
  }

  if (currentPage === 'terms-en') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigateHome={navigateToHome} />
        <div className="pt-24">
          <TermsOfServiceEn onNavigateHome={navigateToHome} onNavigateToKo={navigateToTermsKo} />
        </div>
        <Footer onNavigateToPrivacy={navigateToPrivacyKo} onNavigateToPrivacyEn={navigateToPrivacyEn} onNavigateToTerms={navigateToTermsKo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateHome={navigateToHome} />
      <HeroSection />
      <DigitalArtSection />
      <FeaturesSection />
      <ProgramSection />
      <ReviewSection />
      <PartnerSection />
      <Footer onNavigateToPrivacy={navigateToPrivacyKo} onNavigateToPrivacyEn={navigateToPrivacyEn} onNavigateToTerms={navigateToTermsKo} />
    </div>
  );
}