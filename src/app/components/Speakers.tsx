import { useState } from "react";
import { Linkedin, Lock } from "lucide-react";
import { motion } from "motion/react";

const confirmedSpeakers = [
  {
    name: "Varun Ande",
    title: "Head of Design",
    company: "Sarvam.ai",
    photo: "/speaker-varun.jpg",
    linkedin: "#",
    bio: "Varun leads design at one of India's most ambitious AI companies. He brings a rare lens to product velocity — one that balances speed of execution with the craft of great user experience. His work sits at the intersection of AI capability and human-centred design.",
  },
  {
    name: "Mahuya Ghosh",
    title: "Director & AI Strategist",
    company: "Dell",
    photo: "/speaker-mahuya.jpg",
    linkedin: "#",
    bio: "Mahuya has spent years helping one of the world's largest technology companies navigate the AI transition without losing what makes it trusted. Her perspective on enterprise-scale AI adoption is hard-won and deeply practical.",
  },
  {
    name: "Sanjay Mandava",
    title: "2x YC Founder & CEO",
    company: "Landeed (YC S22)",
    photo: "/speaker-sanjay.jpg",
    linkedin: "#",
    bio: "Sanjay has built and shipped products in some of the hardest regulatory environments in India. Backed by Y Combinator, his approach to moving fast without breaking trust is a masterclass in product velocity at the frontier.",
  },
  {
    name: "Saurav Basu",
    title: "Head of AI Labs",
    company: "ADP India, Ex-Microsoft",
    photo: "/speaker-saurav.jpg",
    linkedin: "#",
    bio: "Saurav runs AI Labs at ADP India and brings a builder's mindset to one of the world's most compliance-heavy industries. His experience at Microsoft and ADP gives him a uniquely grounded view of what it takes to ship AI products at enterprise scale.",
  },
];

const placeholderCount = 1;

export function Speakers() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

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
              Who's speaking
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
          className="speakers-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {confirmedSpeakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                border: "1px solid rgba(246,88,75,0.2)",
                background: "#080808",
                cursor: "pointer",
              }}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
            >
              {/* Photo + bio overlay */}
              <div style={{ position: "relative", overflow: "hidden", height: 340 }}>
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                    filter: activeIdx === i
                      ? "brightness(0.3) saturate(0.6)"
                      : "brightness(0.88) saturate(0.9)",
                    transition: "filter 0.4s ease",
                  }}
                />

                {/* Bio overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.72)",
                    padding: "28px 24px",
                    display: "flex",
                    alignItems: "flex-end",
                    transform: activeIdx === i ? "translateY(0)" : "translateY(100%)",
                    transition: "transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 13,
                      color: "#f4f3ef",
                      opacity: 0.85,
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {speaker.bio}
                  </p>
                </div>
              </div>

              {/* Always-visible bottom strip */}
              <div
                style={{
                  padding: "18px 20px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 12,
                  borderTop: "1px solid rgba(246,88,75,0.12)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#f4f3ef",
                      letterSpacing: "-0.01em",
                      marginBottom: 4,
                    }}
                  >
                    {speaker.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 11,
                      color: "#f4f3ef",
                      opacity: 0.4,
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
                      opacity: 0.8,
                      marginTop: 2,
                    }}
                  >
                    {speaker.company}
                  </div>
                </div>

                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{
                    color: "#f4f3ef",
                    opacity: 0.25,
                    transition: "opacity 0.2s ease",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.25")}
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Placeholder slot */}
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (confirmedSpeakers.length + i) * 0.08 }}
              style={{
                border: "1px solid rgba(244,243,239,0.07)",
                background: "#080808",
                position: "relative",
                overflow: "hidden",
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
                  height: 340,
                  background: "#0f0f0f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(244,243,239,0.05)",
                }}
              >
                <Lock size={20} color="rgba(244,243,239,0.12)" />
              </div>
              <div style={{ padding: "18px 20px 20px" }}>
                <div style={{ width: 80, height: 10, background: "#1a1a1a", borderRadius: 2, marginBottom: 10 }} />
                <div style={{ width: 120, height: 8, background: "#141414", borderRadius: 2 }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hint text */}
        <p style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 11,
          color: "#f4f3ef",
          opacity: 0.2,
          letterSpacing: "0.1em",
          marginTop: 20,
          textAlign: "right",
        }}>
          Hover a card to learn more
        </p>

        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: 48,
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
