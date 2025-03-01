import ContactForm from "@/components/ContactForm";
import ExpertsSection from "@/components/ExpertSection";
import FAQSection from "@/components/Faqs";
import Footer from "@/components/Footer";
import GettingStarted from "@/components/GettingStarted";
import HeroSection from "@/components/HeroSection";
import MeditationSection from "@/components/MeditationSection";
import MentalHealthFeatures from "@/components/MentalHealthFeatures";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/Testimonials";
import TrustedByMillions from "@/components/TrustedByMillions";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedByMillions />
      <MeditationSection />
      <MentalHealthFeatures />
      <ExpertsSection />
      <TestimonialsSection />
      <ContactForm />
      <FAQSection />
      <GettingStarted />
      <Footer />
    </>
  );
}
