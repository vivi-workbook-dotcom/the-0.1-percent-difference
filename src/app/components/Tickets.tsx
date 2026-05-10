import { Check, ArrowUpRight, Clock } from "lucide-react";
import { motion } from "motion/react";

// ─── CONFIG FLAGS ──────────────────────────────────────────────────────────────
// Set TICKETS_ENABLED to true when you're ready to open registration publicly.
// Until then, the section shows a "Registration opens soon" placeholder.
const TICKETS_ENABLED = false;

// Update this number whenever you adjust capacity.
const SEAT_CAPACITY = 150;
// ──────────────────────────────────────────────────────────────────────────────

const includes = [
  "Full event access (5 PM – 8 PM)",
  "Welcome Keynote by VethaVarshini",
  "Live Interview, Lightning Talk & Fireside Chat",
  "Curated Networking Session",
  "Event swag & refreshments",
];

export function Tickets() {
  return (
    <section
      id="tickets"
      style={{
        background: "#060606",
        padding: "120px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: -200,
          transform: "translateY(-50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(246,88,75,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 80 }}>
          <div className="accent-line" />
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
            Tickets
          </span>
        </div>

        {/* Two column: headline + card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(36px, 6vw, 80px)",
                fontWeight: 900,
                color: "#f4f3ef",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: 32,
              }}
            >
              Grab your<br />seat before<br />
              <span style={{ color: "#f6584b" }}>it's gone.</span>
            </h2>

            <div
              style={{
                marginTop: 40,
                padding: "24px 0",
                borderTop: "1px solid rgba(244,243,239,0.07)",
                borderBottom: "1px solid rgba(244,243,239,0.07)",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#f4f3ef",
                  opacity: 0.3,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Capacity
              </div>
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 32,
                  fontWeight: 900,
                  color: "#f4f3ef",
                  letterSpacing: "-0.02em",
                }}
              >
                {SEAT_CAPACITY} <span style={{ fontSize: 16, fontWeight: 400, opacity: 0.4 }}>seats only</span>
              </div>
            </div>
          </motion.div>

          {/* Right: ticket card OR coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {TICKETS_ENABLED ? (
              /* ── LIVE TICKET CARD ── */
              <div className="ticket-shimmer-border">
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div style={{ height: 4, background: "#f6584b", width: "100%" }} />
                  <div style={{ padding: "36px 36px 40px" }}>
                    <div
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#f6584b",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        marginBottom: 24,
                      }}
                    >
                      General Admission
                    </div>
                    <div style={{ marginBottom: 32 }}>
                      <span
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: 64,
                          fontWeight: 900,
                          color: "#f4f3ef",
                          letterSpacing: "-0.04em",
                          lineHeight: 1,
                        }}
                      >
                        ₹1,200
                      </span>
                      <div
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: 12,
                          color: "#f4f3ef",
                          opacity: 0.35,
                          marginTop: 8,
                          letterSpacing: "0.02em",
                        }}
                      >
                        per person · inclusive of all sessions & networking
                      </div>
                    </div>
                    <div style={{ height: 1, background: "rgba(244,243,239,0.07)", marginBottom: 28 }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                      {includes.map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <Check size={13} color="#f6584b" strokeWidth={3} />
                          <span
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: 13,
                              color: "#f4f3ef",
                              opacity: 0.65,
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div style={{ height: 1, background: "rgba(244,243,239,0.07)", marginBottom: 28 }} />
                    {/* TODO: replace href with real Razorpay Payment Link */}
                    <a
                      href="https://rzp.io/l/PLACEHOLDER"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#000",
                        background: "#f6584b",
                        padding: "18px 24px",
                        textDecoration: "none",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        transition: "all 0.2s ease",
                        width: "100%",
                        boxSizing: "border-box",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#e04e3d")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#f6584b")}
                    >
                      Get Tickets
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* ── COMING SOON PLACEHOLDER ── */
              <div
                style={{
                  border: "1px solid rgba(244,243,239,0.08)",
                  padding: "52px 40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 24,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle top line */}
                <div style={{ height: 1, background: "rgba(246,88,75,0.25)", width: "100%", position: "absolute", top: 0, left: 0 }} />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "rgba(246,88,75,0.08)",
                    border: "1px solid rgba(246,88,75,0.18)",
                    padding: "8px 16px",
                  }}
                >
                  <Clock size={12} color="#f6584b" strokeWidth={2.5} />
                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#f6584b",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                    }}
                  >
                    Registration Opens Soon
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 800,
                    color: "#f4f3ef",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  Tickets drop once the lineup is locked.
                </p>

                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 13,
                    color: "#f4f3ef",
                    opacity: 0.35,
                    lineHeight: 1.8,
                    margin: 0,
                    maxWidth: 340,
                  }}
                >
                  We're curating the room before opening the doors. Follow The Product Street on Instagram to know the moment registration goes live.
                </p>

                <div style={{ height: 1, background: "rgba(244,243,239,0.06)", width: "100%" }} />

                <a
                  href="https://www.instagram.com/theproductstreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#f4f3ef",
                    opacity: 0.5,
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.5")}
                >
                  Follow on Instagram
                  <ArrowUpRight size={14} />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}