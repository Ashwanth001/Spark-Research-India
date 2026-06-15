"use client";
import { useEffect, useRef, useState } from "react";

/* ─── Canvas starfield ─── */
function Starfield({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement | null> }) {
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.7,
      }}
    />
  );
}

/* ─── Radar pulse rings ─── */
function RadarRings() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 560,
        height: 560,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {([0, 1.4, 2.8] as number[]).map((delay) => (
        <div
          key={delay}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(245,166,35,0.18)",
            animation: `radar-pulse 4.2s ${delay}s ease-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Typewriter hook ─── */
function useTypewriter(text: string, startDelay = 900, charDelay = 44) {
  // ✅ FIX: Start with 0 to prevent the SSR text "flash" jump-cut
  const [chars, setChars] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setChars(0);
      setActive(true);
    }, startDelay - 80);

    const t2 = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        setChars(i);
        if (i >= text.length) { clearInterval(id); setActive(false); }
      }, charDelay);
      return () => clearInterval(id);
    }, startDelay);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [text, startDelay, charDelay]);

  return { displayed: text.slice(0, chars), active };
}

/* ─── Main Hero ─── */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { displayed: typeText, active: typing } = useTypewriter("all the way to ISEF.");

  /* ── Starfield canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let mx = 0, my = 0, tx = 0, ty = 0;

    type Star = { x: number; y: number; vx: number; vy: number; r: number; o: number };
    let stars: Star[] = [];

    function initStars() {
      // ✅ FIX: Scale for Retina/High-DPR displays so stars aren't blurry
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = canvas!.offsetWidth * dpr;
      canvas!.height = canvas!.offsetHeight * dpr;
      ctx!.scale(dpr, dpr);

      stars = Array.from({ length: 110 }, () => ({
        x: Math.random() * canvas!.offsetWidth,
        y: Math.random() * canvas!.offsetHeight,
        vx: (Math.random() - 0.5) * 0.055,
        vy: (Math.random() - 0.5) * 0.04,
        r: Math.random() * 1.4 + 0.25,
        o: Math.random() * 0.55 + 0.18,
      }));
    }

    initStars();

    const onResize = () => initStars();
    window.addEventListener("resize", onResize);

    const onMouse = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5);
      ty = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMouse);

    function tick() {
      if (!canvas || !ctx) return;
      mx += (tx - mx) * 0.05;
      my += (ty - my) * 0.05;

      const logicalWidth = canvas.offsetWidth;
      const logicalHeight = canvas.offsetHeight;

      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      for (const s of stars) {
        s.x = (s.x + s.vx + logicalWidth) % logicalWidth;
        s.y = (s.y + s.vy + logicalHeight) % logicalHeight;
        const px = s.x + mx * 16;
        const py = s.y + my * 10;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.o})`;
        ctx.fill();
      }

      if (!document.hidden) raf = requestAnimationFrame(tick);
    }

    // ✅ FIX: Cancel the old animation frame before requesting a new one
    const onVis = () => { 
      if (!document.hidden) {
        cancelAnimationFrame(raf); 
        raf = requestAnimationFrame(tick); 
      }
    };
    
    document.addEventListener("visibilitychange", onVis);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  /* ── Mouse parallax ── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number;
    let curX = 0, curY = 0, tgtX = 0, tgtY = 0;

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      tgtX = ((e.clientX - r.left) / r.width - 0.5);
      tgtY = ((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => { tgtX = 0; tgtY = 0; };

    function lerp() {
      curX += (tgtX - curX) * 0.06;
      curY += (tgtY - curY) * 0.06;
      section!.style.setProperty("--px", curX.toFixed(4));
      section!.style.setProperty("--py", curY.toFixed(4));
      raf = requestAnimationFrame(lerp);
    }

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(lerp);

    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        background: `
          radial-gradient(ellipse 70% 50% at 85% 20%, rgba(245,166,35,0.1), transparent 60%),
          radial-gradient(ellipse 60% 50% at 10% 85%, rgba(42,111,219,0.2), transparent 60%),
          radial-gradient(ellipse 40% 60% at 50% 0%, rgba(22,86,199,0.12), transparent 55%),
          linear-gradient(180deg, #040f28 0%, #030c21 100%)
        `,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 68,
        overflow: "hidden",
      }}
    >
      {/* Canvas */}
      <Starfield canvasRef={canvasRef} />

      {/* Ambient glow orbs */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22,86,199,0.12) 0%, transparent 70%)",
          top: "-10%", right: "-5%",
        }} />
        <div style={{
          position: "absolute", width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)",
          bottom: "5%", left: "15%",
        }} />
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left: copy */}
        <div>
          <div
            className="parallax-mid"
            style={{
              position: "relative",
              marginBottom: 28,
              animation: "float-up 0.9s 0.2s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <RadarRings />
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                lineHeight: 1.03,
                letterSpacing: "-0.025em",
                color: "#fff",
                margin: 0,
                textWrap: "balance",
                position: "relative",
                zIndex: 1,
              }}
            >
              Take your research idea
              <br />
              <span
                suppressHydrationWarning
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "#f5a623",
                  display: "block",
                  minHeight: "1.1em",
                }}
              >
                {typeText}
                {typing && (
                  <span
                    aria-hidden
                    style={{
                      display: "inline-block",
                      width: 2.5,
                      height: "0.82em",
                      background: "#f5a623",
                      verticalAlign: "middle",
                      marginLeft: 3,
                      borderRadius: 1,
                      animation: "cursor-blink 0.65s step-end infinite",
                    }}
                  />
                )}
              </span>
            </h1>
          </div>

          {/* Sub */}
          <p
            className="parallax-mid"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              lineHeight: 1.65,
              color: "#b8c9e4",
              margin: "0 0 44px",
              maxWidth: 500,
              textWrap: "pretty",
              animation: "float-up 0.9s 0.35s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            Structured mentorship for Indian students competing in the{" "}
            <strong style={{ color: "#fff", fontWeight: 600 }}>IRIS National Fair</strong> — and on to{" "}
            <strong style={{ color: "#fff", fontWeight: 600 }}>ISEF</strong>, the world&rsquo;s largest
            pre-college science competition.
          </p>

          {/* CTAs */}
          <div
            className="parallax-near"
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              animation: "float-up 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <a
              href="#register"
              className="cta-spring"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#051d4d",
                background: "#f5a623",
                padding: "15px 32px",
                borderRadius: 6,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 0 0 0 rgba(245,166,35,0.4)",
                transition: "transform 0.15s ease-out, box-shadow 0.3s ease-out",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 0 0 6px rgba(245,166,35,0.22), 0 8px 28px rgba(245,166,35,0.3)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 0 0 0 rgba(245,166,35,0.4)";
                el.style.transform = "none";
              }}
            >
              Apply Now
            </a>
            <a
              href="#journey"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "0.04em",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "15px 32px",
                borderRadius: 6,
                textDecoration: "none",
                display: "inline-block",
                transition: "border-color 0.2s, background 0.2s, transform 0.15s ease-out",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.5)";
                el.style.background = "rgba(255,255,255,0.1)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.22)";
                el.style.background = "rgba(255,255,255,0.06)";
                el.style.transform = "none";
              }}
            >
              How it works
            </a>
          </div>

        </div>

        {/* Right: glass pricing panel */}
        <div
          style={{ display: "flex", flexDirection: "column", animation: "float-up 0.9s 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
          className="hero-right parallax-near"
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "36px 36px 32px",
              boxShadow: "0 8px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Inner glass highlight */}
            <div aria-hidden style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
            }} />

            {/* Standard */}
            <div style={{ paddingBottom: 28 }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 12,
                color: "#2a6fdb",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}>
                Standard
              </div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "#fff",
                marginBottom: 8,
              }}>
                ₹20,000
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.48)", lineHeight: 1.5 }}>
                20 hours · 1:1 mentorship · IRIS pathway
              </div>
            </div>

            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 28 }} />

            {/* Advanced */}
            <div style={{ paddingBottom: 28 }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 12,
                color: "#f5a623",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}>
                Advanced
              </div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "#fff",
                marginBottom: 8,
              }}>
                ₹30,000
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.48)", lineHeight: 1.5 }}>
                35 hours · IRIS Finals and ISEF preparation
              </div>
            </div>

            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 24 }} />

            {/* Scholarship note */}
            <div style={{
              background: "rgba(245,166,35,0.08)",
              border: "1px solid rgba(245,166,35,0.18)",
              borderRadius: 8,
              padding: "14px 16px",
              fontSize: 14,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.65,
              marginBottom: 24,
            }}>
              Full scholarships available for students from underprivileged backgrounds. No documentation required upfront.
            </div>

            <a
              href="#register"
              style={{
                alignSelf: "flex-start",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 13,
                color: "#fff",
                textDecoration: "none",
                borderBottom: "2px solid #f5a623",
                paddingBottom: 2,
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#f5a623"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            >
              Apply for a programme →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}
