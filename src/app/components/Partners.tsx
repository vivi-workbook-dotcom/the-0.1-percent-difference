import { motion } from "motion/react";

const communityPartners = [
  { name: "Renaissance", logo: "/partner-community-1.png", url: "https://www.instagram.com/therenaissance.in/" },
  { name: "Baseline", logo: "/partner-community-2.png", url: "https://www.instagram.com/baseline.des/" },
  { name: "Communitie", logo: "/partner-community-3.png", url: "https://communitie.in/" },
];

const fnbPartners = [
  { name: "The Boring Foods Company", logo: "/partner-fnb-1.png", url: "https://boringfoodscompany.com/" },
  { name: "Hydra Kombucha", logo: "/partner-fnb-2.jpeg", url: "https://www.hydrakombucha.com/" },
];

// Duplicate items so the marquee loops seamlessly
function MarqueeRow({ partners, reverse = false }: { partners: typeof communityPartners; reverse?: boolean }) {
  const items = [...partners, ...partners, ...partners];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        className={reverse ? "marquee-track marquee-reverse" : "marquee-track"}
        style={{ display: "flex", gap: 20, width: "max-content" }}
      >
        {items.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 220,
              height: 100,
              flexShrink: 0,
              background: "rgba(244,243,239,0.03)",
              border: "1px solid rgba(244,243,239,0.08)",
              padding: "20px 28px",
              boxSizing: "border-box",
              textDecoration: "none",
              transition: "background 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(246,88,75,0.06)";
              e.currentTarget.style.borderColor = "rgba(246,88,75,0.25)";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(244,243,239,0.03)";
              e.currentTarget.style.borderColor = "rgba(244,243,239,0.08)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={p.logo}
              alt={p.name}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block", opacity: 0.85 }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section
      id="partners"
      style={{
        background: "#060606",
        padding: "100px 0",
        borderTop: "1px solid rgba(244,243,239,0.06)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 16 }}
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
              Partners
            </span>
          </div>
          <h2 style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(30px, 4vw, 56px)",
            fontWeight: 900,
            color: "#f4f3ef",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            margin: 0,
          }}>
            Made possible by
          </h2>
        </motion.div>
      </div>

      {/* F&B Partners marquee */}
      <div style={{ marginTop: 60 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", marginBottom: 14 }}>
          <span style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            color: "#f4f3ef",
            opacity: 0.25,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}>
            F&B Partners · Keeping you caffeinated &amp; fed
          </span>
        </div>
        <MarqueeRow partners={fnbPartners} reverse />
      </div>

      {/* Community Partners marquee */}
      <div style={{ marginTop: 40 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", marginBottom: 14 }}>
          <span style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            color: "#f4f3ef",
            opacity: 0.25,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}>
            Community Partners
          </span>
        </div>
        <MarqueeRow partners={communityPartners} />
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        .marquee-reverse {
          animation: marquee-scroll-reverse 24s linear infinite;
        }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-scroll-reverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .marquee-track:hover,
        .marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
