import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const valueProps = [
  {
    num: "01",
    title: "High-intent audience",
    body: "Direct access to 100 senior product thinkers, operators, and founders — not a general-audience crowd.",
  },
  {
    num: "02",
    title: "Multi-channel visibility",
    body: "Brand presence across the event itself, social media amplification, and The Product Street podcast.",
  },
  {
    num: "03",
    title: "Curated introductions",
    body: "We make meaningful intros between sponsors and attendees — not just logo placement on a banner.",
  },
];

export function Sponsor() {
  return (
    <section
      id="sponsor"
      style={{
        background: "#000",
        padding: "120px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gold top edge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.4), transparent)",
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
            Partner With Us
          </span>
        </div>

        {/* Two col */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 80,
            marginBottom: 80,
          }}
        >
          {/* Left */}
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
              Become<br />a Sponsor
            </h2>

            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 15,
                color: "#f4f3ef",
                opacity: 0.5,
                lineHeight: 1.85,
                maxWidth: 400,
                marginBottom: 48,
              }}
            >
              100 carefully curated product thinkers, operators, and innovators in one room. If your brand belongs in that conversation, let's talk.
            </p>

            {/* Tiers */}
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 48,
              }}
            >
              {[
                { label: "Title Sponsor", highlight: true },
                { label: "Community Partner", highlight: false },
                { label: "Media Partner", highlight: false },
              ].map((tier, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: tier.highlight ? "#f5c518" : "#f4f3ef",
                    border: `1px solid ${tier.highlight ? "rgba(245,197,24,0.3)" : "rgba(244,243,239,0.1)"}`,
                    padding: "6px 14px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: tier.highlight ? 1 : 0.4,
                  }}
                >
                  {tier.label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 320 }}>
              {/* TODO: replace href with real Tally form link */}
              <a
                href="https://tally.so/r/PLACEHOLDER"
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
                  padding: "16px 20px",
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
                Apply to Sponsor
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>

          {/* Right: value props */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {valueProps.map((vp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  padding: "32px 0",
                  borderBottom: "1px solid rgba(244,243,239,0.07)",
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 11,
                    fontWeight: 900,
                    color: "#f6584b",
                    opacity: 0.5,
                    letterSpacing: "0.1em",
                    paddingTop: 3,
                  }}
                >
                  {vp.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#f4f3ef",
                      letterSpacing: "-0.01em",
                      marginBottom: 10,
                    }}
                  >
                    {vp.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 14,
                      color: "#f4f3ef",
                      opacity: 0.45,
                      lineHeight: 1.8,
                    }}
                  >
                    {vp.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}