import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function YouTubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656 31.64 31.64 0 0 0 0 8.5a31.64 31.64 0 0 0 .505 5.844 3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.52a3.016 3.016 0 0 0 2.122-2.136A31.64 31.64 0 0 0 24 8.5a31.64 31.64 0 0 0-.505-5.844z" fill="currentColor"/>
      <path d="M9.6 12.143L15.818 8.5 9.6 4.857v7.286z" fill="#fff"/>
    </svg>
  );
}

const YOUTUBE_LINK = "https://youtube.com/@theproductstreet?si=-5p58v__NIiE_GE-";

const navLinks = [
  { label: "Past Summits", id: "past-events" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 38,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
          background: scrolled || menuOpen ? "rgba(0,0,0,0.96)" : "rgba(0,0,0,0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(244,243,239,0.06)" : "1px solid rgba(244,243,239,0.03)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 76,
          }}
        >
          {/* Logo */}
          <img
            src="/logo.png"
            alt="The Product Street"
            style={{
              height: 46,
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {/* Desktop nav links */}
            <div
              className="nav-links-desktop"
              style={{ display: "flex", alignItems: "center", gap: 28 }}
            >
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#f4f3ef",
                    opacity: 0.75,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: 0,
                    transition: "opacity 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.color = "#f6584b"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "0.75"; e.currentTarget.style.color = "#f4f3ef"; }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Subscribe CTA */}
            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine nav-register-cta nav-register-desktop"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "Poppins, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: "#000",
                background: "#f6584b",
                padding: "10px 20px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: 2,
                transition: "background 0.2s ease",
                position: "relative",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#e04e3d")}
              onMouseLeave={e => (e.currentTarget.style.background = "#f6584b")}
            >
              <YouTubeIcon size={22} />
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#f4f3ef",
                display: "flex",
                alignItems: "center",
                padding: 4,
              }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className="nav-mobile-drawer"
          style={{
            overflow: "hidden",
            maxHeight: menuOpen ? 300 : 0,
            transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            borderTop: menuOpen ? "1px solid rgba(244,243,239,0.06)" : "none",
          }}
        >
          <div style={{ padding: "24px 40px 32px" }}>
            {navLinks.map((link, i, arr) => (
              <button
                key={link.id}
                onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
                style={{
                  display: "block",
                  width: "100%",
                  background: "none",
                  border: "none",
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(244,243,239,0.05)" : "none",
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#f4f3ef",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "16px 0",
                  textAlign: "left",
                  opacity: 0.7,
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
              >
                {link.label}
              </button>
            ))}
            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 20,
                fontFamily: "Poppins, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#000",
                background: "#f6584b",
                padding: "12px 24px",
                textDecoration: "none",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                borderRadius: 2,
              }}
            >
              <YouTubeIcon size={22} />
              Subscribe
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .nav-links-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
          .nav-mobile-drawer { display: none !important; }
          .nav-register-desktop { display: inline-flex !important; }
        }
        @media (max-width: 767px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; margin-right: 8px !important; }
          .nav-register-desktop {
            display: inline-flex !important;
            font-size: 10px !important;
            padding: 7px 12px !important;
            letter-spacing: 0.07em !important;
          }
        }
      `}</style>
    </>
  );
}
