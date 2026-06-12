"use client";
import { useEffect, useRef } from "react";

const differentiators = [
  {
    num: "1",
    title: "India's only IRIS-specific mentorship pathway",
    detail:
      "Every session, milestone, and template is designed around IRIS judging criteria. Not for US university portfolios, not for generic science fairs. For IRIS, and the path to ISEF.",
  },
  {
    num: "2",
    title: "Mock judging by verified ISEF alumni",
    detail:
      "Before the real thing, students face a simulated judging panel of ISEF alumni. The closest preparation to standing at ISEF itself — so nothing comes as a surprise.",
  },
  {
    num: "3",
    title: "Hours roll over between phases",
    detail:
      "Unused hours from one phase carry into the next at no extra cost. You only use what you need, and the rest keeps working for you across the programme.",
  },
  {
    num: "4",
    title: "Full scholarships, no documentation needed upfront",
    detail:
      "Students from underprivileged backgrounds receive the full programme fee waiver. No paperwork required to apply — just tick the box in the registration form.",
  },
  {
    num: "5",
    title: "A fraction of what comparable programmes cost",
    detail:
      "Pioneer Academics charges $7,000+. Polygence charges $2,700+. SRI is ₹20,000 to ₹30,000 — with deeper IRIS expertise built in, and full scholarships for those who need them.",
  },
  {
    num: "6",
    title: "Mentors who know Indian science from the inside",
    detail:
      "SRI mentors are Indian researchers and educators who understand IRIS and ISEF systems, the judging rubrics, what wins, and what doesn't. Not imported expertise — native knowledge.",
  },
];

export default function WhySRI() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows =
      sectionRef.current?.querySelectorAll<HTMLElement>(".diff-row");
    if (!rows) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "none";
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    rows.forEach((row, i) => {
      row.style.opacity = "0";
      row.style.transform = "translateY(18px)";
      row.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms`;
      obs.observe(row);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#f8faff", padding: "100px 24px" }} id="why-sri">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, maxWidth: 560 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#0a1733",
              margin: "0 0 16px",
              textWrap: "balance",
            }}
          >
            What SRI does{" "}
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 500,
                color: "#1656c7",
              }}
            >
              differently.
            </span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#34406b", margin: 0 }}>
            Six things you won&rsquo;t find anywhere else.
          </p>
        </div>

        <div ref={sectionRef}>
          {differentiators.map((d, i) => (
            <div
              key={d.num}
              className="diff-row"
              style={{
                display: "grid",
                gridTemplateColumns: "72px 1fr",
                gap: "0 40px",
                padding: "36px 0",
                borderTop: "1px solid #e0e8f5",
                borderBottom: i === differentiators.length - 1 ? "1px solid #e0e8f5" : "none",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                  color: "rgba(22,86,199,0.1)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  userSelect: "none",
                  paddingTop: 4,
                }}
              >
                {d.num}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
                    color: "#0a1733",
                    margin: "0 0 10px",
                    lineHeight: 1.3,
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#34406b",
                    margin: 0,
                    maxWidth: 680,
                  }}
                >
                  {d.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
