import { motion } from "motion/react";
import { useEffect, useState } from "react";

const bubbles = [
  {
    label: "Product\nManagers",
    size: 220,
    border: "1.5px solid rgba(246,88,75,0.52)",
    bg: "radial-gradient(ellipse at 42% 38%, rgba(246,88,75,0.09) 0%, transparent 68%)",
    glow: "0 0 55px rgba(246,88,75,0.09)",
    fontSize: 14,
    top: 10,
    left: "2%",
    animateY: [0, -22, 0],
    animateX: [0, 5, 0],
    duration: 5.2,
    delay: 0,
  },
  {
    label: "Curious\nthinkers\n& builders",
    size: 205,
    border: "1.5px solid rgba(245,197,24,0.48)",
    bg: "radial-gradient(ellipse at 46% 40%, rgba(245,197,24,0.07) 0%, transparent 68%)",
    glow: "0 0 50px rgba(245,197,24,0.08)",
    fontSize: 13,
    top: 0,
    left: "30%",
    animateY: [0, 20, 0],
    animateX: [0, -8, 0],
    duration: 6.1,
    delay: 1.2,
  },
  {
    label: "Startup\nfounders\n& operators",
    size: 230,
    border: "1.5px solid rgba(59,130,246,0.5)",
    bg: "radial-gradient(ellipse at 50% 42%, rgba(59,130,246,0.08) 0%, transparent 68%)",
    glow: "0 0 50px rgba(59,130,246,0.09)",
    fontSize: 13,
    top: 30,
    left: "60%",
    animateY: [0, -17, 0],
    animateX: [0, 7, 0],
    duration: 6.8,
    delay: 0.5,
  },
  {
    label: "Intrapreneurs",
    size: 210,
    border: "1.5px solid rgba(139,92,246,0.5)",
    bg: "radial-gradient(ellipse at 55% 45%, rgba(139,92,246,0.08) 0%, transparent 68%)",
    glow: "0 0 50px rgba(139,92,246,0.09)",
    fontSize: 14,
    top: 280,
    left: "12%",
    animateY: [0, 18, 0],
    animateX: [0, -6, 0],
    duration: 7.2,
    delay: 1.8,
  },
  {
    label: "Product designers\n& Design leaders",
    size: 250,
    border: "1.5px solid rgba(20,184,166,0.5)",
    bg: "radial-gradient(ellipse at 50% 42%, rgba(20,184,166,0.08) 0%, transparent 68%)",
    glow: "0 0 50px rgba(20,184,166,0.09)",
    fontSize: 12,
    top: 250,
    left: "48%",
    animateY: [0, -14, 0],
    animateX: [0, 9, 0],
    duration: 5.9,
    delay: 0.9,
  },
];

export function WhoShouldAttend() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="attend"
      style={{
        background: "#060606",
        padding: "120px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 80,
          }}
        >
          <div>
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
                Who Should Attend
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
              This room<br />is curated.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 16,
              color: "#f4f3ef",
              opacity: 0.45,
              maxWidth: 340,
              lineHeight: 1.85,
              alignSelf: "flex-end",
            }}
          >
            We're bringing together people navigating the intersection of startup thinking and enterprise reality.
          </motion.p>
        </div>

        {/* ── Bubble field ── */}
        <div
          style={{
            position: "relative",
            height: isMobile ? "auto" : 560,
            display: isMobile ? "flex" : "block",
            flexWrap: isMobile ? "wrap" : undefined,
            gap: isMobile ? 20 : undefined,
            justifyContent: isMobile ? "center" : undefined,
            alignItems: isMobile ? "center" : undefined,
            paddingBottom: isMobile ? 8 : 0,
          }}
        >
          {bubbles.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: isMobile ? "relative" : "absolute",
                top: isMobile ? undefined : b.top,
                left: isMobile ? undefined : b.left,
              }}
            >
              {/* Inner: continuous float */}
              <motion.div
                animate={{ y: b.animateY, x: b.animateX }}
                transition={{
                  duration: b.duration,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: b.delay,
                }}
                style={{
                  width: b.size,
                  height: b.size,
                  borderRadius: "50%",
                  border: b.border,
                  background: b.bg,
                  boxShadow: b.glow,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "default",
                }}
                whileHover={{ scale: 1.06 }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: b.fontSize,
                    fontWeight: 800,
                    color: "#f4f3ef",
                    textAlign: "center",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.45,
                    whiteSpace: "pre-line",
                    padding: "0 20px",
                    userSelect: "none",
                  }}
                >
                  {b.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}