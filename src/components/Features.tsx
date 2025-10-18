import {
  Bell,
  TrendingUp,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bell,
    title: "Real-Time NAV Alerts",
    description:
      "Get instant notifications when NAV crosses your target thresholds. Never miss critical price movements.",
  },
  {
    icon: TrendingUp,
    title: "Ratio Monitoring",
    description:
      "Track expense ratios, Sharpe ratios, and other key metrics. Make data-driven investment decisions.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Receive alerts within seconds of market changes. Stay ahead with real-time data processing.",
  },
  {
    icon: Shield,
    title: "AMFI Verified Data",
    description:
      "All data sourced from official AMFI sources. Accurate, reliable, and trustworthy information.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Comprehensive charts and insights. Visualize trends and make informed portfolio decisions.",
  },
  {
    icon: Smartphone,
    title: "Multi-Platform",
    description:
      "Web, mobile, and email alerts. Monitor your investments wherever you are.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Monitor Mutual Funds
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed for serious investors who want to stay on
            top of their portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
