import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const DRIVE_LINK = "https://drive.google.com/drive/folders/1gc97zRC7oVuBsNJSLKE51JIJbU-AgIW1?usp=drive_link";

const filmStrip = [
  { src: "/pvs-gallery-1.png", alt: "Panel discussion" },
  { src: "/pvs-gallery-2.jpg", alt: "Opening remarks on stage" },
  { src: "/pvs-gallery-3.jpg", alt: "Fireside chat" },
];

export function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingTop: 114,
      }}
    >
      {/* Full-bleed hero photo */}
      <img
        src="/pvs-hero.jpg"
        alt="Product Velocity Summit"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
          zIndex: 0,
        }}
      />

      {/* Dark gradient overlay — heavier at top and bottom for text legibility */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)",
        zIndex: 1,
      }} />

      {/* Main content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px 56px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Eyelet */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}
        >
          <div style={{
            width: 32, height: 1,
            background: "#f6584b",
            boxShadow: "0 0 6px rgba(246,88,75,0.7)",
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
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(40px, 6.5vw, 86px)",
            fontWeight: 900,
            color: "#f4f3ef",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            marginBottom: 0,
          }}
        >
          <span style={{ opacity: 0.45, fontWeight: 500 }}>The</span>
          <br />
          <span>Product </span>
          <span style={{ color: "#f6584b", textShadow: "0 0 80px rgba(246,88,75,0.35)" }}>Velocity</span>
          <br />
          Summit
        </motion.h1>

        {/* Recap line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            color: "#f4f3ef",
            opacity: 0.55,
            letterSpacing: "0.04em",
            marginTop: 20,
            marginBottom: 0,
          }}
        >
          July 4, 2026 · T HUB, Hyderabad · That's a wrap. 🎉
        </motion.p>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{ marginTop: 32 }}
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
              padding: "13px 28px",
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

        {/* Film strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            marginTop: 48,
            display: "flex",
            gap: 8,
            alignItems: "stretch",
          }}
          className="hero-film-strip"
        >
          {filmStrip.map((photo, i) => (
            <a
              key={i}
              href={DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                height: 180,
                overflow: "hidden",
                display: "block",
                position: "relative",
                border: "1px solid rgba(244,243,239,0.1)",
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(246,88,75,0.4)";
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(244,243,239,0.1)";
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  filter: "brightness(0.8) saturate(0.9)",
                  transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), filter 0.3s ease",
                }}
              />
            </a>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-film-strip { gap: 4px !important; }
          .hero-film-strip a { height: 110px !important; }
        }
      `}</style>
    </section>
  );
}
