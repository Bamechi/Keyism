"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export default function Home() {
  const [notice, setNotice] = useState("");
  const [notifyOpen, setNotifyOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (!stageRef.current) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * -8;
      stageRef.current.style.setProperty("--tilt-x", `${y}deg`);
      stageRef.current.style.setProperty("--tilt-y", `${x}deg`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const checkout = (edition: string) => {
    setNotice(`${edition} checkout will activate when its payment link is connected.`);
  };

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

      <section className="stage" id="top" ref={stageRef}>
        <p className="signal">THE KEYS WERE NEVER HIDDEN.</p>
        <div className="halo" aria-hidden="true" />
        <div className="book-wrap">
          <div className="book" aria-label="KEYISM book, rotating">
            <div className="face front">
              <img src="/keyism-cover-original.png" alt="KEYISM by B. Amechi" />
            </div>
            <div className="face back" aria-hidden="true">
              <span>KEYISM</span>
              <small>THE PHILOSOPHIES,<br />FRAMEWORKS, AND<br />MIND OF 19KEYS</small>
              <i>19K—001</i>
            </div>
            <div className="spine" aria-hidden="true">KEYISM · B. AMECHI</div>
          </div>
        </div>
        <p className="instruction">DRAG YOUR GAZE · THE OBJECT MOVES</p>
      </section>

      <nav className="actions" aria-label="KEYISM purchase and access links">
        <button onClick={() => checkout("DIGITAL EDITION")}>
          <span><b>01</b> DIGITAL COPY</span><strong>$44 ↗</strong>
        </button>
        <button onClick={() => checkout("HARDCOPY")}>
          <span><b>02</b> HARDCOPY</span><strong>$111 ↗</strong>
        </button>
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
