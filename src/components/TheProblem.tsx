"use client";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/lib/useReveal";

function PathDraw({ visible }: { visible: boolean }) {
  return (
    <svg
      viewBox="0 0 340 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-hidden
    >
      {/* Track */}
      <line x1="0" y1="28" x2="340" y2="28" stroke="rgba(27,38,89,0.15)" strokeWidth="2" />

      {/* Animated progress line */}
      <line
        x1="0" y1="28" x2="340" y2="28"
        stroke="#00897B"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          strokeDasharray: 340,
          strokeDashoffset: visible ? 0 : 340,
          transition: visible
            ? "stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1) 0.3s"
            : "none",
        }}
      />

      {/* IRIS node */}
      <circle cx="48" cy="28" r="18" fill="#1B2659" />
      <text x="48" y="33" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800" fontFamily="Syne, sans-serif">IRIS</text>

      {/* Arrow heads along path */}
      <polyline points="150,20 162,28 150,36" stroke="#00897B" strokeWidth="1.5" fill="none"
        style={{
          opacity: visible ? 1 : 0,
          transition: visible ? "opacity 0.4s 1s" : "none",
        }}
      />
      <polyline points="198,20 210,28 198,36" stroke="#00897B" strokeWidth="1.5" fill="none"
        style={{
          opacity: visible ? 1 : 0,
          transition: visible ? "opacity 0.4s 1.2s" : "none",
        }}
      />

      {/* ISEF node */}
      <circle cx="292" cy="28" r="22" fill="#F5A623" />
      <text x="292" y="33" textAnchor="middle" fill="#1B2659" fontSize="11" fontWeight="800" fontFamily="Syne, sans-serif">ISEF</text>

      {/* Labels */}
      <text x="48" y="56" textAnchor="middle" fill="#7280a8" fontSize="9.5" fontFamily="Syne, sans-serif" letterSpacing="0.08em">NATIONAL FAIR</text>
      <text x="292" y="56" textAnchor="middle" fill="#7280a8" fontSize="9.5" fontFamily="Syne, sans-serif" letterSpacing="0.08em">INDIA → USA</text>
    </svg>
  );
}

export default function TheProblem() {
  const ref = useReveal();
  const pathContainerRef = useRef<HTMLDivElement>(null);
  const [pathVisible, setPathVisible] = useState(false);

  useEffect(() => {
    const el = pathContainerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setPathVisible(true); obs.disconnect(); }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#FBF9F6", padding: "100px 24px" }} id="problem">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          id="problem-grid"
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#1B2659",
                margin: "0 0 24px",
                textWrap: "balance",
              }}
            >
              India produces brilliant young scientists.{" "}
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 500, color: "#00897B" }}>
                Most never hear of IRIS.
              </span>
            </h2>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.7, color: "#3a4570", margin: "0 0 20px", maxWidth: 500 }}>
              The <strong style={{ color: "#1B2659", fontWeight: 600 }}>IRIS National Fair</strong> is
              India&rsquo;s premier pre-college science competition. Top performers earn a place on Team India at{" "}
              <strong style={{ color: "#1B2659", fontWeight: 600 }}>ISEF</strong> — the world&rsquo;s largest
              pre-college STEM stage, held annually in the USA.
            </p>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.7, color: "#3a4570", margin: 0, maxWidth: 500 }}>
              Yet only a fraction of Indian students ever discover the pathway, let alone receive the
              structured mentorship needed to compete at this level.{" "}
              <strong style={{ color: "#1B2659", fontWeight: 600 }}>
                SRI was built to close this gap.
              </strong>
            </p>

            {/* Animated IRIS→ISEF pathway */}
            <div
              ref={pathContainerRef}
              style={{
                marginTop: 36,
                background: "#f3f1ee",
                border: "1px solid #e2ddd7",
                borderRadius: 10,
                padding: "24px 28px 18px",
              }}
            >
              <PathDraw visible={pathVisible} />
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                name: "IRIS",
                sub: "National Fair, India",
                desc: "Open to Classes 5–12 · Free to participate · Pan-India",
                color: "#1B2659",
                borderColor: "#c5cce8",
                bg: "#eef0f8",
              },
              {
                name: "ISEF",
                sub: "Regeneron Int'l, USA",
                desc: "Top IRIS performers represent Team India · Held annually in the USA",
                color: "#F5A623",
                borderColor: "#f5d99a",
                bg: "#fef8ed",
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: item.bg,
                  border: `1.5px solid ${item.borderColor}`,
                  borderRadius: 10,
                  padding: "28px 32px",
                  transition: "transform 0.25s ease-out, box-shadow 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 12px 32px rgba(27,38,89,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: item.color, letterSpacing: "-0.01em" }}>
                    {item.name}
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7280a8" }}>
                    {item.sub}
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "#3a4570", margin: 0 }}>{item.desc}</p>
              </div>
            ))}

            <div style={{
              background: "#1B2659",
              borderRadius: 10,
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M4 11h14M13 5l6 6-6 6" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>
                Strong IRIS performance earns Team India a place at{" "}
                <span style={{ color: "#F5A623", fontWeight: 700 }}>ISEF, USA</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #problem-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
