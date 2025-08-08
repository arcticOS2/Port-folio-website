import React from "react";
import BatIcon from "@/components/BatIcon";

const SkillItem: React.FC<{ label: string }>= ({ label }) => (
  <div className="group flex items-center gap-3 rounded-md border border-border bg-card/40 p-4 hover-scale">
    <div className="rounded-full p-2 text-accent bg-accent/10">
      <BatIcon size={20} />
    </div>
    <span className="text-sm md:text-base">{label}</span>
  </div>
);

const Skills: React.FC = () => {
  const languages = ["R", "Python", "SQL", "C", "LaTeX", "HTML"];
  const tools = ["TensorFlow", "Power BI", "Scikit-Learn", "BeautifulSoup", "Git", "GitHub"];
  const interests = ["Machine Learning", "NLP", "Deep Learning"];

  return (
    <section id="skills" className="container mx-auto py-20">
      <header>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
        <p className="mt-2 text-muted-foreground">Batman-styled batarangs signal each core skill.</p>
      </header>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold tracking-wide text-sm text-muted-foreground uppercase">Programming</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {languages.map((s) => (<SkillItem key={s} label={s} />))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold tracking-wide text-sm text-muted-foreground uppercase">Tools & Libraries</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {tools.map((s) => (<SkillItem key={s} label={s} />))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold tracking-wide text-sm text-muted-foreground uppercase">Interests</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {interests.map((s) => (<SkillItem key={s} label={s} />))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
