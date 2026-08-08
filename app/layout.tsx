import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KEYISM — The Philosophies, Frameworks, and Mind of 19Keys",
  description: "Acquire KEYISM by B. Amechi. Digital edition, hardcopy, and access to the KEYISM AI Vault.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "KEYISM",
    description: "The keys were never hidden.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "KEYISM — The keys were never hidden." }],
  },
  twitter: { card: "summary_large_image", title: "KEYISM", description: "The keys were never hidden.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
