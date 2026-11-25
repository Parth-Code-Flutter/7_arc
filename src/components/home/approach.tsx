"use client";
import { useState, type CSSProperties } from "react";
import { TechnologyIcon } from "./technology-icon";

export function Approach() {
  const [paused, setPaused] = useState(false);
  return <section className="tech-universe" aria-label="Our connected technology ecosystem">
    <div className="universe-copy"><p className="eyebrow">Many technologies. One engineering partner.</p><h2>Your vision.<br />Our <span>universe<br />of expertise.</span></h2><p>From the interface people touch to the intelligence behind it. We bring every layer together to build your complete product.</p><div className="universe-legend"><span>Web & platforms</span><span>Mobile experiences</span><span>AI & cloud systems</span></div><a href="#services">Explore our capabilities</a></div>
    <div className={`universe-system ${paused ? "is-paused" : ""}`}>
      <div className="universe-map" aria-hidden="true">
        <div className="universe-track track-one" /><div className="universe-track track-two" /><div className="universe-track track-three" />
        <div className="universe-hub"><strong>7<span>/</span></strong><span>CONNECTED BY CRAFT</span></div>
        {[{names:["React","Node.js","Flutter"],ring:"inner"},{names:["Next.js","Python","AI / ML","Cloud"],ring:"outer"}].map(({names,ring})=>names.map((name,i)=><div key={name} className={`universe-orbiter ${ring}`} style={{"--angle":`${i*360/names.length}deg`} as CSSProperties}><div className="universe-token"><TechnologyIcon name={name}/><span>{name}</span></div></div>))}
      </div>
      <div className="universe-bottom"><span>ONE CONNECTED ECOSYSTEM</span><button onClick={()=>setPaused(value=>!value)} aria-pressed={paused}>{paused ? "Resume motion" : "Pause motion"}</button></div>
    </div>
  </section>;
}
