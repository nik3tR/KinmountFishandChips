import { useState } from "react";

const NAV_LINKS = ["Menu", "Contact"];

const MENU = [
  {
    category: "Fish",
    items: [
      {
        name: "1 Pc. Fish & Chips",
        desc: "Served with our fresh hand-cut chips",
        options: [
          { label: "Haddock", price: "$17.50" },
          { label: "Halibut", price: "$22.50" },
        ],
      },
      {
        name: "2 Pc. Fish & Chips",
        desc: "",
        options: [
          { label: "Haddock", price: "$25.95" },
          { label: "Halibut", price: "$37.50" },
        ],
      },
      {
        name: "Fish Only (1 Pc.)",
        desc: "Just the fish, golden and crisp",
        options: [
          { label: "Haddock", price: "$12.00" },
          { label: "Halibut", price: "$17.00" },
        ],
      },
    ],
  },
  {
    category: "Hand-Cut Fries & Dessert",
    items: [
      { name: "Regular Fry", price: "$6.00" },
      { name: "Large Fry", price: "$9.50" },
      { name: "Deep Fried Mars Bar", price: "$5.50" },
    ],
  },
  {
    category: "Chicken",
    items: [
      { name: "3pc Chicken Fingers & Fries", desc: "", price: "$15.00" },
      { name: "3pc Chicken Fingers Only", desc: "", price: "$10.00" },
    ],
  },
  {
    category: "Poutine",
    items: [
      { name: "Regular Poutine", desc: "Hand-Cut fries, curds, gravy", price: "$11.00" },
      { name: "Large Poutine", desc: "", price: "$15.50" },
    ],
  },
  {
    category: "Add-On",
    items: [
      { name: "Gravy", desc: "", price: "$2.00" },
      { name: "Cheese", desc: "", price: "$4.00" },
      { name: "Coleslaw", desc: "House-made, lightly dressed", price: "$2.00" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Pop", desc: "Coke, Diet Coke, Sprite, Orange", price: "$2.50" },
      { name: "Bottled Water", desc: "", price: "$1.50" },
    ],
  },
];

const HOURS = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "Closed" },
  { day: "Thursday", hours: "Closed" },
  { day: "Friday", hours: "12:00 pm – 6:00 pm" },
  { day: "Saturday", hours: "12:00 pm – 6:00 pm" },
  { day: "Sunday", hours: "12:00 pm – 6:00 pm" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#f5f0e6",
        fontFamily: "'Lato', sans-serif",
        color: "#1a2535",
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{ backgroundColor: "#ffffff" }}
        className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-sm"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer"
          aria-label="Back to top"
        >
          <img
            src="/fishandchips.png"
            alt="Fish and Chips"
            className="w-20 h-auto object-cover"
          />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1b3461",
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Kinmount Fish & Chips
          </span>
        </button>

        <div className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-bold tracking-widest uppercase cursor-pointer transition-opacity hover:opacity-70"
              style={{ color: "#1b3461" }}
            >
              {link}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <header
        className="relative flex items-center justify-center px-8 py-12 md:py-24"
        style={{
          minHeight: "120vh",
          backgroundImage: "url('/fishandchipstore.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Darker overlay to ensure white text is legible without the card backing */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content & Buttons - Tile background removed */}
        <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center text-center gap-6">
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Delicious Fish and <br className="hidden sm:block" /> Hand-Cut Chips
          </h1>

          <p style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: 400 }}>
            Family owned and operated
          </p>

          {/* Button Container */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center mt-4">
            <button
              onClick={() => scrollTo("menu")}
              className="w-full sm:w-auto px-8 py-3.5 text-sm tracking-wider font-semibold cursor-pointer transition-transform hover:-translate-y-1 rounded-full"
              style={{
                backgroundColor: "#1b3461",
                color: "#f5f0e6",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
              }}
            >
              See the Menu
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto px-8 py-3.5 text-sm tracking-wider font-semibold cursor-pointer transition-transform hover:-translate-y-1 hover:bg-white/10 rounded-full"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "2px solid #ffffff",
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* ── MENU ── */}
      <section id="menu" className="px-6 py-20 max-w-4xl mx-auto">
        <SectionLabel>The Menu</SectionLabel>
        <div className="mt-12 space-y-14">
          {MENU.map((cat) => (
            <div key={cat.category}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#1b3461",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  fontStyle: "italic",
                  marginBottom: "1rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid rgba(27,52,97,0.15)",
                }}
              >
                {cat.category}
              </h3>
              <ul className="space-y-6">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <div className="flex justify-between items-baseline gap-4">
                      <div>
                        <span
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            color: "#1a2535",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                          }}
                        >
                          {item.name}
                        </span>
                      </div>

                      {item.price && (
                        <span
                          style={{
                            color: "#c94e2a",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                            fontFamily: "'Lato', sans-serif",
                          }}
                        >
                          {item.price}
                        </span>
                      )}
                    </div>

                    {item.options && (
                      <div className="mt-3 space-y-3 pl-6 md:pl-8 border-l-2 border-slate-200 ml-2">
                        {item.options.map((opt) => (
                          <div key={opt.label} className="flex justify-between items-baseline gap-4">
                            <span style={{ color: "#4a5568", fontSize: "1.2rem", fontWeight: 400 }}>
                              {opt.label}
                            </span>
                            <span
                              style={{
                                color: "#c94e2a",
                                fontSize: "1.2rem",
                                fontWeight: 700,
                                whiteSpace: "nowrap",
                                fontFamily: "'Lato', sans-serif",
                              }}
                            >
                              {opt.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: "1px", backgroundColor: "rgba(27,52,97,0.12)", margin: "0 1.5rem" }} />

      {/* ── CONTACT ── */}
      <section id="contact" className="px-6 py-20 max-w-4xl mx-auto">
        <SectionLabel>Find Us</SectionLabel>

        <div className="mt-10 grid sm:grid-cols-2 gap-12">
          <div className="space-y-6">
            <ContactBlock label="Address">
              <p>4080 Kawartha Lakes County Road 121</p>
              <p>Kinmount, Ontario K0M 2A0</p>
            </ContactBlock>
            <ContactBlock label="Phone">
              <a
                href="tel:+17054882088"
                className="hover:underline transition-opacity hover:opacity-70"
                style={{ color: "#1b3461" }}
              >
                (705) 488-1850
              </a>
            </ContactBlock>
            <ContactBlock label="Hours">
              <div style={{ color: "#1a2535", fontSize: "0.95rem" }}>
                {HOURS.map(({ day, hours }) => {
                  const closed = hours === "Closed";
                  return (
                    <div
                      key={day}
                      className="flex justify-between py-1"
                      style={{ borderBottom: "1px solid rgba(27,52,97,0.06)" }}
                    >
                      <span style={{ fontWeight: closed ? 300 : 400, color: closed ? "#9ca3af" : "#1a2535" }}>
                        {day}
                      </span>
                      <span style={{ color: closed ? "#9ca3af" : "#1b3461", fontSize: "0.9rem" }}>{hours}</span>
                    </div>
                  );
                })}
              </div>
            </ContactBlock>
          </div>

          <div>
            <iframe
              title="Kinmount Fish & Chips location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.8985587648936!2d-78.65474188840099!3d44.782873378518985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd5190f18c5056f%3A0xf03400342b9c9634!2sKinmount%20Fish%20and%20Chips!5e0!3m2!1sen!2sbr!4v1788664003498!5m2!1sen!2sbr"
              width="600"
              height="450"
              className="w-full h-56 sm:h-full rounded-lg shadow-sm"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{ backgroundColor: "#1b3461" }}
        className="px-6 py-10 text-center"
      >
        <div className="flex justify-center mb-4">
          <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#c94e2a" }} />
        </div>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#f5f0e6",
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
          }}
        >
          Kinmount Fish & Chips
        </p>
        <p style={{ color: "rgba(245,240,230,0.5)", fontSize: "0.8rem", marginTop: "0.4rem", fontWeight: 300 }}>
          The Original — Since 1980 — Kinmount, Ontario
        </p>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#1b3461",
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {children}
      </span>
      <div
        style={{ flex: 1, height: "1px", backgroundColor: "rgba(27,52,97,0.2)", maxWidth: "6rem" }}
      />
    </div>
  );
}

function ContactBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#c94e2a",
          fontWeight: 700,
          marginBottom: "0.35rem",
        }}
      >
        {label}
      </p>
      <div style={{ color: "#1a2535", fontSize: "0.95rem", lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}