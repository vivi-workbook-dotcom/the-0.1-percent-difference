import { motion } from "motion/react";

const communityPartners = [
  { name: "Community Partner 1", logo: "/partner-community-1.png" },
  { name: "Community Partner 2", logo: "/partner-community-2.png" },
  { name: "Community Partner 3", logo: "/partner-community-3.png" },
];

const fnbPartners = [
  { name: "F&B Partner 1", logo: "/partner-fnb-1.png" },
  { name: "F&B Partner 2", logo: "/partner-fnb-2.png" },
];

export function Partners() {
  return (
    <section
      id="partners"
      style={{
        background: "#060606",
        padding: "100px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 64 }}
        >
          <div className="accent-line" />
          <span style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: "#f6584b",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}>
            Partners
          </span>
        </motion.div>

        {/* Community Partners */}
        <div style={{ marginBottom: 64 }}>
          <div style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            color: "#f4f3ef",
            opacity: 0.25,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}>
            Community Partners
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 40,
          }}>
            {communityPartners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{
                    height: 40,
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.5,
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.5")}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: 1,
          background: "rgba(244,243,239,0.06)",
          marginBottom: 64,
        }} />

        {/* F&B Partners */}
        <div>
          <div style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            color: "#f4f3ef",
            opacity: 0.25,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}>
            F&B Partners
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 40,
          }}>
            {fnbPartners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{
                    height: 40,
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.5,
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.5")}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
