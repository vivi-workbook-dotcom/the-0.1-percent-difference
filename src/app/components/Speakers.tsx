import { useState } from "react";
import { Linkedin, Lock } from "lucide-react";
import { motion } from "motion/react";

const confirmedSpeakers = [
  {
    name: "Varun Ande",
    title: "Head of Design",
    company: "Sarvam.ai",
    photo: "/speaker-varun.jpg",
    linkedin: "https://www.linkedin.com/in/ande-varun-345888138/",
    bio: "Head of Design at Sarvam.ai — India's first full-stack AI platform. He's shaping how millions of Indians will experience AI in their own languages, making cutting-edge technology feel native rather than imported.",
  },
  {
    name: "Mahuya Ghosh",
    title: "Director & AI Strategist",
    company: "Dell",
    photo: "/speaker-mahuya.jpg",
    linkedin: "https://www.linkedin.com/in/mahuyaghosh/",
    bio: "18 years building B2B and SaaS platforms across global markets. She holds 10 US patents spanning AI-driven optimization and applied ML, and is co-author of Mystery to Mastery. Advisor to IIIT-H, IIM Jammu, and Product School — recognised by Indus OS and Woxsen University.",
  },
  {
    name: "Sanjay Mandava",
    title: "2x YC Founder & CEO",
    company: "Landeed (YC S22)",
    photo: "/speaker-sanjay.jpg",
    linkedin: "https://www.linkedin.com/in/sanjay-mandava-%F0%9F%A6%88-2066aa24/",
    bio: "2x YC-backed founder — GoLorry and now Landeed. Before startups, he traded at investment management firms. Today he's building India's fastest property title search engine, with ambitions to expand across the developing world.",
    ycLink: "https://www.ycombinator.com/companies/landeed",
  },
  {
    name: "Saurav Basu",
    title: "Head of AI Labs",
    company: "ADP India, Ex-Microsoft",
    photo: "/speaker-saurav.jpg",
    linkedin: "https://www.linkedin.com/in/saurav-basu-276b4930/",
    bio: "Leads the AI Lab at ADP India, working to transform 100+ legacy products into an AI-native experience using Agentic AI. Previously at Microsoft, where he led ML for Bing ad recommendations. Before that, IBM Research — statistical machine learning and distributed optimisation.",
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

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      color: "#0A66C2",
                      opacity: 0.6,
                      transition: "opacity 0.2s ease",
                      marginTop: 2,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "0.6")}
                  >
                    <Linkedin size={15} />
                  </a>
                  {"ycLink" in speaker && speaker.ycLink && (
                    <a
                      href={speaker.ycLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      title="Y Combinator"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 18,
                        height: 18,
                        background: "#FF6600",
                        borderRadius: 3,
                        textDecoration: "none",
                        opacity: 0.7,
                        transition: "opacity 0.2s ease",
                        flexShrink: 0,
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
                    >
                      <span style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: 9,
                        fontWeight: 900,
                        color: "#fff",
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                      }}>YC</span>
                    </a>
                  )}
                </div>
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
