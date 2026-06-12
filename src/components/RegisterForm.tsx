"use client";
import { useState } from "react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeyyW-nustCWhLBrPyGBVFyuIaH28G4A-hBaXXPJu-dAD178g/formResponse";

type Status = "idle" | "submitting" | "success" | "error";

export default function RegisterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    school: "",
    programme: "",
    scholarship: false,
  });

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const body = new FormData();
    body.append("entry.868879017", form.name);
    body.append("entry.1822152973", form.email);
    body.append("entry.371635176", form.school);

    try {
      await fetch(FORM_ACTION, { method: "POST", mode: "no-cors", body });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--font-display)",
    fontSize: 15,
    color: "#0a1733",
    background: "#fff",
    border: "1.5px solid #d0dff0",
    borderRadius: 7,
    padding: "13px 16px",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: "0.05em",
    color: "#0a1733",
    marginBottom: 8,
    display: "block",
  };

  if (status === "success") {
    return (
      <section
        id="register"
        style={{ background: "#0a2358", padding: "100px 24px" }}
      >
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "rgba(245,166,35,0.15)",
              border: "2px solid #f5a623",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px",
              fontSize: 30,
            }}
          >
            ✓
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#fff",
              margin: "0 0 16px",
            }}
          >
            Application received.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "#c7d2e8",
              margin: "0 0 32px",
            }}
          >
            The Spark Research India team will be in touch within 3 business days
            to discuss the next steps.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setForm({ name: "", email: "", school: "", programme: "", scholarship: false });
            }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#051d4d",
              background: "#f5a623",
              border: "none",
              padding: "12px 24px",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Submit Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      style={{ background: "#0a2358", padding: "100px 24px" }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "start",
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
                color: "#f5a623",
              }}
            >
              the world stage?
            </span>
          </h2>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "#c7d2e8",
              margin: "0 0 36px",
            }}
          >
            Applications are reviewed on a rolling basis. The earlier you apply,
            the more time your mentor can dedicate to the ideation phase — where
            the best projects begin.
          </p>

          {[
            { num: "01", title: "Submit this form", sub: "Takes under 2 minutes" },
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
                  background: "rgba(42,111,219,0.2)",
                  border: "1px solid rgba(42,111,219,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 13,
                  color: "#f5a623",
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
                <div style={{ fontSize: 14, color: "#9fb3d0" }}>{step.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: form */}
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            padding: "40px 40px 36px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#1656c7",
              marginBottom: 24,
            }}
          >
            Registration Form
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle} htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1656c7")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#d0dff0")}
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle} htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1656c7")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#d0dff0")}
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle} htmlFor="school">
                School Name
              </label>
              <input
                id="school"
                type="text"
                required
                placeholder="Your school or institution"
                value={form.school}
                onChange={(e) => set("school", e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1656c7")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#d0dff0")}
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle} htmlFor="programme">
                Programme Interest
              </label>
              <div style={{ position: "relative" }}>
                <select
                  id="programme"
                  value={form.programme}
                  onChange={(e) => set("programme", e.target.value)}
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    cursor: "pointer",
                    color: form.programme ? "#0a1733" : "#6b7896",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#1656c7")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#d0dff0")}
                >
                  <option value="" disabled>
                    Select a programme
                  </option>
                  <option value="standard">Standard — ₹20,000 (20 hours)</option>
                  <option value="advanced">Advanced — ₹30,000 (35 hours)</option>
                  <option value="scholarship">Apply for Full Scholarship</option>
                </select>
                <span
                  style={{
                    position: "absolute",
                    right: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "#6b7896",
                    fontSize: 12,
                  }}
                >
                  ▾
                </span>
              </div>
            </div>

            <div
              style={{
                marginBottom: 28,
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <input
                id="scholarship-check"
                type="checkbox"
                checked={form.scholarship}
                onChange={(e) => set("scholarship", e.target.checked)}
                style={{ marginTop: 2, accentColor: "#1656c7", flexShrink: 0 }}
              />
              <label
                htmlFor="scholarship-check"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  color: "#34406b",
                  cursor: "pointer",
                  lineHeight: 1.5,
                }}
              >
                I&rsquo;d like to be considered for a full scholarship based on
                financial need.
              </label>
            </div>

            {status === "error" && (
              <div
                style={{
                  marginBottom: 16,
                  padding: "12px 16px",
                  background: "#fff5f5",
                  border: "1px solid #fca5a5",
                  borderRadius: 6,
                  fontSize: 14,
                  color: "#b91c1c",
                }}
              >
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              style={{
                width: "100%",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#051d4d",
                background: status === "submitting" ? "#e0a714" : "#f5a623",
                border: "none",
                padding: "15px",
                borderRadius: 6,
                cursor: status === "submitting" ? "not-allowed" : "pointer",
                transition: "background 0.2s, opacity 0.2s",
                opacity: status === "submitting" ? 0.8 : 1,
              }}
            >
              {status === "submitting" ? "Submitting…" : "Apply Now →"}
            </button>

            <p
              style={{
                marginTop: 14,
                fontSize: 13,
                color: "#6b7896",
                textAlign: "center",
                lineHeight: 1.5,
              }}
            >
              We&rsquo;ll follow up within 3 business days.
            </p>
          </form>
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
