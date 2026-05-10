import { motion } from "motion/react";

// TODO: Replace these with your actual podcast photos.
// Drop 12 landscape (16:9) images into /public/ named photo-1.jpg through photo-12.jpg
// They will auto-populate the strip below.
const PHOTO_COUNT = 12;
const photos = Array.from({ length: PHOTO_COUNT }, (_, i) => ({
  id: i + 1,
  src: `/photo-${i + 1}.jpg`,
  alt: `The Product Street — Episode Still ${i + 1}`,
}));

// Topics discussed on the podcast — varying visual weights
const topics: { label: string; size: "xl" | "lg" | "md" | "sm"; coral?: boolean }[] = [
  { label: "Prompt Anxiety", size: "xl", coral: true },
  { label: "Your team's sustainable velocity", size: "xl", coral: true },
  { label: "Waiting for Permission", size: "xl" },
  { label: "\"I don't know, but we'll figure it out.\"", size: "xl" },
  { label: "Loyalty vs Job-Hopping", size: "lg" },
  { label: "Manager or Leader?", size: "lg" },
  { label: "Allyship vs Conditioning", size: "md" },
  { label: "Storytelling in the Age of AI", size: "md" },
  { label: "Empathy with Authority", size: "md" },
  { label: "Self-Leadership", size: "sm" },
  { label: "Leading Under Constraint", size: "sm" },
  { label: "The 0.1% Difference", size: "sm" },
];

const sizeStyles: Record<string, { fontSize: string; fontWeight: number; opacity: number }> = {
  xl: { fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, opacity: 1 },
  lg: { fontSize: "clamp(20px, 2.8vw, 38px)", fontWeight: 700, opacity: 0.75 },
  md: { fontSize: "clamp(15px, 2vw, 26px)", fontWeight: 600, opacity: 0.5 },
  sm: { fontSize: "clamp(12px, 1.4vw, 18px)", fontWeight: 500, opacity: 0.3 },
};

// Duplicate array for seamless infinite loop
const loopedPhotos = [...photos, ...photos];

export function PodcastStills() {
  return (
    <section
      id="podcast"
      style={{
        background: "#000",
        padding: "120px 0",
        borderTop: "1px solid rgba(244,243,239,0.06)",
        overflow: "hidden",
      }}
    >
      {/* Section label */}
      <div
        style={{
          padding: "0 40px",
          maxWidth: 1280,
          margin: "0 auto 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
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
            The Show
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(32px, 4.5vw, 60px)",
            fontWeight: 900,
            color: "#f4f3ef",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          Inside{" "}
          <span style={{ color: "#f6584b" }}>The Product Street</span>
        </motion.h2>
      </div>

      {/* ── Scrolling Film Strip ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          marginBottom: 80,
        }}
      >
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to right, #000, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to left, #000, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <style>{`
          @keyframes filmScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .film-strip {
            display: flex;
            gap: 16px;
            width: max-content;
            animation: filmScroll 40s linear infinite;
          }
          .film-strip:hover {
            animation-play-state: paused;
          }
          .film-frame {
            flex-shrink: 0;
            width: 320px;
            height: 180px;
            overflow: hidden;
            position: relative;
          }
          .film-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            filter: brightness(0.82) contrast(1.08) saturate(0.9);
            transition: filter 0.3s ease;
          }
          .film-frame:hover img {
            filter: brightness(0.95) contrast(1.05) saturate(1.1);
          }
          .film-placeholder {
            width: 100%;
            height: 100%;
            background: #111;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(244,243,239,0.07);
          }
        `}</style>

        <div className="film-strip">
          {loopedPhotos.map((photo, idx) => (
            <div key={`${photo.id}-${idx}`} className="film-frame">
              <img
                src={photo.src}
                alt={photo.alt}
                onError={(e) => {
                  // Show placeholder if image not found
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector(".film-placeholder")) {
                    const placeholder = document.createElement("div");
                    placeholder.className = "film-placeholder";
                    placeholder.innerHTML = `
                      <span style="font-family:Poppins,sans-serif;font-size:11px;color:rgba(244,243,239,0.2);letter-spacing:0.2em;text-transform:uppercase;">Photo ${photo.id}</span>
                      <span style="font-family:Poppins,sans-serif;font-size:10px;color:rgba(244,243,239,0.1);margin-top:6px;">/public/photo-${photo.id}.jpg</span>
                    `;
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Topic Cloud ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          padding: "0 40px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: "#f4f3ef",
            opacity: 0.25,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Conversations we've had
        </div>

        {/* Flowing topic tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            gap: "8px 28px",
            lineHeight: 1.2,
          }}
        >
          {topics.map((topic, i) => (
            <motion.span
              key={topic.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: sizeStyles[topic.size].opacity, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.055,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: sizeStyles[topic.size].fontSize,
                fontWeight: sizeStyles[topic.size].fontWeight,
                color: topic.coral ? "#f6584b" : "#f4f3ef",
                letterSpacing: "-0.02em",
                cursor: "default",
                transition: "opacity 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.color = "#f6584b";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = String(
                  sizeStyles[topic.size].opacity
                );
                (e.currentTarget as HTMLElement).style.color =
                  topic.coral ? "#f6584b" : "#f4f3ef";
              }}
            >
              {topic.label}
            </motion.span>
          ))}
        </div>

        {/* Divider line */}
        <div
          style={{
            marginTop: 64,
            height: 1,
            background:
              "linear-gradient(to right, rgba(246,88,75,0.4), rgba(244,243,239,0.06) 60%, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}