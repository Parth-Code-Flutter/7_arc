"use client";

import { useMemo, useState } from "react";
import { Faq } from "./faq";
import { Inquiry } from "./inquiry";
import { Opening } from "./opening";
import { ProcessTrack } from "./process-track";
import { ServicePanels } from "./service-panels";
import { site } from "@/config/site";

const projects = [
  {
    name: "Kirana Desk",
    industry: "Retail",
    kind: "Web",
    text: "Orders, stock, and daily collections for a multi-counter shop, with one screen for the counter and one for the owner.",
    result: "Replaced the end-of-day notebook.",
    tags: ["Next.js", "Node.js"],
  },
  {
    name: "OPD Flow",
    industry: "Healthcare",
    kind: "Web",
    text: "Appointments, a patient list, and a front desk view for a clinic that was booking everything on paper.",
    result: "Front desk runs the day from one board.",
    tags: ["React", "SMS"],
  },
  {
    name: "Routebook",
    industry: "Logistics",
    kind: "Mobile",
    text: "Visits, collections, and a sync when the network returns, for people who spend the day on the road.",
    result: "Field updates land the same day.",
    tags: ["Flutter", "Offline"],
  },
  {
    name: "Askline",
    industry: "Operations",
    kind: "AI",
    text: "An internal assistant that answers from the company’s own files and passes the hard questions to a person.",
    result: "Repeat questions stop reaching the team.",
    tags: ["Python", "Search"],
  },
  {
    name: "Campus One",
    industry: "Education",
    kind: "Web",
    text: "Admissions, fees, and a parent login for an institute that had outgrown spreadsheets.",
    result: "Fees and admissions in one place.",
    tags: ["Next.js", "Reports"],
  },
  {
    name: "Bazaar Cart",
    industry: "Retail",
    kind: "Commerce",
    text: "A catalog, checkout, and order desk for a regional seller moving off WhatsApp orders.",
    result: "Orders stop living in a chat thread.",
    tags: ["Commerce", "Payments"],
  },
];

const filters = ["All", "Web", "Mobile", "AI", "Commerce"] as const;

const industries = [
  ["Retail", "Shops, catalogs, and the staff tools behind an order."],
  ["Healthcare", "Clinics, bookings, and the desk that runs the day."],
  ["Education", "Admissions, fees, and a login for parents or students."],
  ["Logistics", "Routes, collections, and updates from the field."],
  ["Manufacturing", "Shift boards, breakdowns, and a daily output view."],
  ["Startups", "A first version that can go in front of real users."],
];

const reasons = [
  ["One team", "Design and engineering stay in the same conversation, from the brief to the release."],
  ["A scope you can follow", "We write down what is in, what is next, and what done looks like before we build."],
  ["Software you can own", "The code, the hosting, and the notes are yours when we hand it over."],
  ["After launch", "We can stay for fixes, the next feature, or a quiet handover to your own team."],
];

const steps = [
  ["Discover", "Goals, users, the current system, and the constraint."],
  ["Plan", "Screens, architecture, and a delivery order."],
  ["Build", "Working software you can click while it is still being made."],
  ["Launch", "Deploy, document, and stay for the first weeks it is live."],
];

export function CompanyHome() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => projects.filter((item) => filter === "All" || item.kind === filter),
    [filter],
  );

  return (
    <div className="company-home">
      <Opening />

      <ServicePanels />

      <section className="agency-block agency-work" id="work">
        <div className="agency-intro">
          <p>Selected systems</p>
          <h2>The kind of product we ship.</h2>
          <span>
            Sample systems so you can see the range. Swap in real client names whenever you are
            ready to publish them.
          </span>
        </div>
        <div className="agency-filters" role="group" aria-label="Filter work">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="agency-projects">
          {visible.map((item) => (
            <article key={item.name}>
              <div className={`agency-cover cover-${item.kind.toLowerCase()}`}>
                <span>{item.industry}</span>
                <strong>{item.name}</strong>
              </div>
              <div>
                <p>{item.kind}</p>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <b>{item.result}</b>
                <ul>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio" id="industries">
        <div className="studio-head">
          <p>Industries</p>
          <h2>Where this kind of software shows up.</h2>
        </div>
        <ol className="ledger">
          {industries.map(([title, text], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="studio">
        <div className="studio-head">
          <p>Why 7ARC</p>
          <h2>The whole build, in one place.</h2>
        </div>
        <ol className="spine">
          {reasons.map(([title, text], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <ProcessTrack steps={steps} />

      <Faq />

      <section className="studio studio-contact" id="contact">
        <div>
          <p>Start a project</p>
          <h2>Tell us what you want built.</h2>
          <p>
            A product, a deadline, and what done looks like is enough. We reply from the studio.
          </p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
          <address>
            {site.address}
            <br />
            {site.legalName}
          </address>
        </div>
        <Inquiry />
      </section>
    </div>
  );
}
