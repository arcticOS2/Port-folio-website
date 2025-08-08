import React from "react";
import hero from "@/assets/hero-gotham.jpg";
import profile from "@/assets/profile-arpan.jpg";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative isolate">
      <div
        className="min-h-[78vh] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(180deg, hsl(var(--background)/0.15), hsl(var(--background)/0.75)), url(${hero})` }}
      >
        {/* Bat-signal glow */}
        <div className="pointer-events-none absolute right-16 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.25),transparent_60%)] blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-20 md:py-28">
          <div className="animate-enter">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Arpan Samanta – Data Science Portfolio
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Turning Data Into Actionable Insights.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="gold" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={profile}
              alt="Professional silhouette of Arpan with Gotham-inspired bat signal glow"
              loading="lazy"
              className="h-56 w-56 md:h-72 md:w-72 rounded-full ring-2 ring-accent/40 shadow-xl object-cover animate-scale-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
