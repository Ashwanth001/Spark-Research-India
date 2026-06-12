"use client";
import { useReveal } from "@/lib/useReveal";

const areas = [
  "Biology & Life Sciences",
  "Environmental Science",
  "Physics & Engineering",
  "Chemistry",
  "Computer Science & AI",
  "Mathematics",
  "Social & Behavioural Science",
  "Energy & Sustainability",
  "Materials Science",
  "Medicine & Health",
];

export default function Mentors() {
  const ref = useReveal();

  return (
    <section
      id="mentors"
      style={{ background: "#fff", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56, maxWidth: 640 }}>
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
            The{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 500, color: "#1656c7" }}>
              experts behind the journey.
            </span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#34406b", margin: 0 }}>
            A two-tier mentor structure ensures every student gets both
            programme-level guidance and deep subject-matter expertise.
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="reveal stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 24,
          }}
          id="mentor-grid"
        >
          {/* Senior Mentors */}
          <div
            style={{
              background: "#0a2358",
              borderRadius: 12,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: "28px 32px 0" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#f5a623",
                  marginBottom: 10,
                }}
              >
                Senior Mentors
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 24,
                  color: "#fff",
                  marginBottom: 4,
                }}
              >
                Core Team
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#f5a623", marginBottom: 24 }}>
                Programme leads & coordinators
              </div>
            </div>
            <ul style={{ listStyle: "none", padding: "0 32px 32px", margin: 0 }}>
              {[
                "Lead project ideation sessions",
                "Match each student to the best-fit subject mentor",
                "Oversee research quality and IRIS alignment",
                "Handle programme coordination and scheduling",
                "Manage the scholarship evaluation process",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: "#c7d2e8",
                    padding: "11px 0 11px 26px",
                    position: "relative",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 13,
                      color: "#f5a623",
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Subject Mentors */}
          <div
            style={{
              background: "#f3f7fd",
              border: "1px solid #dce8f8",
              borderRadius: 12,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: "28px 32px 0" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#1656c7",
                  marginBottom: 10,
                }}
              >
                Subject Mentors
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 24,
                  color: "#0a1733",
                  marginBottom: 4,
                }}
              >
                20+ Network
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1656c7", marginBottom: 24 }}>
                Domain experts across 10+ STEM categories
              </div>
            </div>
            <ul style={{ listStyle: "none", padding: "0 32px 32px", margin: 0 }}>
              {[
                "Run mentorship and progress review sessions",
                "Guide experimental design and data analysis",
                "Support submission writing and formatting",
                "Provide feedback on posters and presentations",
                "Bring real lab and research experience to every session",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: "#34406b",
                    padding: "11px 0 11px 26px",
                    position: "relative",
                    borderBottom: "1px solid rgba(10,23,51,0.08)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 13,
                      color: "#1656c7",
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Research areas */}
        <div
          style={{
            background: "#f3f7fd",
            border: "1px solid #dce8f8",
            borderRadius: 10,
            padding: "20px 28px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 12px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1656c7",
              marginRight: 8,
            }}
          >
            Research Areas
          </span>
          {areas.map((area) => (
            <span
              key={area}
              style={{
                background: "#fff",
                border: "1px solid #d0dff0",
                borderRadius: 999,
                padding: "5px 14px",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 13,
                color: "#34406b",
              }}
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #mentor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
