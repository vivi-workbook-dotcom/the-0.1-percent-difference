import { motion } from "motion/react";

const partners = [
  {
    src: "/boringfoods.jpg",
    name: "The Boring Foods Co.",
    href: "https://boringfoodscompany.com/",
    rotate: "-3deg",
    offsetY: 0,
    size: 260,
  },
  {
    src: "/hydrakombucha.png",
    name: "Hydra Kombucha",
    href: "https://www.hydrakombucha.com/",
    rotate: "2deg",
    offsetY: 48,
    size: 240,
  },
  {
    src: "/yogurt_alley.png",
    name: "Yogurt Alley",
    href: undefined,
    rotate: "-1.5deg",
    offsetY: 16,
    size: 280,
  },
  {
    src: "/wholy.png",
    name: "Wholy",
    href: undefined,
    rotate: "3deg",
    offsetY: 32,
    size: 250,
  },
  {
    src: "/briks.jpg",
    name: "Briks",
    href: undefined,
    rotate: "-2deg",
    offsetY: 8,
    size: 240,
  },
];

export function FoodPartners() {
  return (
    <section
      id="food-partners"
      style={{
        background: "#060606",
        padding: "120px 40px 140px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div className="accent-line" />
            <span style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: "#f6584b",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}>
              F&B Partners
            </span>
          </div>
          <h2 style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(36px, 5.5vw, 72px)",
            fontWeight: 900,
            color: "#f4f3ef",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            margin: 0,
          }}>
            Fuelled by<br />
            <span style={{ color: "#f6584b" }}>good taste</span>
          </h2>
          <p style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 13,
            color: "#f4f3ef",
            opacity: 0.35,
            marginTop: 20,
            letterSpacing: "0.03em",
            lineHeight: 1.6,
          }}>
            The brands that kept our attendees fuelled — and honestly, stole the show.
          </p>
        </motion.div>

        {/* Polaroid scatter */}
        <div
          className="polaroid-strip"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 28,
            flexWrap: "wrap",
          }}
        >
          {partners.map((p, i) => {
            const card = (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40, rotate: p.rotate }}
                whileInView={{ opacity: 1, y: p.offsetY, rotate: p.rotate }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ rotate: "0deg", y: (p.offsetY as number) - 12, transition: { duration: 0.3 } }}
                style={{
                  background: "#fff",
                  padding: "12px 12px 48px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3)",
                  width: p.size,
                  flexShrink: 0,
                  cursor: p.href ? "pointer" : "default",
                  position: "relative",
                }}
              >
                <img
                  src={p.src}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: p.size - 20,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <span style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#111",
                    letterSpacing: "0.04em",
                    textAlign: "center",
                  }}>
                    {p.name}
                  </span>
                </div>
              </motion.div>
            );

            return p.href ? (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
                {card}
              </a>
            ) : (
              <div key={p.name}>{card}</div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .polaroid-strip {
            gap: 20px !important;
          }
          .polaroid-strip > * {
            width: calc(50% - 12px) !important;
            min-width: 140px !important;
          }
        }
        @media (max-width: 480px) {
          .polaroid-strip > * {
            width: calc(50% - 10px) !important;
          }
        }
      `}</style>
    </section>
  );
}
