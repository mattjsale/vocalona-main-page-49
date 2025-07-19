
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyVocalona from "@/components/WhyVocalona";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyVocalona />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
