import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Theme() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const description = (
    <motion.p
      initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: 14,
        color: "#f4f3ef",
        opacity: 0.35,
        maxWidth: 340,
        lineHeight: 1.85,
        textAlign: isMobile ? "left" : "right",
      }}
    >
      Enterprise product leaders and startup builders — in one room.
    </motion.p>
  );

  return (
    <section
      id="theme"
      style={{
        background: "#000",
        padding: "120px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Top label row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: isMobile ? 32 : 80,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
              The Theme
            </span>
          </div>

          {!isMobile && description}
        </div>

        {/* ── Big headline ── */}
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
            marginBottom: 32,
            maxWidth: 700,
          }}
        >
          What does<br />
          <span style={{ color: "#f6584b" }}>'0.1%'</span> mean?
        </motion.h2>

        {isMobile && <div style={{ marginTop: 24, marginBottom: 8 }}>{description}</div>}

        {/* ── Context intro ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 15,
            color: "#f4f3ef",
            opacity: 0.45,
            lineHeight: 1.9,
            maxWidth: 640,
            marginBottom: 80,
          }}
        >
          The AI revolution rewards speed. Startups iterate in days, "fail fast," and out-innovate
          everyone. But legacy giants don't have the luxury of failing fast. And yet they have
          no choice but to catch up.
        </motion.p>

        {/* ── Tension divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(12px, 1.4vw, 16px)",
              fontWeight: 900,
              color: "#f4f3ef",
              opacity: 0.22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Move Fast
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(244,243,239,0.07)" }} />
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: "#f6584b",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "7px 18px",
              border: "1px solid rgba(246,88,75,0.35)",
              borderRadius: 2,
              whiteSpace: "nowrap",
            }}
          >
            vs
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(244,243,239,0.07)" }} />
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(12px, 1.4vw, 16px)",
              fontWeight: 900,
              color: "#f4f3ef",
              opacity: 0.22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Never Fail
          </span>
        </motion.div>

        {/* ── Contrast panels ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            background: "rgba(244,243,239,0.06)",
            gap: 1,
            marginBottom: 1,
          }}
        >
          {/* LEFT — Startup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ background: "#000", padding: "56px 48px" }}
          >
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                color: "#f4f3ef",
                opacity: 0.28,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                marginBottom: 36,
              }}
            >
              Startup
            </div>

            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(72px, 9vw, 104px)",
                fontWeight: 900,
                color: "#f4f3ef",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 10,
              }}
            >
              0.1%
            </div>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 12,
                color: "#f4f3ef",
                opacity: 0.28,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 40,
              }}
            >
              error rate
            </div>

            <div style={{ borderTop: "1px solid rgba(244,243,239,0.07)", paddingTop: 36 }}>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 15,
                  color: "#f4f3ef",
                  opacity: 0.5,
                  lineHeight: 1.85,
                  marginBottom: 28,
                }}
              >
                1,000 users.<br />
                <span style={{ opacity: 1, color: "#f4f3ef" }}>
                  = 1 person had a bad experience.
                </span>
              </p>
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  fontWeight: 900,
                  color: "#f4f3ef",
                  opacity: 0.28,
                  letterSpacing: "-0.02em",
                }}
              >
                "Acceptable."
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14 }}
            style={{ background: "#070403", padding: "56px 48px" }}
          >
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                color: "#f6584b",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                marginBottom: 36,
              }}
            >
              Enterprise
            </div>

            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(72px, 9vw, 104px)",
                fontWeight: 900,
                color: "#f6584b",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 10,
              }}
            >
              0.1%
            </div>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 12,
                color: "#f4f3ef",
                opacity: 0.28,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 40,
              }}
            >
              error rate
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(246,88,75,0.18)",
                paddingTop: 36,
              }}
            >
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 15,
                  color: "#f4f3ef",
                  opacity: 0.6,
                  lineHeight: 1.9,
                  marginBottom: 28,
                }}
              >
                = Millions in failed transactions.<br />
                = Thousands of people didn't get<br />
                &nbsp;&nbsp;&nbsp;their <strong style={{ color: "#f4f3ef" }}>paychecks on Friday.</strong>
              </p>
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  fontWeight: 900,
                  color: "#f6584b",
                  letterSpacing: "-0.02em",
                }}
              >
                "Catastrophic."
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Central question ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderTop: "1px solid rgba(244,243,239,0.06)",
            padding: "80px 0 0",
          }}
        >
          <blockquote
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(24px, 3.5vw, 46px)",
              fontWeight: 900,
              color: "#f4f3ef",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              maxWidth: 920,
              margin: 0,
            }}
          >
            "How do we give our Giants the soul of a startup —{" "}
            <span style={{ color: "#f6584b" }}>
              without losing the Trust it took 100 years to build?
            </span>"
          </blockquote>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 11,
              color: "#f4f3ef",
              opacity: 0.22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: 36,
            }}
          >
            The question this event is built to answer
          </p>
        </motion.div>

      </div>
    </section>
  );
}