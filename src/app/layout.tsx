import type { Metadata } from "next";
import { site } from "@/config/site";
import "./globals.css";
import "./typography.css";
import "./showcase.css";
import "./entry.css";
import "./technologies.css";
import "./approach.css";
import "./universe.css";
import "./complete.css";
import "./refinement.css";
import "./company.css";

export const metadata: Metadata = {
  title: `${site.brand} — IT laboratory`,
  description: `${site.brand} designs and engineers products, platforms, and the systems that keep them running.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full" suppressHydrationWarning>{children}</body>
    </html>
  );
}
