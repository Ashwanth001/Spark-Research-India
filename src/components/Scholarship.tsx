"use client";
import { useEffect, useRef, useState } from "react";

const criteria = [
  "Family income below ₹5 LPA (annual household income)",
  "Currently enrolled in Classes 8–12",
  "Demonstrated genuine interest or aptitude in STEM",
  "Willingness to commit to the full programme schedule",
];

const covers = [
  { label: "Mentorship Fees", detail: "100% of the Standard or Advanced programme fee" },
  { label: "IRIS Registration", detail: "Application and submission fees covered" },
  { label: "Study Materials", detail: "All resources, templates, and references provided" },
  { label: "Finals Support", detail: "Additional sessions for IRIS finalists, at no cost" },
];

function CountUp({ target, duration = 1400 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); }
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    let raf: number;
    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(ease * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [triggered, target, duration]);

  return <span ref={ref} suppressHydrationWarning>{triggered ? val : 0}</span>;
}

export default function Scholarship() {
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = detailsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="scholarship" style={{ background: "#1B2659", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "start",
          }}
          id="scholarship-grid"
        >
          {/* Left: hero numeral */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(6rem, 14vw, 11rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
                color: "#F5A623",
                marginBottom: 16,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <CountUp target={100} />%
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#fff",
                margin: "0 0 20px",
                textWrap: "balance",
              }}
            >
              Full scholarship.{" "}
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 500, color: "#F5A623" }}>
                Same programme.
              </span>
            </h2>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", margin: "0 0 36px", maxWidth: 480 }}>
              Financial circumstance shouldn&rsquo;t stop any student from reaching the world stage.
              Scholarships cover the full programme fee. Same mentorship, same pathway, nothing held back.
            </p>

            <a
              href="#register"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#1B2659",
                background: "#F5A623",
                padding: "14px 28px",
                borderRadius: 6,
                textDecoration: "none",
                transition: "transform 0.15s ease-out, box-shadow 0.3s ease-out",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 6px 20px rgba(245,166,35,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "none";
                el.style.boxShadow = "none";
              }}
            >
              Apply for Scholarship
            </a>
          </div>

          {/* Right: details */}
          <div
            ref={detailsRef}
            className="stagger"
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            {/* What's covered */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "18px 26px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#F5A623" }}>
                  What&rsquo;s covered
                </span>
              </div>
              {covers.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 18,
                    padding: "16px 26px",
                    borderBottom: i < covers.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    alignItems: "flex-start",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                >
                  <span style={{ color: "#F5A623", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Who can apply */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "18px 26px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#00897B" }}>
                  Who can apply
                </span>
              </div>
              {criteria.map((c, i) => (
                <div
                  key={i}
                  style={{
                    padding: "13px 26px 13px 18px",
                    borderBottom: i < criteria.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "rgba(255,255,255,0.72)",
                    display: "flex",
                    gap: 13,
                  }}
                >
                  <span style={{ color: "#00897B", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {c}
                </div>
              ))}
            </div>

            <div style={{
              background: "rgba(0,137,123,0.1)",
              border: "1px solid rgba(0,137,123,0.25)",
              borderRadius: 8,
              padding: "14px 20px",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.72)",
            }}>
              <strong style={{ color: "#fff" }}>How to apply:</strong> Select &ldquo;Apply for Scholarship&rdquo;
              in the registration form. The team will reach out within 3 business days to verify
              eligibility. No supporting documentation needed upfront.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #scholarship-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
