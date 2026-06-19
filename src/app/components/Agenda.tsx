import { Linkedin } from "lucide-react";
import { motion } from "motion/react";

const items = [
  {
    time: "4:30 PM",
    tag: "Check-In",
    title: "Doors Open & Check-In",
    desc: "",
    duration: "30 min",
    speakers: [],
  },
  {
    time: "5:00 PM",
    tag: "Opening",
    title: "Opening Welcome",
    desc: "",
    duration: "15 min",
    speakers: [{ name: "Jay Bhanushali", role: "MC · Product Velocity Summit", linkedin: "https://www.linkedin.com/in/jaybhanushaliatwork/" }],
  },
  {
    time: "5:15 PM",
    tag: "Opening",
    title: "Opening Remarks",
    desc: "",
    duration: "15 min",
    speakers: [{ name: "VethaVarshini", role: "Founder · The Product Street" }],
  },
  {
    time: "5:30 PM",
    tag: "Keynote",
    title: "\"I Asked AI. Then I Asked Humans. 20 Decisions. 20 Outcomes. ...That Changed My Mind.\"",
    desc: "",
    duration: "30 min",
    speakers: [{ name: "Mahuya Ghosh", role: "Director & AI Strategist · Dell Technologies" }],
  },
  {
    time: "6:00 PM",
    tag: "Fireside Chat",
    title: "\"Think in Systems, Build in Flows\"",
    desc: "",
    duration: "30 min",
    speakers: [{ name: "Adith Narein", role: "Design Engineer · Sarvam.ai" }],
  },
  {
    time: "6:30 PM",
    tag: "Lightning",
    title: "⚡ Lightning Round",
    desc: "Surprise Session",
    duration: "30 min",
    speakers: [],
  },
  {
    time: "7:00 PM",
    tag: "Panel",
    title: "Panel Discussion",
    desc: "\"The AI Equation: Adoption, Economics & Humans\"",
    duration: "30 min",
    speakers: [
      { name: "Sanjay Mandava", role: "CEO · Landeed (YC S22)" },
      { name: "Saurav Basu", role: "Head of AI Labs · ADP India" },
      { name: "Deepak Menon", role: "VP, Product Experiences · Microsoft" },
    ],
  },
  {
    time: "7:30 PM",
    tag: "Network",
    title: "Curated Networking",
    desc: "Themed stations + refreshments. Come with a business card, leave with a collaborator.",
    duration: "60 min",
    speakers: [],
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
            July 4, 2026 · 4:30 PM – 8:30 PM · T HUB, Hyderabad
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

            {/* Title + desc + speakers */}
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
              {item.speakers.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                  {item.speakers.map((s, si) => (
                    <div
                      key={si}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: s.name === "TBC"
                          ? "rgba(244,243,239,0.04)"
                          : "rgba(246,88,75,0.07)",
                        border: s.name === "TBC"
                          ? "1px solid rgba(244,243,239,0.1)"
                          : "1px solid rgba(246,88,75,0.18)",
                        padding: "4px 10px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          color: s.name === "TBC" ? "#f4f3ef" : "#f6584b",
                          opacity: s.name === "TBC" ? 0.3 : 1,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {s.name}
                      </span>
                      {s.role && (
                        <span
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: 10,
                            color: "#f4f3ef",
                            opacity: 0.3,
                            letterSpacing: "0.01em",
                          }}
                        >
                          · {s.role}
                        </span>
                      )}
                      {"linkedin" in s && s.linkedin && (
                        <a
                          href={s.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          style={{ color: "#0A66C2", opacity: 0.7, display: "flex", alignItems: "center", marginLeft: 2 }}
                          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                          onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
                        >
                          <Linkedin size={11} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
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