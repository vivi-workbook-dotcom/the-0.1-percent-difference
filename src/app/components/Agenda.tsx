import { motion } from "motion/react";

const items = [
  {
    time: "5:00 PM",
    tag: "Opening",
    title: "Welcome & Keynote",
    desc: "Opening remarks and scene-setting by host. Why this conversation matters right now.",
    duration: "20 min",
  },
  {
    time: "5:20 PM",
    tag: "Interview",
    title: "Live Interview",
    desc: "A sit-down conversation between the host and a featured guest on the 0.1% difference.",
    duration: "30 min",
  },
  {
    time: "5:50 PM",
    tag: "Talk",
    title: "Lightning Talk",
    desc: "One speaker. One sharp idea. 20–30 minutes to change how you see your work.",
    duration: "20–30 min",
  },
  {
    time: "6:20 PM",
    tag: "Panel",
    title: "Fireside Chat",
    desc: "2–3 speakers. No slides. Moderated conversation on the tensions, trade-offs, and truths of the startup-legacy intersection.",
    duration: "40 min",
  },
  {
    time: "7:00 PM",
    tag: "Network",
    title: "Curated Networking",
    desc: "Not a chaotic mixer. A structured wind-down where conversations go deeper.",
    duration: "60 min",
  },
  {
    time: "8:00 PM",
    tag: "Close",
    title: "Close",
    desc: "See you on the other side.",
    duration: "",
  },
];

export function Agenda() {
  return (
    <section
      id="agenda"
      style={{
        background: "#000",
        padding: "120px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
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
            The Agenda
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 80,
          }}
        >
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
            What's happening<br />on the day
          </motion.h2>

          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 13,
              color: "#f4f3ef",
              opacity: 0.35,
              letterSpacing: "0.05em",
            }}
          >
            July 7, 2026 · 5 PM – 8 PM · T HUB, Hyderabad
          </p>
        </div>

        {/* Agenda table */}
        {/* Header row */}
        <div
          className="agenda-header-row"
          style={{
            display: "grid",
            gridTemplateColumns: "140px 100px 1fr auto",
            gap: 32,
            padding: "0 0 16px",
            borderBottom: "1px solid rgba(244,243,239,0.1)",
            marginBottom: 0,
          }}
        >
          {["Time", "Format", "Session", "Duration"].map((h, i) => (
            <span
              key={i}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                color: "#f4f3ef",
                opacity: 0.25,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textAlign: i === 3 ? "right" : "left",
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="agenda-row"
            style={{
              display: "grid",
              gridTemplateColumns: "140px 100px 1fr auto",
              gap: 32,
              padding: "28px 0",
              borderBottom: "1px solid rgba(244,243,239,0.06)",
              alignItems: "center",
              transition: "background 0.2s",
              cursor: "default",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(246,88,75,0.03)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            {/* Time */}
            <span
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: 15,
                fontWeight: 800,
                color: "#f6584b",
                letterSpacing: "0.02em",
              }}
            >
              {item.time}
            </span>

            {/* Tag */}
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "#f4f3ef",
                opacity: 0.35,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {item.tag}
            </span>

            {/* Title + desc */}
            <div>
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(15px, 1.6vw, 18px)",
                  fontWeight: 800,
                  color: "#f4f3ef",
                  marginBottom: 6,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13,
                  color: "#f4f3ef",
                  opacity: 0.4,
                  lineHeight: 1.7,
                  maxWidth: 520,
                }}
              >
                {item.desc}
              </div>
            </div>

            {/* Duration */}
            {item.duration && (
              <span
                className="agenda-duration"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 12,
                  color: "#f4f3ef",
                  opacity: 0.3,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                }}
              >
                {item.duration}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}