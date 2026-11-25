import { site } from "@/config/site";
import { Inquiry } from "./inquiry";

export function Desk() {
  return <section id="contact" className="contact-section"><div className="contact-top"><p className="eyebrow">Your next chapter</p><p>Have something in mind?<br />We would like to hear it.</p></div><div className="contact-grid"><div><a className="contact-title" href={`mailto:${site.email}`}>Let’s talk<span aria-hidden>.</span></a><p className="contact-intro">A new product, a difficult engineering problem, or a team that needs extra hands. It starts with a conversation.</p></div><Inquiry/></div><div className="contact-bottom"><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a><p>{site.city}, {site.region}<br /><span>Working with teams everywhere.</span></p></div><div className="contact-mark" aria-hidden>7ARC</div></section>;
}
