"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#030f2b",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "56px 24px 36px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
          id="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="#f5a623" />
                <path
                  d="M16 7l2 6h6l-5 3.6 2 6L16 19l-5 3.6 2-6L8 13h6z"
                  fill="#051d4d"
                />
              </svg>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 14,
                    letterSpacing: "0.14em",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  SPARK RESEARCH
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "0.24em",
                    color: "#f5a623",
                  }}
                >
                  INDIA
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "#6b7896",
                margin: "0 0 20px",
                maxWidth: 340,
              }}
            >
              A mentorship programme guiding Indian students from a research idea
              to the IRIS National Fair — and on to ISEF, the world&rsquo;s largest
              pre-college science competition.
            </p>
            <a
              href="mailto:sparkresearchindia@gmail.com"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 14,
                color: "#9fb3d0",
                textDecoration: "none",
              }}
            >
              sparkresearchindia@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: 20,
              }}
            >
              Programme
            </div>
            {[
              { label: "How It Works", href: "#journey" },
              { label: "Programmes", href: "#programme" },
              { label: "Mentors", href: "#mentors" },
              { label: "Scholarships", href: "#scholarship" },
              { label: "For Schools", href: "#schools" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  color: "#6b7896",
                  textDecoration: "none",
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c7d2e8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7896")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Apply */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: 20,
              }}
            >
              Apply
            </div>
            {[
              { label: "Standard Programme", href: "#register" },
              { label: "Advanced Programme", href: "#register" },
              { label: "Full Scholarship", href: "#register" },
              { label: "School Partnership", href: "#schools" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  color: "#6b7896",
                  textDecoration: "none",
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c7d2e8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7896")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 13,
              color: "#3d4f72",
            }}
          >
            © {year} Spark Research India. All rights reserved.
          </span>
          <a
            href="#register"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#051d4d",
              background: "#f5a623",
              padding: "9px 20px",
              borderRadius: 5,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Apply Now
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}
