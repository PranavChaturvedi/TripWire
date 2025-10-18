import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Pricing />
      </div>
      <CTA 
        title="Start Your Journey to Smarter Investing"
        description="Choose your plan and get instant access to real-time mutual fund alerts."
      />
      <Footer />
    </div>
  );
};

export default PricingPage;
