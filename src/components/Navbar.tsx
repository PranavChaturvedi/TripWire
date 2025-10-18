import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TripWire
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/features"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              to="/alerts"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Alerts
            </Link>
            <Link
              to="/pricing"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
