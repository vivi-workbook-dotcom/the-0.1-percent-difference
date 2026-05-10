import { Youtube, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import logoSrc from "../../imports/Screenshot_2026-05-10_at_2.24.22_AM.png";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const navLinks = [
  { label: "Theme", id: "theme" },
  { label: "Agenda", id: "agenda" },
  { label: "Speakers", id: "speakers" },
  { label: "Past Events", id: "past-events" },
  { label: "Tickets", id: "tickets" },
  { label: "Become a Sponsor", id: "sponsor" },
];

const socials = [
  {
    icon: <Youtube size={14} />,
    label: "@TheProductStreet",
    href: "https://youtube.com/@TheProductStreet",
  },
  {
    icon: <Linkedin size={14} />,
    label: "VethaVarshini",
    href: "https://linkedin.com/in/vethavarshini",
  },
  {
    icon: <Instagram size={14} />,
    label: "@theproductstreet",
    href: "https://www.instagram.com/theproductstreet",
  },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(244,243,239,0.08)",
      }}
    >
      {/* Big CTA strip */}
      <div
        className="footer-cta-strip"
        style={{
          borderBottom: "1px solid rgba(244,243,239,0.06)",
          padding: "64px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "#f6584b",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              June 20, 2026 · T HUB, Hyderabad
            </p>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 900,
                color: "#f4f3ef",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              The 0.1% Difference.<br />
              <span style={{ opacity: 0.35 }}>Are you in the room?</span>
            </h2>
          </div>

          {/* TODO: replace href with real Razorpay Payment Link */}
          <a
            href="https://rzp.io/l/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "Poppins, sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#000",
              background: "#f6584b",
              padding: "16px 32px",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#f4f3ef";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#f6584b";
              e.currentTarget.style.color = "#000";
            }}
          >
            Get Tickets
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div
        className="footer-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "56px 40px 40px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 60,
        }}
      >
        {/* Col 1: Brand */}
        <div>
          <div style={{ marginBottom: 20 }}>
            <img
              src={logoSrc}
              alt="The Product Street"
              style={{
                height: 32,
                width: "auto",
                objectFit: "contain",
                display: "block",
                opacity: 0.85,
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 13,
              color: "#f4f3ef",
              opacity: 0.3,
              lineHeight: 1.85,
              maxWidth: 300,
            }}
          >
            For people more excited about what AI makes possible than what it makes easy.
          </p>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              color: "#f6584b",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Quick Links
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13,
                  color: "#f4f3ef",
                  opacity: 0.35,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: 0,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.color = "#f6584b";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = "0.35";
                  e.currentTarget.style.color = "#f4f3ef";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Col 3: Connect */}
        <div>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              color: "#f6584b",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Connect
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13,
                  color: "#f4f3ef",
                  opacity: 0.35,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.color = "#f6584b";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = "0.35";
                  e.currentTarget.style.color = "#f4f3ef";
                }}
              >
                <span style={{ color: "#f6584b", opacity: 0.7 }}>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="footer-bottom"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "20px 40px 32px",
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "space-between",
          borderTop: "1px solid rgba(244,243,239,0.04)",
        }}
      >
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 11,
            color: "#f4f3ef",
            opacity: 0.2,
          }}
        >
          © 2026 The Product Street. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 11,
            color: "#f4f3ef",
            opacity: 0.2,
          }}
        >
          Event organized by VethaVarshini · Hyderabad, India
        </p>
      </div>
    </footer>
  );
}