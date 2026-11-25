"use client";

import { useState } from "react";
import { TechnologyIcon } from "./technology-icon";
import { Approach } from "./approach";

const stacks = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS"],
  Backend: ["Node.js", "REST APIs", "Python", "Authentication", "Integrations"],
  Mobile: ["Flutter", "Dart", "iOS", "Android", "Cross-platform"],
  "AI / ML": ["Machine learning", "LLMs", "AI assistants", "Automation", "Intelligent search"],
  "Cloud & data": ["Cloud deployment", "Databases", "CI/CD", "Monitoring", "Data pipelines"],
};
type Category = keyof typeof stacks;

export function Hero() {
  const [category, setCategory] = useState<Category>("Frontend");
  return <>
    <section id="top" className="partner-hero">
      <div className="entry-grid">
        <div className="entry-copy"><p className="partner-eyebrow"><span /> Your idea. Our next obsession.</p>
          <h1>Think bigger.<br />We’ll <span>build it.</span></h1>
          <p className="partner-description">Your engineering partner for ambitious ideas. We design and build web products, Flutter apps, and AI systems that move businesses forward.</p>
          <div className="partner-actions"><a href="#contact" className="partner-primary">Let’s build something</a><a href="#services" className="partner-secondary">Explore our services</a></div>
          <div className="entry-footnote"><span>Full-stack engineering</span><i /><span>Mobile apps</span><i /><span>AI / ML</span></div>
        </div>
        <div className="entry-visual" aria-label="Abstract orbital sculpture representing connected engineering">
          <svg className="hero-sculpture" viewBox="0 0 600 600" fill="none" aria-hidden="true"><defs><linearGradient id="arc-metal" x1="100" y1="100" x2="500" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="var(--metal-light)"/><stop offset=".3" stopColor="var(--accent)"/><stop offset=".65" stopColor="var(--metal-dark)"/><stop offset="1" stopColor="var(--metal-mid)"/></linearGradient></defs><circle cx="300" cy="300" r="245" stroke="var(--line)" strokeDasharray="2 10"/><g className="sculpture-turn"><ellipse cx="300" cy="300" rx="205" ry="100" transform="rotate(-35 300 300)" stroke="url(#arc-metal)" strokeWidth="34"/><ellipse cx="300" cy="300" rx="205" ry="100" transform="rotate(55 300 300)" stroke="url(#arc-metal)" strokeWidth="22"/></g><circle cx="300" cy="300" r="58" fill="var(--canvas)" stroke="var(--line)"/><text x="300" y="319" textAnchor="middle" fontFamily="sans-serif" fontSize="58" fontWeight="600" fill="var(--ink)">7/</text><circle cx="116" cy="138" r="5" fill="var(--accent)"/><circle cx="503" cy="437" r="5" fill="var(--accent)"/></svg>
          <div className="entry-orbit orbit-a" aria-hidden /><div className="entry-orbit orbit-b" aria-hidden />
          <span className="entry-coordinate">7ARC / BUILT WITH INTENT</span>
          <span className="hero-sculpture-label">DESIGN × CODE × INTELLIGENCE</span>
        </div>
      </div>
      <Approach />
      {/* Previous diagram retained temporarily below as hidden markup. */}
      <div className="engineering-showcase" hidden>
        <div className="showcase-note"><span className="eyebrow">The 7ARC approach</span><strong>Different disciplines.<br />One working system.</strong><p>Great products happen when design, code, and intelligence work together.</p><span className="showcase-caption">Concept → Product → Possibility</span></div>
        <div className="arc-engine" aria-hidden="true">
          <svg className="engine-diagram" viewBox="0 0 400 360" fill="none">
            <circle cx="200" cy="180" r="126" stroke="var(--line)" strokeDasharray="3 8" />
            <ellipse cx="200" cy="180" rx="135" ry="60" transform="rotate(-35 200 180)" stroke="var(--accent)" strokeWidth="2" />
            <ellipse cx="200" cy="180" rx="135" ry="60" transform="rotate(35 200 180)" stroke="var(--metal-mid)" strokeWidth="2" />
            <circle cx="200" cy="180" r="63" fill="var(--canvas-soft)" stroke="var(--line)" />
            <text x="200" y="196" textAnchor="middle" fill="var(--ink)" fontSize="48" fontWeight="650" fontFamily="sans-serif">7/</text>
            <circle cx="89" cy="113" r="6" fill="var(--accent)" />
            <circle cx="311" cy="113" r="6" fill="var(--accent)" />
            <circle cx="200" cy="306" r="6" fill="var(--accent)" />
          </svg>
          <span className="engine-label label-design">Design</span><span className="engine-label label-code">Engineering</span><span className="engine-label label-ai">Intelligence</span>
        </div>
        <div className="showcase-spec"><span>CONNECTED BY CRAFT</span><div><b>01</b> Think clearly</div><div><b>02</b> Build thoughtfully</div><div><b>03</b> Keep improving</div></div>
      </div>
      <div className="partner-principles"><div><strong>One connected team</strong><span>Design, development & delivery</span></div><div><strong>Built around you</strong><span>From first release to the next stage</span></div><div><strong>Web. Mobile. AI.</strong><span>The right tools for the real problem</span></div></div>
      <div className="hero-stack-ribbon" aria-label="Core technologies">{["React", "Node.js", "Flutter", "Next.js", "Python", "AI / ML", "Cloud"].map(name => <span key={name}><TechnologyIcon name={name} />{name}</span>)}</div>
    </section>
    <section className="technology-section" aria-labelledby="technology-title"><div className="technology-heading"><p className="eyebrow">The right tools. Thoughtfully applied.</p><h2 id="technology-title">A broad stack.<br /><span>A focused approach.</span></h2><p>We choose technology around your product, your users, and where you want to go.</p><div className="technology-heading-note"><span>7/</span><p>Connected expertise.<br /><strong>From interface to infrastructure.</strong></p></div></div><div className="technology-browser"><div className="technology-tabs" role="group" aria-label="Technology categories">{(Object.keys(stacks) as Category[]).map(item=><button key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div><div className="technology-items" aria-live="polite">{stacks[category].map(item=><div key={item}><span className="technology-symbol"><TechnologyIcon name={item} /></span><strong>{item}</strong><span className="technology-card-caption">{category}</span></div>)}</div><div className="technology-browser-footer"><span>Built with purpose.</span><span>{stacks[category].length} connected capabilities</span></div></div></section>
  </>;
}
