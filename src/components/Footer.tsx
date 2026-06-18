"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0e1535",
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
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: "0.14em",
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 4,
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
                  color: "#F5A623",
                }}
              >
                INDIA
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.42)",
                margin: "0 0 20px",
                maxWidth: 340,
              }}
            >
              A mentorship programme guiding Indian students from a research idea
              to the IRIS National Fair — and on to ISEF, the world&rsquo;s largest
              pre-college science competition.
            </p>
            <a
              href="mailto:ashwanth.sivakumar@gmail.com"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                display: "block",
                marginBottom: 6,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
            >
              ashwanth.sivakumar@gmail.com
            </a>
            <a
              href="tel:+919600114963"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
            >
              +91 9600114963
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
                color: "rgba(255,255,255,0.28)",
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
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.42)",
                  textDecoration: "none",
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
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
                color: "rgba(255,255,255,0.28)",
                marginBottom: 20,
              }}
            >
              Apply
            </div>
            {[
              { label: "Standard Programme", href: "#register" },
              { label: "Advanced Programme", href: "#register" },
              { label: "Full Scholarship", href: "#register" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.42)",
                  textDecoration: "none",
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
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
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "rgba(255,255,255,0.28)",
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
              color: "#1B2659",
              background: "#F5A623",
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
