import React from "react";
import { Button } from "@/components/ui/button";
import BatIcon from "@/components/BatIcon";
import DownloadZipButton from "@/components/DownloadZipButton";
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between py-3" aria-label="Main Navigation">
        <a href="#home" className="flex items-center gap-2" aria-label="Go to home">
          <BatIcon size={28} className="text-accent" />
          <span className="font-display text-lg tracking-wide">Arpan Samanta</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <DownloadZipButton />
          <Button asChild variant="gold">
            <a href="#portfolio">View My Work</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
