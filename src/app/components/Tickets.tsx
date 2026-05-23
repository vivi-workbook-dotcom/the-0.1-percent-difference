import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const RAZORPAY_LINK = "https://rzp.io/rzp/theproductstreet";

const tiers = [
  {
    name: "Early Bird",
    price: "₹899",
    validity: "Valid until June 1",
    active: true,
    open: true,
  },
  {
    name: "General Admission",
    price: "₹1,199",
    validity: null,
    active: false,
    open: false,
  },
  {
    name: "On the Spot",
    price: "₹1,499",
    validity: null,
    active: false,
    open: false,
  },
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

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 64,
          }}
        >
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(36px, 6vw, 80px)",
              fontWeight: 900,
              color: "#f4f3ef",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Grab your seat<br />
            <span style={{ color: "#f6584b" }}>before it's gone.</span>
          </h2>
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 13,
              color: "#f4f3ef",
              opacity: 0.35,
              letterSpacing: "0.04em",
            }}
          >
            Limited seats available · July 7, 2026 · T HUB, Hyderabad
          </div>
        </motion.div>

        {/* Tier cards */}
        <div
          className="tickets-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={tier.active ? "ticket-shimmer-border" : undefined}
              style={
                tier.active
                  ? undefined
                  : { border: "1px solid rgba(244,243,239,0.08)" }
              }
            >
              <div
                style={{
                  background: "#060606",
                  padding: "32px 28px 36px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                {tier.active && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: "#f6584b",
                    }}
                  />
                )}

                {/* Tier label */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      color: tier.active ? "#f6584b" : "#f4f3ef",
                      opacity: tier.active ? 1 : 0.35,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      marginBottom: tier.active ? 6 : 0,
                    }}
                  >
                    {tier.name}
                  </div>
                  {tier.active && (
                    <div
                      style={{
                        display: "inline-block",
                        background: "rgba(246,88,75,0.1)",
                        border: "1px solid rgba(246,88,75,0.2)",
                        padding: "2px 10px",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 9,
                        fontWeight: 600,
                        color: "#f6584b",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      Now Open
                    </div>
                  )}
                </div>

                {/* Price */}
                <div style={{ marginBottom: 8 }}>
                  <span
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "clamp(36px, 4vw, 52px)",
                      fontWeight: 900,
                      color: "#f4f3ef",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </span>
                </div>

                {/* Validity */}
                <div style={{ marginBottom: 28 }}>
                  {tier.validity && (
                    <div
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 11,
                        color: "#f4f3ef",
                        opacity: 0.35,
                        lineHeight: 1.7,
                      }}
                    >
                      {tier.validity}
                    </div>
                  )}
                </div>

                <div style={{ flex: 1 }} />

                {/* CTA */}
                {tier.open ? (
                  <a
                    href={RAZORPAY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tier.active ? "btn-shine" : undefined}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color: tier.active ? "#000" : "#f4f3ef",
                      background: tier.active ? "#f6584b" : "transparent",
                      border: tier.active ? "none" : "1px solid rgba(244,243,239,0.15)",
                      padding: "14px 20px",
                      textDecoration: "none",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      transition: "all 0.2s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#e04e3d")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#f6584b")}
                  >
                    Get Tickets
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#f4f3ef",
                      opacity: 0.2,
                      border: "1px solid rgba(244,243,239,0.08)",
                      padding: "14px 20px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "default",
                    }}
                  >
                    Not Yet Open
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}