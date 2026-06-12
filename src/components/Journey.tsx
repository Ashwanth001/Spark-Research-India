"use client";
import { useEffect, useRef } from "react";

const phases = [
  {
    num: "01",
    name: "Project Ideation",
    std: "4–6 hrs",
    adv: "5–7 hrs",
    desc: "1:1 sessions to find a high-impact, feasible idea aligned to IRIS judging criteria.",
    color: "#1656c7",
    glow: "rgba(22,86,199,0.25)",
  },
  {
    num: "02",
    name: "Research Planning",
    std: "4–6 hrs",
    adv: "6–8 hrs",
    desc: "Define the question, hypothesis, methodology, and a rigorous experimental plan.",
    color: "#1656c7",
    glow: "rgba(22,86,199,0.25)",
  },
  {
    num: "03",
    name: "Mentorship & Reviews",
    std: "6–8 hrs",
    adv: "10–12 hrs",
    desc: "Regular check-ins to review data, unblock issues, and keep research quality high.",
    color: "#16a39a",
    glow: "rgba(22,163,154,0.25)",
  },
  {
    num: "04",
    name: "Submission Support",
    std: "5–6 hrs",
    adv: "5–6 hrs",
    desc: "Polish IRIS submission, abstract, and report. Coach the Finals poster and presentation.",
    color: "#2f9d57",
    glow: "rgba(47,157,87,0.25)",
  },
  {
    num: "05",
    name: "ISEF Mock Judging",
    std: "Optional",
    adv: "On selection",
    desc: "Simulated judging by verified ISEF alumni — final prep before the world stage.",
    color: "#f5a623",
    glow: "rgba(245,166,35,0.25)",
    optional: true,
  },
];

export default function Journey() {
  const axisRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Axis bar: direct style manipulation
    const axis = axisRef.current;
    if (axis) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            axis.style.opacity = "1";
            axis.style.transform = "none";
            obs.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
      );
      obs.observe(axis);
    }

    // Grid: add .visible to trigger CSS stagger on children
    const grid = gridRef.current;
    if (grid) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            grid.classList.add("visible");
            obs.disconnect();
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );
      obs.observe(grid);
    }
  }, []);

  return (
    <section
      id="journey"
      style={{ background: "#0a2358", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: "0 0 16px",
              textWrap: "balance",
            }}
          >
            A ground-up roadmap,{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 500, color: "#f5a623" }}>
              idea to world stage.
            </span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#9fb3d0", margin: 0, maxWidth: 560 }}>
            Hours are typical ranges — unused hours roll to the next phase at no
            extra cost.
          </p>
        </div>

        {/* Axis bar with animated wipe */}
        <div
          ref={axisRef}
          style={{
            display: "flex",
            alignItems: "stretch",
            overflow: "hidden",
            marginBottom: 20,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.1)",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div
            style={{
              padding: "16px 28px",
              borderRight: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              flexShrink: 0,
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginBottom: 4 }}>Start</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#2a6fdb" }}>A Spark of Curiosity</div>
          </div>

          {/* Animated connector */}
          <div
            style={{
              flex: 1,
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(90deg, rgba(22,86,199,0.15) 0%, rgba(245,166,35,0.15) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              viewBox="0 0 300 24"
              preserveAspectRatio="none"
              style={{ width: "100%", height: 24, overflow: "visible" }}
              aria-hidden
            >
              <line
                x1="10" y1="12" x2="290" y2="12"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
                strokeDasharray="6 6"
              />
              <polyline
                points="280,6 290,12 280,18"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          <div
            style={{
              padding: "16px 28px",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
              background: "#051d4d",
              flexShrink: 0,
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginBottom: 4 }}>Destination</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#f5a623" }}>ISEF, USA</div>
          </div>
        </div>

        {/* Phase cards with stagger */}
        <div
          ref={gridRef}
          className="stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 14,
          }}
          id="journey-grid"
        >
          {phases.map((phase) => (
            <div
              key={phase.num}
              style={{
                background: phase.optional
                  ? "rgba(245,166,35,0.05)"
                  : "rgba(255,255,255,0.035)",
                border: phase.optional
                  ? "1px dashed rgba(245,166,35,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "26px 20px",
                display: "flex",
                flexDirection: "column",
                cursor: "default",
                transition: "background 0.25s, transform 0.25s ease-out, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = phase.optional ? "rgba(245,166,35,0.1)" : "rgba(255,255,255,0.07)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = `0 16px 40px ${phase.glow}`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = phase.optional ? "rgba(245,166,35,0.05)" : "rgba(255,255,255,0.035)";
                el.style.transform = "none";
                el.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: phase.color,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 12,
                  color: phase.color,
                  letterSpacing: "0.04em",
                }}>
                  {parseInt(phase.num)}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                  lineHeight: 1.25,
                  color: "#fff",
                  margin: "0 0 12px",
                }}
              >
                {phase.name}
              </h3>

              <div style={{ marginBottom: 12 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, color: "#2a6fdb", marginBottom: 2 }}>
                  {phase.std} · Standard
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, color: "#f5a623" }}>
                  {phase.adv} · Advanced
                </div>
              </div>

              <p style={{ fontSize: 13, lineHeight: 1.55, color: "#8da5c4", margin: 0, flex: 1 }}>
                {phase.desc}
              </p>

              {phase.optional && (
                <div style={{
                  marginTop: 12,
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "#f5a623",
                  textTransform: "uppercase",
                }}>
                  Optional Add-On
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #journey-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 640px)  { #journey-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
