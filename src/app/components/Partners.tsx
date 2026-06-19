import { motion } from "motion/react";

function PartnerRow({ label, partners }: { label: string; partners: { name: string; logo: string }[] }) {
  return (
    <div>
      <div style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: 10,
        fontWeight: 600,
        color: "#f4f3ef",
        opacity: 0.25,
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        marginBottom: 28,
      }}>
        {label}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              width: 180,
              height: 90,
              border: "1px solid rgba(244,243,239,0.08)",
              background: "rgba(244,243,239,0.02)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              opacity: 0.7,
              transition: "opacity 0.2s ease, border-color 0.2s ease",
              boxSizing: "border-box",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(244,243,239,0.18)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.opacity = "0.7";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(244,243,239,0.08)";
            }}
          >
            <img
              src={p.logo}
              alt={p.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const communityPartners = [
  { name: "Community Partner 1", logo: "/partner-community-1.png" },
  { name: "Community Partner 2", logo: "/partner-community-2.png" },
  { name: "Community Partner 3", logo: "/partner-community-3.png" },
];

const fnbPartners = [
  { name: "F&B Partner 1", logo: "/partner-fnb-1.png" },
  { name: "F&B Partner 2", logo: "/partner-fnb-2.jpeg" },
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
        <PartnerRow label="Community Partners" partners={communityPartners} />

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(244,243,239,0.06)", margin: "56px 0" }} />

        {/* F&B Partners */}
        <PartnerRow label="F&B Partners" partners={fnbPartners} />
      </div>
    </section>
  );
}
