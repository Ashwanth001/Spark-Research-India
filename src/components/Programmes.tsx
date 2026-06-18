"use client";
import { useReveal } from "@/lib/useReveal";
import { TiltCard } from "@/components/TiltCard";

const programmes = [
  {
    tier: "Standard",
    price: "₹25,000",
    hours: "20 Hours",
    note: "Hours roll over",
    features: [
      "Project Ideation with a dedicated mentor",
      "Structured Research Planning",
      "Mentorship & Progress Reviews",
      "IRIS Round 1 Submission Support",
      "Remaining hours redirected to IRIS Finals prep",
    ],
    bestFor: "First-time IRIS participants and budget-conscious families starting their research journey.",
    accentColor: "#00897B",
    bg: "#FBF9F6",
    border: "1.5px solid #c8e6e3",
    priceColor: "#1B2659",
  },
  {
    tier: "Advanced",
    price: "₹35,000",
    hours: "35 Hours",
    note: "Hours roll over",
    features: [
      "Everything in the Standard programme",
      "Extended Research Planning depth",
      "More Mentorship & Progress Review sessions",
      "Full IRIS Finals preparation included",
      "Extended ISEF-specific submission support",
    ],
    bestFor: "Students targeting IRIS Finals and a serious shot at ISEF — with more time, depth, and rehearsal.",
    accentColor: "#F5A623",
    bg: "#fef8ed",
    border: "1.5px solid #f5d99a",
    priceColor: "#1B2659",
  },
];

export default function Programmes() {
  const ref = useReveal();

  return (
    <section id="programme" style={{ background: "#FBF9F6", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56, maxWidth: 640 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#1B2659",
              margin: "0 0 16px",
              textWrap: "balance",
            }}
          >
            Choose the programme that{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 500, color: "#00897B" }}>
              fits the ambition.
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.7, color: "#3a4570", margin: 0 }}>
            Both programmes follow the same proven 5-phase journey. The difference is depth,
            hours, and how far you want to go.
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="stagger"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          id="prog-grid"
        >
          {programmes.map((p) => (
            <TiltCard
              key={p.tier}
              intensity={5}
              style={{
                background: p.bg,
                border: p.border,
                borderRadius: 12,
                padding: "40px 40px 36px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 16px rgba(27,38,89,0.06)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 22,
                  color: p.accentColor,
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.tier}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 3vw, 2.8rem)",
                  letterSpacing: "-0.02em",
                  color: p.priceColor,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {p.price}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: p.accentColor,
                  marginBottom: 28,
                  opacity: 0.9,
                }}
              >
                {p.hours} · {p.note}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", borderTop: "1px solid rgba(27,38,89,0.09)" }}>
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(27,38,89,0.07)",
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "#3a4570",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: p.accentColor, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: "auto",
                  borderTop: "1px solid rgba(27,38,89,0.08)",
                  paddingTop: 16,
                  marginBottom: 20,
                }}
              >
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "#3a4570", margin: 0 }}>{p.bestFor}</p>
              </div>

              <a
                href="#register"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: p.accentColor === "#F5A623" ? "#1B2659" : "#fff",
                  background: p.accentColor,
                  padding: "13px",
                  borderRadius: 6,
                  textDecoration: "none",
                  transition: "opacity 0.2s, transform 0.15s ease-out",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "none"; }}
              >
                Apply for {p.tier}
              </a>
            </TiltCard>
          ))}
        </div>

        {/* Scholarship callout */}
        <div
          style={{
            marginTop: 24,
            background: "#1B2659",
            borderRadius: 10,
            padding: "22px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#fff" }}>
              Can&rsquo;t afford the fee?
            </span>{" "}
            <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.72)" }}>
              Full scholarships are available for students from underprivileged backgrounds.
            </span>
          </div>
          <a
            href="#scholarship"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#1B2659",
              background: "#F5A623",
              padding: "10px 22px",
              borderRadius: 6,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Learn About Scholarships
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #prog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
