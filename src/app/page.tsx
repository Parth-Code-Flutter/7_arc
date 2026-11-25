import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CompanyHome } from "@/components/home/company-home";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CompanyHome />
      </main>
      <SiteFooter />
    </>
  );
}
