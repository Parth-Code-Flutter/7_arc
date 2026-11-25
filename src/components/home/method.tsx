import { method } from "@/config/site";

export function Method() {
  return <section id="method" className="process-section">
    <div className="process-heading"><p className="eyebrow">The working relationship</p><h2>Good software.<br />Built <em>together.</em></h2><p className="process-intro">A direct line to the people doing the work. Clear decisions, working software, and a shared understanding of what comes next.</p></div>
    <div className="process-list">{method.map((step) => <article key={step.index} className="process-row"><span className="eyebrow">{step.index}</span><h3>{step.title}</h3><p>{step.line}</p></article>)}</div>
  </section>;
}
