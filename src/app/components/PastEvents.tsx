import { motion } from "motion/react";

// 4-col editorial grid, 3 rows
const gridItems = [
  {
    src: "/past-1.png",
    alt: "Panel discussion on stage at The Product Street",
    gridColumn: "1 / 3",
    gridRow: "1 / 2",
  },
  {
    src: "/past-5.jpeg",
    alt: "Attendees at The Product Street photo booth",
    gridColumn: "3 / 5",
    gridRow: "1 / 2",
  },
  {
    src: "/past-2.png",
    alt: "Full audience at The Product Street event",
    gridColumn: "1 / 2",
    gridRow: "2 / 3",
  },
  {
    src: "/past-3.png",
    alt: "Engaged attendees during a session",
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
  },
  {
    src: "/past-4.jpeg",
    alt: "Speaker dinner and community gathering",
    gridColumn: "3 / 5",
    gridRow: "2 / 3",
  },
  {
    src: "/past-6.jpeg",
    alt: "Community moments at The Product Street",
    gridColumn: "1 / 3",
    gridRow: "3 / 4",
  },
  {
    src: "/past-7.jpeg",
    alt: "Behind the scenes at The Product Street",
    gridColumn: "3 / 5",
    gridRow: "3 / 4",
  },
];

export function PastEvents() {
  return (
    <section
      id="past-events"
      style={{
        background: "#060606",
        padding: "120px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 64,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
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
                Past Events
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(36px, 6vw, 80px)",
                fontWeight: 900,
                color: "#f4f3ef",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              We've done<br />
              this before.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 15,
              color: "#f4f3ef",
              opacity: 0.4,
              maxWidth: 320,
              lineHeight: 1.85,
              textAlign: "right",
            }}
          >
            Every edition ends with people still talking in the parking lot.
            {" "}<span className="sparkle-gold">✦</span>
          </motion.p>
        </div>

        {/* Collage grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="past-events-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "300px 210px 240px",
            gap: 6,
          }}
        >
          {gridItems.map((item, i) => (
            <div
              key={i}
              style={{
                gridColumn: item.gridColumn,
                gridRow: item.gridRow,
                overflow: "hidden",
                position: "relative",
                background: "#111",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  transition: "transform 0.65s ease, filter 0.4s ease",
                  filter: "brightness(0.78) saturate(0.82)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.045)";
                  e.currentTarget.style.filter = "brightness(0.92) saturate(1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "brightness(0.78) saturate(0.82)";
                }}
              />
              {/* Coral gradient lift at bottom */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(246,88,75,0.18) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 12,
            color: "#f4f3ef",
            opacity: 0.2,
            textAlign: "center",
            marginTop: 24,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Moments from The Product Street community
        </motion.p>

      </div>
    </section>
  );
}