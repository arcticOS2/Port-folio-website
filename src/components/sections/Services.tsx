import React from "react";

const ServiceCard: React.FC<{ title: string; desc: string }>= ({ title, desc }) => (
  <div className="rounded-lg border border-border bg-card/50 p-6 hover:shadow-lg hover:shadow-[0_0_40px_hsl(var(--accent)/0.12)] transition-shadow">
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
  </div>
);

const Services: React.FC = () => {
  const items = [
    { title: "Data Analysis & Visualization", desc: "Exploratory analysis, hypothesis testing, and compelling visuals." },
    { title: "ML Model Development", desc: "End-to-end pipelines with rigorous evaluation and documentation." },
    { title: "Dashboard Creation", desc: "Interactive dashboards (Power BI, Shiny) for decision-making." },
    { title: "Deep Learning Solutions", desc: "CNNs, RNNs, and transformers for real-world tasks." },
  ];

  return (
    <section id="services" className="container mx-auto py-20">
      <header className="mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Services</h2>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((it) => (
          <ServiceCard key={it.title} title={it.title} desc={it.desc} />
        ))}
      </div>
    </section>
  );
};

export default Services;
