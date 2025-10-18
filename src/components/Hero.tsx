import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(215_75%_35%/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(175_65%_45%/0.05),transparent_50%)]" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <TrendingUp className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                Smart MF Monitoring
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Never Miss a{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Market Move
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Set intelligent alerts for NAV changes, ratios, and performance
              metrics across Indian Mutual Funds. Stay informed, act fast,
              invest smart.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/alerts">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg group"
                >
                  Start Monitoring Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">MFs Tracked</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
            <img
              src={heroIllustration}
              alt="TripWire mutual fund monitoring dashboard"
              className="relative rounded-2xl shadow-elevated w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
