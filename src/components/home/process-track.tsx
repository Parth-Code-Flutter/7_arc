"use client";

import { useEffect, useRef, useState } from "react";

export function ProcessTrack({ steps }: { steps: readonly (readonly string[])[] }) {
  const section = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = section.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const measure = () => {
      const track = node.querySelector(".track");
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const start = window.innerHeight * 0.82;
      const end = Math.min(window.innerHeight * 0.42, start - 1) - rect.height * 0.15;
      const next = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, next)));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  let active = 0;
  steps.forEach((_, index) => {
    if (progress >= (index + 0.2) / steps.length) active = index;
  });

  return (
    <section className="studio" id="method" ref={section}>
      <div className="studio-head">
        <div>
          <p>Process</p>
          <p className="track-live" key={steps[active][0]}>
            {steps[active][0]}
          </p>
        </div>
        <h2>Four steps, then it is live.</h2>
      </div>
      <ol className="track" style={{ ["--draw" as string]: progress.toFixed(3) }}>
        <i className="track-draw" aria-hidden="true" />
        {steps.map(([title, text], index) => (
          <li key={title} className={progress >= (index + 0.2) / steps.length ? "is-on" : undefined}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
