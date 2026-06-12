"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Programme", href: "#programme" },
  { label: "Journey", href: "#journey" },
  { label: "Mentors", href: "#mentors" },
  { label: "Scholarship", href: "#scholarship" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled ? "#051d4d" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff" }}>
            Spark Research<span style={{ color: "#f5a623" }}> India</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#051d4d",
              background: "#f5a623",
              padding: "10px 22px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#f7b733"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#f5a623"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >
            Apply Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
        >
          <div style={{ width: 24, height: 2, background: "#fff", marginBottom: 5, transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ width: 24, height: 2, background: "#fff", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <div style={{ width: 24, height: 2, background: "#fff", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#051d4d", padding: "16px 24px 24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: 15,
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: 16,
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#051d4d",
              background: "#f5a623",
              padding: "12px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
}
