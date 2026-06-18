"use client";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScIRj-1QZ4fYRAUkjhR_2g8SoxFlR8eLEHiEj9noLHKRRg-9A/viewform";

export default function RegisterForm() {
  return (
    <section
      id="register"
      style={{ background: "#1B2659", padding: "100px 24px" }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
        id="register-grid"
      >
        {/* Left: pitch */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: "0 0 20px",
              textWrap: "balance",
            }}
          >
            Ready to reach{" "}
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 500,
                color: "#F5A623",
              }}
            >
              the world stage?
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              margin: "0 0 36px",
            }}
          >
            Applications are reviewed on a rolling basis. The earlier you apply,
            the more time your mentor can dedicate to the ideation phase — where
            the best projects begin.
          </p>

          {[
            { num: "01", title: "Fill the form", sub: "Takes under 2 minutes" },
            { num: "02", title: "We reach out", sub: "Within 3 business days" },
            { num: "03", title: "Kick off", sub: "Project ideation begins" },
          ].map((step) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                gap: 20,
                marginBottom: 22,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: "rgba(0,137,123,0.18)",
                  border: "1px solid rgba(0,137,123,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 13,
                  color: "#F5A623",
                  letterSpacing: "0.05em",
                }}
              >
                {step.num}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#fff",
                    marginBottom: 2,
                  }}
                >
                  {step.title}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.55)" }}>{step.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: CTA */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 14,
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#F5A623",
              marginBottom: 20,
            }}
          >
            Apply Now
          </div>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: "0 0 16px",
              textWrap: "balance",
            }}
          >
            Start your application
          </h3>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              margin: "0 0 36px",
              maxWidth: 320,
            }}
          >
            Click below to open the registration form. It takes under 2 minutes
            and we will follow up within 3 business days.
          </p>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#1B2659",
              background: "#F5A623",
              padding: "16px 36px",
              borderRadius: 7,
              textDecoration: "none",
              transition: "transform 0.15s ease-out, box-shadow 0.25s ease-out",
              marginBottom: 20,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 24px rgba(245,166,35,0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "none";
              el.style.boxShadow = "none";
            }}
          >
            Open Application Form →
          </a>

          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0 }}>
            Opens in a new tab &middot; No login required
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #register-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
