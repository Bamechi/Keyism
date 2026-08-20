"use client";

import { useRef } from "react";

const DIGITAL_CHECKOUT = "https://b-amechi-books.myshopify.com/products/keyism-digital-edition";
const HARDCOVER_CHECKOUT = "https://b-amechi-books.myshopify.com/products/keyism-hardcover-edition";

const actions = [
  { index: "01", label: "DIGITAL", detail: "$44", href: DIGITAL_CHECKOUT },
  { index: "02", label: "HARDCOVER", detail: "$111 + $15 SHIP", href: HARDCOVER_CHECKOUT },
  { index: "03", label: "ASK KEYS", detail: "ENTER THE VAULT", href: "https://ask.19keys.com/" },
  { index: "04", label: "AMAZON / KINDLE", detail: "NOTIFY ME", href: "mailto:amechi@addcolormedia.com?subject=Notify%20me%20when%20KEYISM%20is%20on%20Amazon%20and%20Kindle" },
];

export default function Home() {
  const bookRef = useRef<HTMLDivElement>(null);
  const moveBook = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!bookRef.current || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    bookRef.current.style.setProperty("--rx", `${-y * 20}deg`);
    bookRef.current.style.setProperty("--ry", `${x * 28}deg`);
    bookRef.current.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    bookRef.current.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };
  const resetBook = () => {
    bookRef.current?.style.setProperty("--rx", "0deg");
    bookRef.current?.style.setProperty("--ry", "-7deg");
  };

  return (
    <main className="site-shell" id="top">
      <div className="grain" aria-hidden="true" />

      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="HIGH-LVL MEDIA home">HIGH-LVL MEDIA</a>
        <a className="hub-link" href="https://hub.19keys.com/" target="_blank" rel="noreferrer">19KEYS AI HUB</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="signals" aria-hidden="true"><span>JOURNEY</span><span>PHILOSOPHY</span><span>FRAMEWORKS</span></div>

        <div className="title-block">
          <p className="eyebrow" id="hero-title">AN UP-CLOSE PORTRAIT OF<br />THE WORLD OF 19KEYS</p>
        </div>

        <div className="book-stage" aria-label="Interactive KEYISM book cover" onPointerMove={moveBook} onPointerLeave={resetBook}>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="book" ref={bookRef}>
            <div className="book-edge" aria-hidden="true" />
            <img src="/keyism-cover.png" alt="KEYISM by B. Amechi book cover" />
            <div className="book-gloss" aria-hidden="true" />
          </div>
          <div className="book-shadow" aria-hidden="true" />
        </div>

        <p className="edition">FIRST EDITION<br />HIGH-LVL MEDIA PUBLISHING</p>
      </section>

      <nav className="action-grid" aria-label="Purchase and access KEYISM">
        {actions.map((action) => (
          <a key={action.index} href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            <span className="number">{action.index}</span>
            <span className="action-label">{action.label}</span>
            <strong>{action.detail}</strong>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
      <a className="manual-order" href="mailto:amechi@addcolormedia.com?subject=Manual%20KEYISM%20Order&body=I%20would%20like%20to%20order%20the%20KEYISM%20________%20edition.%20Please%20send%20my%20Shopify%20invoice.%0A%0AName%3A%0AShipping%20address%20(for%20hardcover)%3A">
        CHECKOUT ISSUE? REQUEST A MANUAL SHOPIFY INVOICE →
      </a>
    </main>
  );
}
