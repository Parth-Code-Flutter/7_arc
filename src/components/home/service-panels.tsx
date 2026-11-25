"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ComponentType } from "react";
import {
  BrainCircuit,
  ChartNoAxesCombined,
  CodeXml,
  Globe,
  Megaphone,
  PenTool,
  Share2,
  Smartphone,
  Users,
  Workflow,
} from "lucide-react";

const STEP = 3500;
const DESKTOP = 992;

type Icon = ComponentType<{ size?: number; strokeWidth?: number }>;

type Panel = {
  tone: string;
  tag: string;
  title: string;
  text: string;
  Icon: Icon;
};

const rows: Panel[][] = [
  [
    {
      tone: "ai",
      tag: "AI & Data",
      title: "Artificial Intelligence",
      text: "Tools that draft, sort, and suggest, so the same decision does not land on a person every time.",
      Icon: BrainCircuit,
    },
    {
      tone: "ml",
      tag: "AI & Data",
      title: "Machine Learning",
      text: "Models that learn from your own records, spot a pattern, and flag what should happen next.",
      Icon: ChartNoAxesCombined,
    },
    {
      tone: "soft",
      tag: "Build",
      title: "Software Development",
      text: "Custom applications from the brief through design, programming, testing, and the fixes after launch.",
      Icon: CodeXml,
    },
    {
      tone: "market",
      tag: "Growth",
      title: "Digital Marketing",
      text: "Search, social, and campaigns that bring the right people to a product you already run.",
      Icon: Megaphone,
    },
    {
      tone: "mobile",
      tag: "Build",
      title: "Mobile App Development",
      text: "iOS and Android apps for customers and field teams, on the same accounts as the website.",
      Icon: Smartphone,
    },
  ],
  [
    {
      tone: "share",
      tag: "Integration",
      title: "SharePoint Integration",
      text: "SharePoint joined to the tools you already use, so files, approvals, and tasks stay in one flow.",
      Icon: Share2,
    },
    {
      tone: "web",
      tag: "Build",
      title: "Website Development",
      text: "A site that reads clearly, loads quickly, and gives your team an admin they can update.",
      Icon: Globe,
    },
    {
      tone: "crm",
      tag: "Build",
      title: "CRM Software Development",
      text: "A customer record the sales team can trust, from the first enquiry through the next order.",
      Icon: Users,
    },
    {
      tone: "ux",
      tag: "Design",
      title: "UI / UX Designing",
      text: "Screens and flows agreed before the build, so the first release is one people can actually use.",
      Icon: PenTool,
    },
    {
      tone: "net",
      tag: "Integration",
      title: "NetSuite Integration",
      text: "NetSuite connected to the rest of the business, so orders, stock, and finance stay in step.",
      Icon: Workflow,
    },
  ],
];

function placeRow(
  row: HTMLDivElement | null,
  panels: (HTMLAnchorElement | null)[],
  glow: HTMLSpanElement | null,
  index: number,
) {
  const items = panels.filter(Boolean) as HTMLAnchorElement[];
  if (!row || items.length < 2) return;
  if (window.innerWidth < DESKTOP) {
    items.forEach((panel) => {
      panel.style.transform = "";
    });
    if (glow) glow.style.transform = "";
    return;
  }
  const full = items[0].offsetWidth;
  const slim = full / 2.6;
  const gap = items[1].offsetLeft - full;
  let x = 0;
  items.forEach((panel, i) => {
    const open = i === index;
    panel.style.transform = `translateX(${x - panel.offsetLeft}px)`;
    if (open && glow) {
      glow.style.transform = `translateX(${x}px)`;
      row.style.setProperty("--svc-glow", getComputedStyle(panel).getPropertyValue("--glow"));
    }
    x += (open ? full : slim) + gap;
  });
}

export function ServicePanels() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const panelRefs = useRef<(HTMLAnchorElement | null)[][]>([[], []]);
  const glowRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const openRef = useRef([0, 0]);
  const hoverRef = useRef([false, false]);
  const timers = useRef<(number | null)[]>([null, null]);
  const visibleRef = useRef(false);
  const reducedRef = useRef(false);
  const [open, setOpen] = useState([0, 0]);

  const sync = (next: number[]) => {
    openRef.current = next;
    setOpen([...next]);
  };

  const stop = (row: number) => {
    if (timers.current[row]) window.clearTimeout(timers.current[row]!);
    timers.current[row] = null;
    rowRefs.current[row]?.classList.remove("is-auto");
  };

  const tick = (row: number) => {
    const node = rowRefs.current[row];
    if (!node) return;
    node.classList.remove("is-auto");
    void node.offsetWidth;
    node.classList.add("is-auto");
    timers.current[row] = window.setTimeout(() => {
      const next = [...openRef.current];
      next[row] = (next[row] + 1) % rows[row].length;
      sync(next);
      tick(row);
    }, STEP);
  };

  const start = (row: number, first = false) => {
    stop(row);
    if (reducedRef.current || hoverRef.current[row] || !visibleRef.current || window.innerWidth < DESKTOP) {
      return;
    }
    const delay = row * (STEP / 2);
    if (first && delay) {
      timers.current[row] = window.setTimeout(() => {
        const next = [...openRef.current];
        next[row] = (next[row] + 1) % rows[row].length;
        sync(next);
        tick(row);
      }, delay);
    } else {
      tick(row);
    }
  };

  useLayoutEffect(() => {
    open.forEach((index, row) => {
      placeRow(rowRefs.current[row], panelRefs.current[row] ?? [], glowRefs.current[row], index);
      const node = rowRefs.current[row];
      if (!node?.classList.contains("is-auto")) return;
      node.classList.remove("is-auto");
      void node.offsetWidth;
      node.classList.add("is-auto");
    });
  }, [open]);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const seen = entry.isIntersecting;
        if (seen && !visibleRef.current) {
          visibleRef.current = true;
          rows.forEach((_, row) => start(row, true));
        } else if (!seen && visibleRef.current) {
          visibleRef.current = false;
          rows.forEach((_, row) => stop(row));
        }
      },
      { threshold: 0.25 },
    );
    if (wrapRef.current) observer.observe(wrapRef.current);

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        openRef.current.forEach((index, row) => {
          placeRow(rowRefs.current[row], panelRefs.current[row] ?? [], glowRefs.current[row], index);
          if (window.innerWidth < DESKTOP) stop(row);
          else if (!timers.current[row]) start(row);
        });
      }, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
      rows.forEach((_, row) => stop(row));
    };
  }, []);

  return (
    <section className="svc-section" id="services">
      <div className="svc-head">
        <p>Bridging business and the software behind it</p>
        <h2>
          OUR <span>SERVICES</span>
        </h2>
        <i />
        <span>Ten practices, from the first screen to the system that keeps it running.</span>
      </div>
      <p className="svc-hint">
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <rect x="4" y="1.5" width="8" height="13" rx="4" />
          <line className="svc-wheel" x1="8" y1="4" x2="8" y2="6.5" />
        </svg>
        Hover a panel to explore
      </p>
      <div className="svc-rows" ref={wrapRef}>
        {rows.map((row, rowIndex) => (
          <div
            key={row[0].title}
            className="svc-row"
            ref={(node) => {
              rowRefs.current[rowIndex] = node;
            }}
            style={{ ["--svc-step" as string]: `${STEP}ms` }}
            onMouseEnter={() => {
              hoverRef.current[rowIndex] = true;
              stop(rowIndex);
            }}
            onMouseLeave={() => {
              hoverRef.current[rowIndex] = false;
              start(rowIndex);
            }}
          >
            <span
              className="svc-glow"
              aria-hidden="true"
              ref={(node) => {
                glowRefs.current[rowIndex] = node;
              }}
            />
            {row.map((panel, index) => {
              const Icon = panel.Icon;
              const expanded = open[rowIndex] === index;
              return (
                <a
                  key={panel.title}
                  href="#contact"
                  className={`svc-panel svc-${panel.tone}${expanded ? " is-open" : ""}`}
                  ref={(node) => {
                    if (!panelRefs.current[rowIndex]) panelRefs.current[rowIndex] = [];
                    panelRefs.current[rowIndex][index] = node;
                  }}
                  onMouseEnter={() => {
                    if (openRef.current[rowIndex] === index) return;
                    const next = [...openRef.current];
                    next[rowIndex] = index;
                    sync(next);
                  }}
                  onFocus={() => {
                    hoverRef.current[rowIndex] = true;
                    const next = [...openRef.current];
                    next[rowIndex] = index;
                    sync(next);
                    stop(rowIndex);
                  }}
                  onBlur={() => {
                    hoverRef.current[rowIndex] = false;
                    start(rowIndex);
                  }}
                >
                  <div className="svc-top">
                    <span className="svc-ic">
                      <Icon size={26} strokeWidth={1.6} />
                    </span>
                    <span className="svc-tag">{panel.tag}</span>
                  </div>
                  <h3>{panel.title}</h3>
                  <p>{panel.text}</p>
                  <div className="svc-foot">
                    <span className="svc-link">
                      Learn more
                      <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                    <span className="svc-plus" aria-hidden="true">
                      <svg viewBox="0 0 16 16">
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    </span>
                  </div>
                  <span className="svc-water" aria-hidden="true">
                    <Icon size={96} strokeWidth={1} />
                  </span>
                  <span className="svc-deco" aria-hidden="true" />
                  <span className="svc-bar" aria-hidden="true">
                    <i />
                  </span>
                </a>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
