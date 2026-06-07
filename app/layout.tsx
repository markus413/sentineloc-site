import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sentinel OC — Coming soon",
  description:
    "OSINT workspace for investigative journalists. Coming soon.",
  metadataBase: new URL("https://sentineloc.io"),
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plexMono.variable} ${plexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#06090f] text-slate-200 font-mono">
        {/* Cookieless, self-hosted Umami — public marketing surfaces (all
            pages under this layout: /, /beta, /features, /pricing, etc.).
            Same website as the SOC app's public pages. No consent banner
            needed (Umami sets no cookies). React 19 hoists this script. */}
        <script
          defer
          src="https://analytics.sentineloc.io/script.js"
          data-website-id="f0eb201a-ca6f-49f4-89c8-2eeebeba95b0"
        />
        {children}
      </body>
    </html>
  );
}
