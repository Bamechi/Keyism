import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIGH-LVL MEDIA — KEYISM",
  description: "An up-close portrait of the journey, philosophy, and frameworks of 19Keys.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
