import { site } from "@/config/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#industries", label: "Industries" },
  { href: "#method", label: "Process" },
];

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <p className="foot-close">
        One studio.
        <span>The whole build.</span>
      </p>
      <div className="foot-brand">
        <p>
          <span>7</span>
          {site.brand}
        </p>
        <small>{site.legalName}</small>
      </div>
      <nav aria-label="Footer">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="foot-contact">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
        <p>{site.address}</p>
      </div>
      <p className="foot-base">© {new Date().getFullYear()}</p>
    </footer>
  );
}
