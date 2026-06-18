"use client";

const actions = [
  {
    title: "Partner with us",
    body:
      "Bring Spark Research India into your school as a structured after-school or weekend programme. We handle all mentorship and coordination — you provide the students.",
    cta: "Discuss partnership",
    href: "mailto:ashwanth.sivakumar@gmail.com?subject=School%20Partnership%20Enquiry",
    accent: "#F5A623",
    textColor: "#1B2659",
  },
  {
    title: "Nominate a student",
    body:
      "Know a student with exceptional potential? Teachers and counsellors can nominate students directly — nominated applications receive priority review.",
    cta: "Submit a nomination",
    href: "mailto:ashwanth.sivakumar@gmail.com?subject=Student%20Nomination",
    accent: "#00897B",
    textColor: "#fff",
  },
  {
    title: "Host a workshop",
    body:
      "Invite our team to run a free introductory workshop on scientific research and the IRIS pathway for your Class 8–12 students. No commitment required.",
    cta: "Request a workshop",
    href: "mailto:ashwanth.sivakumar@gmail.com?subject=Workshop%20Request",
    accent: "rgba(255,255,255,0.07)",
    textColor: "#fff",
    border: "1px solid rgba(255,255,255,0.18)",
  },
];

export default function ForSchools() {
  return (
    <section
      id="schools"
      style={{ background: "#141c44", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#fff",
                margin: 0,
                textWrap: "balance",
              }}
            >
              Bring the world stage to your school.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.58)",
              maxWidth: 380,
              margin: 0,
            }}
          >
            Whether you&rsquo;re a teacher, school admin, or parent — there&rsquo;s a
            direct way to get involved.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          id="schools-grid"
        >
          {actions.map((action) => (
            <div
              key={action.title}
              style={{
                background: action.accent,
                border: action.border ?? "none",
                borderRadius: 12,
                padding: "32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 20,
                  color: action.textColor,
                  margin: "0 0 14px",
                  lineHeight: 1.2,
                }}
              >
                {action.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  lineHeight: 1.65,
                  color:
                    action.textColor === "#fff"
                      ? "rgba(255,255,255,0.72)"
                      : "rgba(27,38,89,0.75)",
                  margin: "0 0 24px",
                  flex: 1,
                }}
              >
                {action.body}
              </p>
              <a
                href={action.href}
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color:
                    action.textColor === "#fff"
                      ? "#fff"
                      : "#1B2659",
                  background:
                    action.textColor === "#fff"
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(27,38,89,0.1)",
                  border:
                    action.textColor === "#fff"
                      ? "1px solid rgba(255,255,255,0.25)"
                      : "1px solid rgba(27,38,89,0.2)",
                  padding: "10px 20px",
                  borderRadius: 6,
                  textDecoration: "none",
                  alignSelf: "flex-start",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                {action.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #schools-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          #schools-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
