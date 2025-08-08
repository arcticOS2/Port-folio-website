import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto py-20">
      <header>
        <h2 className="font-display text-3xl md:text-4xl font-bold">About</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          I’m a 2nd-year M.Sc. Statistics student at IIT Kanpur passionate about ML, Deep Learning, and NLP. I love exploring the intersection of data and cinema to deliver impactful insights.
        </p>
      </header>

      <article className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-semibold tracking-wide text-sm text-muted-foreground uppercase">Education</h3>
          <ol className="mt-4 space-y-4">
            <li className="rounded-md border border-border p-4 bg-card/50">
              <div className="flex items-center justify-between">
                <span className="font-medium">M.Sc. Statistics – IIT Kanpur</span>
                <span className="text-sm text-muted-foreground">2024–Present</span>
              </div>
            </li>
            <li className="rounded-md border border-border p-4 bg-card/50">
              <div className="flex items-center justify-between">
                <span className="font-medium">B.Sc. (Hons.) Statistics – St. Xavier’s College, Kolkata</span>
                <span className="text-sm text-muted-foreground">2023</span>
              </div>
            </li>
            <li className="rounded-md border border-border p-4 bg-card/50">
              <div className="flex items-center justify-between">
                <span className="font-medium">12th – Ramakrishna Mission Vidyapeeth, Purulia</span>
                <span className="text-sm text-muted-foreground">2020</span>
              </div>
            </li>
            <li className="rounded-md border border-border p-4 bg-card/50">
              <div className="flex items-center justify-between">
                <span className="font-medium">10th – Marokhana High School</span>
                <span className="text-sm text-muted-foreground">2018</span>
              </div>
            </li>
          </ol>
        </div>
        <div>
          <h3 className="font-semibold tracking-wide text-sm text-muted-foreground uppercase">Achievements</h3>
          <ul className="mt-4 space-y-3 list-disc list-inside text-sm md:text-base">
            <li>Top 1% in multiple scholastic assessments</li>
            <li>IIT JAM AIR 30</li>
          </ul>

          <p className="mt-6 text-muted-foreground">
            Skilled in R, Python, SQL, C, LaTeX, and HTML; experienced in data analysis, ML model building, dashboards, and deep learning.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
