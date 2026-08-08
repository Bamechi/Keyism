"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [notice, setNotice] = useState("");
  const [notifyOpen, setNotifyOpen] = useState(false);

  const notify = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotifyOpen(false);
    setNotice("Notification signup is ready for its email-list connection.");
  };

  return (
    <main className="landing">
      <div className="grain" aria-hidden="true" />

      <header>
        <a href="#top" className="mark">KEYISM</a>
        <span>BY B. AMECHI</span>
      </header>

      <section className="stage" id="top">
        <p className="signal">THE KEYS WERE NEVER HIDDEN.</p>
        <div className="halo" aria-hidden="true" />
        <div className="spotlight" aria-hidden="true" />
        <div className="book-wrap">
          <img src="/keyism-cover-original.png" alt="KEYISM by B. Amechi" />
        </div>
        <div className="smoke smoke-one" aria-hidden="true" />
        <div className="smoke smoke-two" aria-hidden="true" />
        <div className="pedestal" aria-hidden="true" />
      </section>

      <nav className="actions" aria-label="KEYISM purchase and access links">
        <a href="https://b-amechi-books.myshopify.com/cart/51335219314843:1">
          <span><b>01</b> DIGITAL COPY</span><strong>$44 ↗</strong>
        </a>
        <a href="https://b-amechi-books.myshopify.com/cart/51335219937435:1">
          <span><b>02</b> HARDCOPY</span><strong>$111 + $15 SHIPPING ↗</strong>
        </a>
        <a href="https://ask.19keys.com/" target="_blank" rel="noreferrer">
          <span><b>03</b> KEYISM AI VAULT</span><strong>ASK KEYS ↗</strong>
        </a>
        <button onClick={() => setNotifyOpen(true)}>
          <span><b>04</b> AMAZON / KINDLE</span><strong>COMING SOON ↗</strong>
        </button>
      </nav>

      {notice && (
        <div className="notice" role="status">
          <span>{notice}</span>
          <button onClick={() => setNotice("")} aria-label="Dismiss">×</button>
        </div>
      )}

      {notifyOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="notify-title">
          <button className="backdrop" onClick={() => setNotifyOpen(false)} aria-label="Close" />
          <form onSubmit={notify}>
            <button type="button" className="close" onClick={() => setNotifyOpen(false)} aria-label="Close">×</button>
            <span>AMAZON / KINDLE</span>
            <h1 id="notify-title">BE FIRST<br />TO KNOW.</h1>
            <label htmlFor="email">EMAIL</label>
            <div>
              <input id="email" type="email" placeholder="YOU@DOMAIN.COM" required autoFocus />
              <button type="submit">ENTER ↗</button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
