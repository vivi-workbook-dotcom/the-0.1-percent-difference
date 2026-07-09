import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const DRIVE_LINK = "https://drive.google.com/drive/folders/1gc97zRC7oVuBsNJSLKE51JIJbU-AgIW1?usp=drive_link";

export function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        background: "#000",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
        paddingTop: 114,
      }}
    >
      {/* ── LEFT: text content ───────────────────────────────────── */}
      <div
        className="hero-content hero-left"
        style={{
          flex: "0 0 50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 56px 80px 40px",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
          maxWidth: 680,
        }}
      >
        {/* Eyelet */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}
        >
          <div style={{
            width: 32, height: 1,
            background: "#f6584b",
            boxShadow: "0 0 6px rgba(246,88,75,0.7)",
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: "#f6584b",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}>
            The Product Street Presents
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(36px, 5.5vw, 76px)",
            fontWeight: 900,
            color: "#f4f3ef",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            margin: 0,
          }}
        >
          <span style={{ opacity: 0.4, fontWeight: 500 }}>The</span>
          <br />
          <span>Product </span>
          <span style={{ color: "#f6584b", textShadow: "0 0 60px rgba(246,88,75,0.25)" }}>Velocity</span>
          <br />
          Summit
        </motion.h1>

        {/* Recap line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(12px, 1.1vw, 14px)",
            color: "#f4f3ef",
            opacity: 0.45,
            letterSpacing: "0.04em",
            marginTop: 24,
            marginBottom: 0,
            lineHeight: 1.6,
          }}
        >
          July 4, 2026 &nbsp;·&nbsp; T HUB, Hyderabad &nbsp;·&nbsp; That's a wrap. 🎉
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            height: 1,
            background: "rgba(244,243,239,0.08)",
            marginTop: 36,
            marginBottom: 36,
            transformOrigin: "left",
          }}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "Poppins, sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: "#000",
              background: "#f6584b",
              padding: "14px 28px",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderRadius: 2,
              position: "relative",
              overflow: "hidden",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e04e3d")}
            onMouseLeave={e => (e.currentTarget.style.background = "#f6584b")}
          >
            View All Photos & Videos
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* ── RIGHT: 2×2 photo collage ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="hero-right"
        style={{
          flex: "1 1 50%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 6,
          padding: "24px 40px 24px 0",
          boxSizing: "border-box",
          minHeight: 0,
        }}
      >
        {[
          { src: "/pvs-gallery-1.png", alt: "Panel discussion",     pos: "center top" },
          { src: "/pvs-hero.jpg",      alt: "Aerial stage view",    pos: "center 30%" },
          { src: "/pvs-gallery-2.jpg", alt: "Speaker on stage",     pos: "center"     },
          { src: "/pvs-fireside.jpg",  alt: "Fireside chat",        pos: "center top" },
        ].map((photo, i) => (
          <a
            key={i}
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="collage-photo"
            style={{ overflow: "hidden", display: "block", position: "relative" }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: photo.pos,
                display: "block",
                transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                filter: "brightness(0.88) saturate(0.9)",
              }}
            />
          </a>
        ))}
      </motion.div>

      <style>{`
        .collage-photo:hover img {
          transform: scale(1.04);
          filter: brightness(1) saturate(1) !important;
        }

        /* Mobile: stack vertically */
        @media (max-width: 767px) {
          .hero-section {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-left {
            flex: none !important;
            padding: 40px 20px 32px !important;
            max-width: 100% !important;
          }
          .hero-right {
            flex: none !important;
            height: 320px !important;
            padding: 0 20px 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
