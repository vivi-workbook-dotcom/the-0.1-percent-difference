import { motion } from "motion/react";
import { Youtube } from "lucide-react";

const YOUTUBE_LINK = "https://youtube.com/@theproductstreet?si=-5p58v__NIiE_GE-";

const sessions = [
  {
    src: "/pvs-gallery-1.png",
    label: "Panel",
    title: "AI Equation: Adoption, Economics & Judgement",
    area: "panel",
    pos: "center top",
    titleSize: "clamp(16px, 1.5vw, 20px)",
  },
  {
    src: "/firesidechat_2.JPG",
    label: "Fireside Chat",
    title: "Thinking in Systems. Building in Flows.",
    area: "fireside",
    pos: "center",
    titleSize: "clamp(13px, 1.1vw, 16px)",
  },
  {
    src: "/pvs-mahuya-talk.jpg",
    label: "Keynote",
    title: "I Asked AI. Then I Asked Humans. 20 Decisions. 20 Outcomes.",
    area: "mahuya",
    pos: "center top",
    titleSize: "clamp(13px, 1.1vw, 16px)",
  },
  {
    src: "/host_on_stage.jpg",
    label: "Founder's Note",
    title: "Founder's Note",
    area: "founder",
    pos: "center top",
    titleSize: "clamp(11px, 0.9vw, 13px)",
  },
];

export function Sessions() {
  return (
    <section
      id="sessions"
      style={{
        background: "#060606",
        padding: "120px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
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
              Sessions
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <h2 style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 900,
              color: "#f4f3ef",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: 0,
            }}>
              What happened<br />
              <span style={{ color: "#f6584b" }}>on the day</span>
            </h2>

            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "Poppins, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "#f4f3ef",
                opacity: 0.5,
                letterSpacing: "0.06em",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.5")}
            >
              <Youtube size={14} />
              Full recaps dropping on YouTube soon
            </a>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div
          className="sessions-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 3.2fr 1.8fr",
            gridTemplateRows: "320px 220px",
            gridTemplateAreas: `
              "panel fireside founder"
              "panel mahuya   founder"
            `,
            gap: 10,
          }}
        >
          {sessions.map((s, i) => (
            <motion.div
              key={s.area}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="session-card"
              style={{
                gridArea: s.area,
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Photo */}
              <img
                src={s.src}
                alt={s.label}
                className="session-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: s.pos,
                  display: "block",
                  filter: "brightness(0.75) saturate(0.85)",
                  transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1), filter 0.4s ease",
                }}
              />

              {/* Gradient overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                pointerEvents: "none",
              }} />

              {/* Label pill */}
              <div style={{
                position: "absolute",
                top: 16,
                left: 16,
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(244,243,239,0.12)",
                padding: "4px 10px",
              }}>
                <span style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#f6584b",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}>
                  {s.label}
                </span>
              </div>

              {/* Title */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "16px 18px",
              }}>
                <p style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: s.titleSize,
                  fontWeight: 800,
                  color: "#f4f3ef",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  margin: 0,
                }}>
                  {s.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .session-card:hover .session-img {
          transform: scale(1.04);
          filter: brightness(0.9) saturate(1) !important;
        }

        @media (max-width: 767px) {
          .sessions-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 220px 180px 180px !important;
            grid-template-areas:
              "panel    panel"
              "fireside mahuya"
              "founder  founder" !important;
          }
        }

        @media (max-width: 480px) {
          .sessions-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: 260px 200px 200px 160px !important;
            grid-template-areas:
              "panel"
              "fireside"
              "mahuya"
              "founder" !important;
          }
        }
      `}</style>
    </section>
  );
}
