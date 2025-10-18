import Navbar from "@/components/Navbar";
import AlertDashboard from "@/components/AlertDashboard";
import Footer from "@/components/Footer";

const AlertsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <AlertDashboard />
      </div>
      <Footer />
    </div>
  );
};

export default AlertsPage;
