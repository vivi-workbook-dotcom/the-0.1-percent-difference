import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

// TODO: Replace with actual T HUB photo if available
const VENUE_PHOTO =
  "https://images.unsplash.com/photo-1552925766-63ab07391e02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function Venue() {
  return (
    <section
      id="venue"
      style={{
        background: "#000",
        padding: "120px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Full-bleed image first */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", overflow: "hidden", marginBottom: 64 }}
        >
          <img
            src={VENUE_PHOTO}
            alt="T HUB Hyderabad"
            style={{
              width: "100%",
              height: "clamp(240px, 35vw, 440px)",
              objectFit: "cover",
              display: "block",
              filter: "brightness(0.6) saturate(0.8)",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 50%), linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          {/* Text over image */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 48,
            }}
          >
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                color: "#f6584b",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Venue
            </div>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(28px, 4vw, 56px)",
                fontWeight: 900,
                color: "#f4f3ef",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              T HUB,<br />Hyderabad
            </h2>
          </div>
        </motion.div>

        {/* Details row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <MapPin size={16} color="#f6584b" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#f6584b",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Address
                </div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 14,
                    color: "#f4f3ef",
                    opacity: 0.55,
                    lineHeight: 1.65,
                  }}
                >
                  T HUB Phase 2, IIT Hyderabad Campus<br />
                  Kandi, Sangareddy, Telangana
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <Clock size={16} color="#f6584b" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#f6584b",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Doors Open
                </div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 14,
                    color: "#f4f3ef",
                    opacity: 0.55,
                    lineHeight: 1.65,
                  }}
                >
                  5:00 PM
                </p>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#f6584b",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                About
              </div>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 14,
                  color: "#f4f3ef",
                  opacity: 0.55,
                  lineHeight: 1.65,
                  maxWidth: 280,
                }}
              >
                India's largest innovation ecosystem — a fitting stage for this conversation.
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=T+HUB+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "Poppins, sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "#f4f3ef",
              border: "1px solid rgba(244,243,239,0.2)",
              padding: "14px 24px",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#f6584b";
              e.currentTarget.style.color = "#f6584b";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(244,243,239,0.2)";
              e.currentTarget.style.color = "#f4f3ef";
            }}
          >
            Get Directions
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}