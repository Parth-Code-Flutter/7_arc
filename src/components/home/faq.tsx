const questions = [
  ["Can you take an idea all the way to launch?", "Yes. We can help shape the scope, design the experience, build the product, and prepare its deployment. We agree on responsibilities and deliverables before work starts."],
  ["Can you work with our existing code or team?", "Yes. We can review an existing product, join your engineering workflow, or take on a defined part of the roadmap. The first step is understanding the codebase and the support you need."],
  ["Which technologies do you work with?", "Our core offering spans React, Next.js, Node.js, Flutter, Python, AI/ML, and cloud systems. We recommend the stack after understanding your requirements and constraints."],
  ["How do pricing and timelines work?", "They depend on scope, integrations, complexity, and the delivery model. Share your goals and we will discuss a practical scope and estimate before you commit."],
  ["Do you support the product after launch?", "Ongoing development and maintenance can be included in the engagement. We define the support scope, response expectations, and handover together."],
];
export function Faq(){return <section className="faq-section" id="faq"><div><p className="eyebrow">Before we begin</p><h2>Good questions.<br /><span>Clear answers.</span></h2><p>Still curious? <a href="#contact">Let’s talk about your project.</a></p></div><div>{questions.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden>+</span></summary><p>{answer}</p></details>)}</div></section>;}
