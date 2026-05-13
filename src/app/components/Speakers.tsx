import { Lock } from "lucide-react";
import { motion } from "motion/react";

const confirmedSpeakers = [
  {
    name: "Varun Ande",
    title: "Head of Design",
    company: "Sarvam.ai",
    photo: "/speaker-varun.jpeg",
  },
  {
    name: "Mahuya Ghosh",
    title: "Director & AI Strategist",
    company: "Dell",
    photo: "/speaker-mahuya.jpg",
  },
];

const placeholderCount = 4;

export function Speakers() {
  return (
    <section
      id="speakers"
      style={{
        background: "#000",
        padding: "120px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
        overflow: "hidden",
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
            marginBottom: 72,
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
                Speakers
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
              The voices<br />in the room
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(15px, 1.8vw, 20px)",
              fontWeight: 700,
              color: "#f4f3ef",
              opacity: 0.3,
              maxWidth: 360,
              lineHeight: 1.5,
              textAlign: "right",
              letterSpacing: "-0.01em",
            }}
          >
            We're bringing in people who've lived this. Not theorists.
          </motion.p>
        </div>

        {/* Speaker cards */}
        <div
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            paddingBottom: 8,
            scrollSnapType: "x mandatory",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {/* Confirmed speakers */}
          {confirmedSpeakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                minWidth: 200,
                flexShrink: 0,
                scrollSnapAlign: "start",
                border: "1px solid rgba(246,88,75,0.2)",
                position: "relative",
                overflow: "hidden",
                background: "#080808",
              }}
            >
              <img
                src={speaker.photo}
                alt={speaker.name}
                style={{
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  filter: "brightness(0.88) saturate(0.9)",
                }}
              />
              <div style={{ padding: "20px 20px 24px" }}>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#f4f3ef",
                    letterSpacing: "-0.01em",
                    marginBottom: 6,
                  }}
                >
                  {speaker.name}
                </div>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 11,
                    color: "#f4f3ef",
                    opacity: 0.45,
                    lineHeight: 1.5,
                  }}
                >
                  {speaker.title}
                </div>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 11,
                    color: "#f6584b",
                    opacity: 0.7,
                    marginTop: 4,
                  }}
                >
                  {speaker.company}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Placeholder slots */}
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (confirmedSpeakers.length + i) * 0.08 }}
              style={{
                minWidth: 200,
                flexShrink: 0,
                scrollSnapAlign: "start",
                border: "1px solid rgba(244,243,239,0.07)",
                position: "relative",
                overflow: "hidden",
                background: "#080808",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2.5s infinite",
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: 240,
                  background: "#0f0f0f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(244,243,239,0.05)",
                }}
              >
                <Lock size={20} color="rgba(244,243,239,0.12)" />
              </div>
              <div style={{ padding: "20px 20px 24px" }}>
                <div style={{ width: 80, height: 10, background: "#1a1a1a", borderRadius: 2, marginBottom: 10 }} />
                <div style={{ width: 120, height: 8, background: "#141414", borderRadius: 2 }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: 60,
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            border: "1px solid rgba(246,88,75,0.2)",
            padding: "16px 28px",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#f6584b",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 13,
              color: "#f4f3ef",
              opacity: 0.6,
              letterSpacing: "0.05em",
            }}
          >
            Speaker announcements dropping soon — follow{" "}
            <a
              href="https://youtube.com/@TheProductStreet"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f6584b", textDecoration: "none" }}
            >
              @TheProductStreet
            </a>
          </span>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
