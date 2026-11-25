import { ticker } from "@/config/site";

export function Ticker() {
  const loop = [...ticker, ...ticker];
  return <div className="overflow-hidden bg-accent text-ink-dark"><div className="ticker-track py-3">{loop.map((item, index) => <span key={`${item}-${index}`} className="flex items-center px-5 font-lab text-xs font-semibold uppercase tracking-[0.14em] md:px-8">{item}<span aria-hidden className="ml-8 size-1.5 rotate-45 bg-signal" /></span>)}</div></div>;
}
