const DIGITAL_CHECKOUT = "https://b-amechi-books.myshopify.com/cart/51335219314843:1";
const HARDCOVER_CHECKOUT = "https://b-amechi-books.myshopify.com/cart/51335219937435:1";

const actions = [
  { index: "01", label: "DIGITAL", detail: "$44", href: DIGITAL_CHECKOUT },
  { index: "02", label: "HARDCOVER", detail: "$111 + $15 SHIP", href: HARDCOVER_CHECKOUT },
  { index: "03", label: "ASK KEYS", detail: "ENTER THE VAULT", href: "https://ask.19keys.com/" },
  { index: "04", label: "AMAZON / KINDLE", detail: "NOTIFY ME", href: "mailto:amechi@addcolormedia.com?subject=Notify%20me%20when%20KEYISM%20is%20on%20Amazon%20and%20Kindle" },
];

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <div className="grain" aria-hidden="true" />

      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="KEYISM home">KEYISM</a>
        <span>BY B. AMECHI</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="signals" aria-hidden="true">
          <span>THINK DEEPER</span>
          <span>BUILD DIFFERENTLY</span>
          <span>MOVE WITH INTENTION</span>
          <span>CULTURE / COMMUNITY / CONSCIOUSNESS</span>
        </div>

        <div className="title-block">
          <p className="eyebrow">AN UP-CLOSE PORTRAIT OF THE JOURNEY,<br />PHILOSOPHY, AND FRAMEWORKS OF 19KEYS</p>
          <h1 id="hero-title">THE BOOK<br />IS THE KEY.</h1>
        </div>

        <div className="book-stage" aria-label="KEYISM book cover">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="book">
            <div className="book-edge" aria-hidden="true" />
            <img src="/keyism-cover.png" alt="KEYISM by B. Amechi book cover" />
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
    </main>
  );
}
