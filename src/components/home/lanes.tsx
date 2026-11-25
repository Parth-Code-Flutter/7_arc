import { lanes } from "@/config/site";

export function Lanes() {
  return (
    <section id="fit" className="scroll-mt-24 overflow-hidden bg-canvas px-5 py-24 text-ink md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-lab text-sm uppercase tracking-[0.16em] text-accent">Where we fit</p>
            <h2 className="mt-6 max-w-xl font-display text-[clamp(3.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.05em]">Different stages. <span className="text-signal italic">Same ambition.</span></h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">We meet you where the business is today, then build the shortest responsible path to what comes next.</p>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {lanes.map((lane) => <article key={lane.index} className="group grid gap-5 py-9 md:grid-cols-[10rem_1fr] md:py-12"><p className="font-lab text-sm uppercase tracking-[0.12em] text-accent">{lane.index}</p><div><h3 className="font-display text-4xl leading-none tracking-[-0.03em] transition-transform group-hover:translate-x-2 md:text-5xl">{lane.title}</h3><p className="mt-4 max-w-xl leading-relaxed text-muted">{lane.line}</p></div></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}
