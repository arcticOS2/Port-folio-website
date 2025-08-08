import React from "react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  summary: string;
  metric: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Cinema Ticket Sales Prediction",
    summary: "Regression models to forecast ticket sales with robust feature engineering.",
    metric: "R² = 0.87",
    link: "https://github.com/arcticOS2",
  },
  {
    title: "Amazon Stock Price Forecasting",
    summary: "Time-series modeling with ARIMA/ARIMAX and external regressors.",
    metric: "MAE ↓, Strong residual diagnostics",
    link: "https://github.com/arcticOS2",
  },
  {
    title: "Google Play Store Apps Analysis",
    summary: "Analyzed 10k+ apps with an R Shiny dashboard; improved UX by 60%.",
    metric: "Dashboard: R Shiny",
    link: "https://github.com/arcticOS2",
  },
  {
    title: "Movie Verdict Detector",
    summary: "Built a classifier; tuned to 92% accuracy with dashboard in Power BI.",
    metric: "Accuracy = 92%",
    link: "https://github.com/arcticOS2",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="container mx-auto py-20">
      <header className="mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Portfolio</h2>
        <p className="mt-2 text-muted-foreground">Interactive cards with hover glow. Visit GitHub for repositories.</p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-xl border border-border bg-card/50 p-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_hsl(var(--accent)/0.18)]">
            <header className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold leading-tight">{p.title}</h3>
              <span className="rounded-md bg-accent/15 px-2 py-1 text-xs font-medium text-accent">{p.metric}</span>
            </header>
            <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
            <div className="mt-5">
              <Button asChild variant="gold">
                <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title} on GitHub`}>
                  View on GitHub
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
