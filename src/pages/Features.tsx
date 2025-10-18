import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Features />
      </div>
      <CTA 
        title="Experience the Power of Smart Alerts"
        description="Start monitoring your mutual funds with intelligent alerts that work for you 24/7."
      />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
