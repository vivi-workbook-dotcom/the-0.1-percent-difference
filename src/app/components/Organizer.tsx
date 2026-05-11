import { Youtube, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const PHOTO_URL = "/vethavarshini.jpeg";

export function Organizer() {
  return (
    <section
      id="about"
      style={{
        background: "#060606",
        padding: "120px 40px",
        borderTop: "1px solid rgba(244,243,239,0.06)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 80 }}>
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
            Your Host
          </span>
        </div>

        {/* Two-col layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={PHOTO_URL}
                alt="VethaVarshini — Host, The Product Street"
                style={{
                  width: "100%",
                  height: "clamp(360px, 45vw, 560px)",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.85) contrast(1.05)",
                }}
              />
              {/* Coral gradient at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 120,
                  background: "linear-gradient(to top, rgba(246,88,75,0.12), transparent)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Name badge overlapping bottom */}
            <div
              style={{
                background: "#f6584b",
                padding: "16px 24px",
                display: "inline-block",
                marginTop: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 13,
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                VethaVarshini
              </span>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: 20 }}
          >
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "#f4f3ef",
                opacity: 0.3,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: 28,
              }}
            >
              Host · The Product Street
            </div>

            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(32px, 4.5vw, 58px)",
                fontWeight: 900,
                color: "#f4f3ef",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: 40,
              }}
            >
              Lead from wherever<br />
              <span style={{ color: "#f6584b" }}>you are.</span>
            </h2>

            {/* Pull quote */}
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(15px, 1.6vw, 18px)",
                fontWeight: 700,
                color: "#f4f3ef",
                lineHeight: 1.6,
                borderLeft: "2px solid #f6584b",
                paddingLeft: 20,
                marginBottom: 36,
                fontStyle: "italic",
              }}
            >
              "One gap runs through every conversation in tech and product: what
              people know, and what they're willing to act on — without waiting
              for the title, the moment, or the permission.{" "}
              <br />
              Hence this podcast. Hence this room."
            </p>

            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 15,
                color: "#f4f3ef",
                opacity: 0.55,
                lineHeight: 1.9,
                marginBottom: 24,
              }}
            >
              VethaVarshini is the creator and host of The Product Street:
              built for conversations about AI, leadership, and the kind of
              agency that doesn't wait for permission to activate.
            </p>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 15,
                color: "#f4f3ef",
                opacity: 0.55,
                lineHeight: 1.9,
                marginBottom: 24,
              }}
            >
              Her conversations with leaders from Microsoft, Google, Salesforce,
              ServiceNow and beyond keep arriving at the same place: that
              leadership isn't something you wait to be given a title for, and
              agency isn't something you earn through tenure.
            </p>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 15,
                color: "#f4f3ef",
                opacity: 0.55,
                lineHeight: 1.9,
                marginBottom: 48,
              }}
            >
              Most conversations in AI and product stop at the strategy. The
              Product Street starts at the person running it.
            </p>

            {/* Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                {
                  icon: <Youtube size={16} />,
                  label: "Listen to the Podcast",
                  sub: "@TheProductStreet",
                  href: "https://youtube.com/@TheProductStreet",
                },
                {
                  icon: <Linkedin size={16} />,
                  label: "Connect on LinkedIn",
                  sub: "/in/vethavarshini",
                  href: "https://linkedin.com/in/vethavarshini",
                },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 0",
                    borderBottom: "1px solid rgba(244,243,239,0.07)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    group: "true",
                  } as React.CSSProperties}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.borderBottomColor = "rgba(246,88,75,0.3)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.borderBottomColor = "rgba(244,243,239,0.07)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ color: "#f6584b" }}>{link.icon}</span>
                    <div>
                      <div
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#f4f3ef",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {link.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: 12,
                          color: "#f4f3ef",
                          opacity: 0.3,
                        }}
                      >
                        {link.sub}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} color="rgba(244,243,239,0.25)" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}