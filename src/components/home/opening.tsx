"use client";

import { useRef, type ComponentType, type PointerEvent } from "react";
import { Atom, Cloud, Feather, Globe, Hexagon, Smartphone, Sparkles, Triangle } from "lucide-react";
import { site } from "@/config/site";

type MarkIcon = ComponentType<{ size?: number; strokeWidth?: number }>;

function PythonMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <circle cx="8" cy="8.2" r="5" fill="#ffd43b" />
      <circle cx="14.2" cy="13.8" r="5" fill="#e8f4ff" />
    </svg>
  );
}

const CX = 320;
const CY = 320;

function polar(radius: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  const round = (value: number) => Math.round(value * 100) / 100;
  return [round(CX + Math.cos(rad) * radius), round(CY + Math.sin(rad) * radius)] as const;
}

function arc(radius: number, start: number, sweep: number) {
  const [x1, y1] = polar(radius, start);
  const [x2, y2] = polar(radius, start + sweep);
  const large = sweep > 180 ? 1 : 0;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${radius} ${radius} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

const ticks = Array.from({ length: 72 }, (_, index) => {
  const major = index % 6 === 0;
  const [x1, y1] = polar(major ? 226 : 236, index * 5);
  const [x2, y2] = polar(250, index * 5);
  return { x1, y1, x2, y2, major };
});

function spot(deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  const round = (value: number) => Math.round(value * 100) / 100;
  return {
    left: `${round(50 + Math.cos(rad) * 50)}%`,
    top: `${round(50 + Math.sin(rad) * 50)}%`,
  };
}

const outerMarks: { label: string; deg: number; color: string; ink: string; Icon: MarkIcon }[] = [
  { label: "Web", deg: 8, color: "#3b82f6", ink: "#fff", Icon: Globe },
  { label: "Mobile", deg: 98, color: "#14b8a6", ink: "#042f2e", Icon: Smartphone },
  { label: "Cloud", deg: 188, color: "#38bdf8", ink: "#082f49", Icon: Cloud },
  { label: "AI", deg: 278, color: "#ff5c2a", ink: "#fff", Icon: Sparkles },
];

const innerMarks: { label: string; deg: number; color: string; ink: string; Icon: MarkIcon }[] = [
  { label: "React", deg: 20, color: "#61dafb", ink: "#082f49", Icon: Atom },
  { label: "Next", deg: 92, color: "#f4efe6", ink: "#111", Icon: Triangle },
  { label: "Node", deg: 164, color: "#68a063", ink: "#fff", Icon: Hexagon },
  { label: "Flutter", deg: 236, color: "#54c5f8", ink: "#082f49", Icon: Feather },
  { label: "Python", deg: 308, color: "#3776ab", ink: "#fff", Icon: PythonMark },
];

export function Opening() {
  const plate = useRef<HTMLDivElement>(null);

  const tilt = (event: PointerEvent<HTMLDivElement>) => {
    const node = plate.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = node.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    node.style.setProperty("--rx", `${(-y * 4).toFixed(2)}deg`);
    node.style.setProperty("--ry", `${(x * 6).toFixed(2)}deg`);
  };

  return (
    <section className="opening" id="top">
      <div className="opening-copy">
        <p className="opening-kicker">
          <span>01</span>
          {site.brand}
        </p>
        <h1>
          <span>
            <i>The system,</i>
          </span>
          <span>
            <i>drawn true.</i>
          </span>
        </h1>
        <p>
          Web platforms, mobile apps, cloud systems, and AI tools. You see the plan
          before a line of code is written.
        </p>
        <ul className="opening-trust">
          <li>
            <span className="opening-mark" />
            <p>
              <strong>You own what we ship.</strong>
              Code, hosting, and notes leave with you.
            </p>
          </li>
          <li>
            <span className="opening-mark" />
            <p>
              <strong>The scope is on paper first.</strong>
              What is in, what waits, and what done looks like.
            </p>
          </li>
          <li>
            <span className="opening-mark" />
            <p>
              <strong>The same people stay on it.</strong>
              Design and engineering, from the brief to the release.
            </p>
          </li>
        </ul>
        <div className="opening-actions">
          <a href="#contact" className="agency-primary">
            Start a project
          </a>
          <a href="#work" className="opening-ghost">
            See the work
          </a>
        </div>
        <p className="opening-reach">
          <span>Talk to us directly</span>
          <span className="opening-lines">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
          </span>
        </p>
      </div>

      <div
        className="instrument"
        ref={plate}
        onPointerMove={tilt}
        onPointerLeave={() => {
          plate.current?.style.setProperty("--rx", "0deg");
          plate.current?.style.setProperty("--ry", "0deg");
        }}
        aria-hidden="true"
      >
        <div className="instrument-plate">
          <div className="instrument-stage">
          <svg viewBox="0 0 640 640">
            <circle cx={CX} cy={CY} r="250" className="instrument-ring" />
            {ticks.map((tick) => (
              <line
                key={`${tick.x1}-${tick.y1}`}
                x1={tick.x1}
                y1={tick.y1}
                x2={tick.x2}
                y2={tick.y2}
                className={tick.major ? "instrument-tick is-major" : "instrument-tick"}
              />
            ))}
            <path d={arc(198, 18, 250)} className="instrument-arc" pathLength={1} />
            <path d={arc(198, 18, 250)} className="instrument-comet" pathLength={1} />
          </svg>
          <div className="instrument-sweep" />
          <div className="orbit-pulse" />
          <div className="orbit orbit-out">
            {outerMarks.map((mark) => (
              <span
                key={mark.label}
                className="orbit-chip"
                style={{ ...spot(mark.deg), ["--chip" as string]: mark.color, color: mark.ink }}
                title={mark.label}
              >
                <mark.Icon size={20} strokeWidth={2.25} />
                <b>{mark.label}</b>
              </span>
            ))}
          </div>
          <div className="orbit orbit-in">
            {innerMarks.map((mark) => (
              <span
                key={mark.label}
                className="orbit-chip"
                style={{ ...spot(mark.deg), ["--chip" as string]: mark.color, color: mark.ink }}
                title={mark.label}
              >
                <mark.Icon size={20} strokeWidth={2.25} />
                <b>{mark.label}</b>
              </span>
            ))}
          </div>
          <div className="orbit-core">
            <strong>07</strong>
            <span>ARC</span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
