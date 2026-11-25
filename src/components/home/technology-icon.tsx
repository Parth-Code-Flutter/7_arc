import { BrainCircuit, Cloud, Database, GitBranch, Workflow, ShieldCheck, Plug, Search, Bot, Cpu, Smartphone, Monitor, Layers, Activity, CodeXml } from "lucide-react";

export function TechnologyIcon({ name }: { name: string }) {
  if (name === "React") return <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><ellipse cx="20" cy="20" rx="18" ry="7" /><ellipse cx="20" cy="20" rx="18" ry="7" transform="rotate(60 20 20)" /><ellipse cx="20" cy="20" rx="18" ry="7" transform="rotate(120 20 20)" /><circle cx="20" cy="20" r="3" fill="currentColor" stroke="none" /></svg>;
  if (name === "Next.js") return <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="20" cy="20" r="18" /><path d="M12 28V12l20 23M27 12v13" /></svg>;
  if (name === "Flutter" || name === "Dart") return <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true"><path d="M24 3h13L12 28 5 21zM24 20h13L23 34l-7-7z" /><path opacity=".5" d="m16 27 7-7 14 14H23z" /></svg>;
  if (name === "TypeScript" || name === "JavaScript") return <svg viewBox="0 0 40 40" aria-hidden="true"><rect x="2" y="2" width="36" height="36" rx="5" fill="currentColor" /><text x="20" y="29" textAnchor="middle" fill="var(--surface)" fontFamily="sans-serif" fontSize="18" fontWeight="700">{name === "TypeScript" ? "TS" : "JS"}</text></svg>;
  if (name === "Node.js") return <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m20 2 16 9v19l-16 9L4 30V11z" /><text x="20" y="26" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="sans-serif" fontSize="17" fontWeight="600">JS</text></svg>;
  const icons: Record<string, typeof Cloud> = { Python: CodeXml, "HTML & CSS": CodeXml, "REST APIs": Workflow, Authentication: ShieldCheck, Integrations: Plug, iOS: Smartphone, Android: Smartphone, "Cross-platform": Layers, "Machine learning": BrainCircuit, "AI / ML": BrainCircuit, LLMs: Cpu, "AI assistants": Bot, Automation: Workflow, "Intelligent search": Search, "Cloud deployment": Cloud, Cloud, Databases: Database, "CI/CD": GitBranch, Monitoring: Activity, "Data pipelines": Workflow };
  const Icon = icons[name] ?? Monitor;
  return <Icon aria-hidden="true" strokeWidth={1.5} />;
}
