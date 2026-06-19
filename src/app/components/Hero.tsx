import { useState, useEffect } from "react";
import { motion } from "motion/react";

const EVENT_DATE = new Date("2026-07-04T16:30:00+05:30");

function useCountdown() {
  const calc = () => {
    const diff = EVENT_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const countdown = useCountdown();

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        background: "#000",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingTop: 114,
        paddingBottom: 80,
      }}
    >
      {/* Grain texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Atmospheric coral glow — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -100,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(246,88,75,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Subtle diagonal light streak — like a lens flare */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "-30%",
          width: "70%",
          height: "100%",
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.018) 50%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 1,
          animation: "heroShine 8s ease-in-out infinite",
        }}
      />

      {/* Top right date display — Agora-style */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hero-date-display"
        style={{
          position: "absolute",
          top: 96,
          right: 40,
          textAlign: "right",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(40px, 5vw, 72px)",
            fontWeight: 900,
            color: "#f4f3ef",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            opacity: 0.12,
          }}
        >
          4
        </div>
        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 11,
            fontWeight: 500,
            color: "#f4f3ef",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.2,
            marginTop: 4,
          }}
        >
          July 2026
        </div>
      </motion.div>

      {/* Huge watermark "0.1%" */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -48%)",
          pointerEvents: "none",
          zIndex: 0,
          userSelect: "none",
        }}
      >
        <span
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(160px, 30vw, 420px)",
            fontWeight: 900,
            color: "#f6584b",
            opacity: 0.05,
            letterSpacing: "-0.06em",
            whiteSpace: "nowrap",
            display: "block",
            lineHeight: 1,
          }}
        >
          0.1%
        </span>
      </div>

      {/* Thin horizontal divider mid-hero */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 40,
          right: 40,
          height: "1px",
          background: "rgba(244,243,239,0.04)",
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Eyelet */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div style={{
            width: 32,
            height: 1,
            background: "#f6584b",
            boxShadow: "0 0 6px rgba(246,88,75,0.7)",
          }} />
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: "#f6584b",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            The Product Street Presents
          </span>
          <span style={{ color: "#f5c518", fontSize: 14, opacity: 0.8, marginLeft: 4 }}>✦</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(40px, 6.5vw, 86px)",
              fontWeight: 900,
              color: "#f4f3ef",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              marginBottom: 0,
              maxWidth: "90%",
            }}
          >
            <span style={{ opacity: 0.45, fontWeight: 500 }}>The</span>
            <br />
            <span style={{ color: "#f4f3ef" }}>Product </span>
            <span style={{ color: "#f6584b", textShadow: "0 0 80px rgba(246,88,75,0.25)" }}>Velocity</span>
            <br />
            Summit
          </h1>

          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(17px, 2.2vw, 24px)",
              fontWeight: 400,
              color: "#f4f3ef",
              opacity: 0.7,
              letterSpacing: "0.04em",
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            Startup speed at enterprise scale in the AI era
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: 52, marginBottom: 8 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 24, height: 1, background: "#f6584b", opacity: 0.5 }} />
            <span style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              color: "#f4f3ef",
              opacity: 0.3,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}>
              Countdown to July 4
            </span>
          </div>

          <div className="hero-countdown" style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hrs" },
              { value: countdown.minutes, label: "Mins" },
              { value: countdown.seconds, label: "Secs" },
            ].map((unit, i) => (
              <div key={unit.label} style={{ display: "flex", alignItems: "stretch" }}>
                {i > 0 && (
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 10px",
                    fontSize: "clamp(20px, 3vw, 36px)",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 900,
                    color: "#f6584b",
                    opacity: 0.3,
                    lineHeight: 1,
                    paddingBottom: 20,
                  }}>:</div>
                )}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: i === 0 ? "rgba(246,88,75,0.07)" : "rgba(244,243,239,0.03)",
                  border: i === 0 ? "1px solid rgba(246,88,75,0.2)" : "1px solid rgba(244,243,239,0.07)",
                  padding: "16px 24px 14px",
                  minWidth: "clamp(64px, 8vw, 96px)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {i === 0 && (
                    <div style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0,
                      height: 2,
                      background: "#f6584b",
                      boxShadow: "0 0 8px rgba(246,88,75,0.6)",
                    }} />
                  )}
                  <span style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "clamp(32px, 4.5vw, 64px)",
                    fontWeight: 900,
                    color: i === 0 ? "#f6584b" : "#f4f3ef",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                    minWidth: "2ch",
                    textAlign: "center",
                    display: "block",
                  }}>
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 9,
                    fontWeight: 600,
                    color: i === 0 ? "#f6584b" : "#f4f3ef",
                    opacity: i === 0 ? 0.7 : 0.25,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: 8,
                  }}>
                    {unit.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom row — event meta + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
            borderTop: "1px solid rgba(244,243,239,0.1)",
            paddingTop: 32,
          }}
        >
          {/* Event meta */}
          <div
            className="hero-meta-row"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              gap: 0,
            }}
          >
            {[
              { label: "Date", value: "July 4, 2026 · Sat" },
              { label: "Time", value: "4:30 PM – 8:30 PM" },
              { label: "Venue", value: "T HUB, Hyderabad" },
            ].map((item, i) => (
              <div
                key={i}
                className="hero-meta-item"
                style={{
                  paddingRight: 32,
                  paddingLeft: i > 0 ? 32 : 0,
                  borderLeft: i > 0 ? "1px solid rgba(244,243,239,0.12)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#f6584b",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    marginBottom: 5,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "clamp(13px, 1.4vw, 16px)",
                    fontWeight: 600,
                    color: "#f4f3ef",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {/* TODO: replace href with real Razorpay Payment Link */}
            <a
              href="https://rzp.io/rzp/theproductstreet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#000",
                background: "#f6584b",
                padding: "14px 32px",
                borderRadius: 2,
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "all 0.2s ease",
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Get Tickets
            </a>
            <button
              onClick={() => scrollTo("agenda")}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#f4f3ef",
                background: "transparent",
                border: "1px solid rgba(244,243,239,0.25)",
                padding: "14px 32px",
                borderRadius: 2,
                cursor: "pointer",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(244,243,239,0.6)";
                e.currentTarget.style.background = "rgba(244,243,239,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(244,243,239,0.25)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              View Agenda
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes heroShine {
          0%, 100% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(60%); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
