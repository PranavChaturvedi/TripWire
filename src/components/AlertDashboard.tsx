import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, TrendingUp, TrendingDown, Plus } from "lucide-react";

const mockAlerts = [
  {
    id: 1,
    fundName: "HDFC Top 100 Fund",
    type: "NAV Alert",
    condition: "NAV > ₹850",
    currentValue: "₹847.50",
    status: "active",
    trend: "up",
  },
  {
    id: 2,
    fundName: "ICICI Prudential Bluechip Fund",
    type: "Expense Ratio",
    condition: "Ratio < 1.5%",
    currentValue: "1.52%",
    status: "triggered",
    trend: "down",
  },
  {
    id: 3,
    fundName: "SBI Small Cap Fund",
    type: "NAV Alert",
    condition: "NAV < ₹120",
    currentValue: "₹125.80",
    status: "active",
    trend: "up",
  },
  {
    id: 4,
    fundName: "Axis Midcap Fund",
    type: "Returns Alert",
    condition: "1Y Returns > 25%",
    currentValue: "23.8%",
    status: "active",
    trend: "up",
  },
];

const AlertDashboard = () => {
  return (
    <section id="alerts" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Your Active Alerts</h2>
            <p className="text-muted-foreground">
              Monitor and manage all your mutual fund alerts in one place
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4 mr-2" />
            Create Alert
          </Button>
        </div>

        <div className="grid gap-4">
          {mockAlerts.map((alert) => (
            <Card
              key={alert.id}
              className={`p-6 hover:shadow-card transition-shadow ${
                alert.status === "triggered" ? "bg-muted" : "bg-card"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      alert.status === "triggered"
                        ? "bg-accent/10"
                        : "bg-primary/10"
                    }`}
                  >
                    <Bell
                      className={`w-5 h-5 ${
                        alert.status === "triggered"
                          ? "text-accent"
                          : "text-primary"
                      }`}
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-semibold text-lg">
                        {alert.fundName}
                      </h3>
                      <Badge
                        variant={
                          alert.status === "triggered"
                            ? "destructive"
                            : "default"
                        }
                      >
                        {alert.status === "triggered" ? "Triggered" : "Active"}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">
                        {alert.type}
                      </span>
                      <span className="text-foreground font-medium">
                        {alert.condition}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">
                      Current Value
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">
                        {alert.currentValue}
                      </span>
                      {alert.trend === "up" ? (
                        <TrendingUp className="w-5 h-5 text-secondary" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlertDashboard;
