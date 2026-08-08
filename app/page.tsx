"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const offers = [
  {
    id: "01",
    type: "DIGITAL EDITION",
    price: "$44",
    note: "Immediate download · PDF",
    action: "PURCHASE DIGITAL",
  },
  {
    id: "02",
    type: "HARDCOPY",
    price: "$111",
    note: "8 × 10 in · Printed edition",
    action: "PURCHASE HARDCOPY",
  },
];

export default function Home() {
  const [notice, setNotice] = useState("");
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.setProperty("--x", `${event.clientX}px`);
      glowRef.current.style.setProperty("--y", `${event.clientY}px`);
    };
    const scroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max ? window.scrollY / max : 0);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const beginCheckout = (type: string) => {
    setNotice(
      `${type} checkout is ready for its payment link. Add your Stripe or Shopify URL to activate it.`,
    );
  };

  const notify = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotifyOpen(false);
    setNotice("You are on the signal list. Connect the email destination before launch.");
  };

  return (
    <main>
      <div className="pointer-glow" ref={glowRef} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className="nav">
        <a href="#top" className="wordmark" aria-label="KEYISM home">
          KEYISM
        </a>
        <span className="edition">19K—001 / FIRST EDITION</span>
        <a className="nav-link" href="#acquire">
          ACQUIRE <span>↘</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal">A BOOK BY B. AMECHI</p>
          <h1 aria-label="KEYISM">
            <span>KEY</span>
            <span>ISM</span>
          </h1>
          <p className="hero-line">THE KEYS WERE NEVER HIDDEN.</p>
        </div>

        <div className="book-stage" aria-label="The KEYISM book cover">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <img src="/keyism-cover.jpg" alt="KEYISM book cover by B. Amechi" />
          <span className="coordinate coordinate-one">19° K</span>
          <span className="coordinate coordinate-two">FORM / THOUGHT</span>
        </div>

        <div className="hero-footer">
          <span>THE PHILOSOPHIES, FRAMEWORKS, AND MIND OF 19KEYS</span>
          <a href="#manifesto">ENTER THE FRAMEWORK ↓</a>
        </div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="chapter-index">I / THE QUESTION</div>
        <div className="manifesto-copy">
          <p className="micro">THIS IS NOT A BIOGRAPHY.</p>
          <h2>
            A MIND.
            <br />
            A METHOD.
            <br />
            A <em>KEY.</em>
          </h2>
          <p className="body-copy">
            KEYISM is an up-close portrait of the philosophies and frameworks
            behind 19Keys—a field guide to decoding self, systems, and the
            world around you.
          </p>
        </div>
        <blockquote>
          “The deeper question is what are you willing to become once you
          receive the answer.”
        </blockquote>
      </section>

      <section className="acquire" id="acquire">
        <div className="section-title">
          <span>II / CHOOSE YOUR FORM</span>
          <h2>ACQUIRE<br />THE KEY.</h2>
        </div>

        <div className="offers">
          {offers.map((offer) => (
            <article className="offer" key={offer.id}>
              <div className="offer-top">
                <span>{offer.id}</span>
                <span>{offer.type}</span>
              </div>
              <div className="offer-price">{offer.price}</div>
              <p>{offer.note}</p>
              <button onClick={() => beginCheckout(offer.type)}>
                {offer.action} <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="vault">
        <div className="vault-code" aria-hidden="true">
          <span>01001011</span><span>01000101</span><span>01011001</span>
        </div>
        <div className="vault-content">
          <p className="micro">III / BEYOND THE PAGE</p>
          <h2>THE KEYISM<br /><em>AI VAULT</em></h2>
          <p>
            Continue the inquiry. Enter the living intelligence layer of
            KEYISM—including ASK KEYS.
          </p>
          <a href="https://ask.19keys.com/" target="_blank" rel="noreferrer">
            ACCESS THE VAULT <span>↗</span>
          </a>
        </div>
        <div className="vault-ring" aria-hidden="true"><span>19K</span></div>
      </section>

      <section className="coming-soon">
        <div>
          <span className="pulse" />
          <p>AMAZON / KINDLE</p>
        </div>
        <h2>COMING<br />SOON.</h2>
        <button onClick={() => setNotifyOpen(true)}>NOTIFY ME <span>↗</span></button>
      </section>

      <footer>
        <a href="#top" className="wordmark">KEYISM</a>
        <p>© 2026 HIGH LVL MEDIA</p>
        <a href="https://ask.19keys.com/" target="_blank" rel="noreferrer">ASK KEYS ↗</a>
      </footer>

      {notice && (
        <div className="notice" role="status">
          <span>{notice}</span>
          <button onClick={() => setNotice("")} aria-label="Dismiss message">×</button>
        </div>
      )}

      {notifyOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="notify-title">
          <button className="modal-backdrop" onClick={() => setNotifyOpen(false)} aria-label="Close" />
          <form onSubmit={notify}>
            <button type="button" className="close" onClick={() => setNotifyOpen(false)} aria-label="Close">×</button>
            <p className="micro">AMAZON / KINDLE SIGNAL</p>
            <h2 id="notify-title">BE FIRST<br />TO KNOW.</h2>
            <label htmlFor="notify-email">EMAIL ADDRESS</label>
            <div className="input-row">
              <input id="notify-email" type="email" placeholder="YOU@DOMAIN.COM" required autoFocus />
              <button type="submit">ENTER ↗</button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
