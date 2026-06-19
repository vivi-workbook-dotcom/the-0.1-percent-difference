import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const RAZORPAY_LINK = "https://rzp.io/rzp/theproductstreet";

const navLinks = [
  { label: "Speakers", id: "speakers" },
  { label: "Agenda", id: "agenda" },
  { label: "Tickets", id: "tickets" },
  { label: "Venue", id: "venue" },
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

  // Close menu on resize to desktop
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
          transition: "all 0.4s ease",
          background: scrolled || menuOpen ? "rgba(0,0,0,0.96)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(244,243,239,0.06)" : "none",
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

          {/* Desktop nav links */}
          <div
            className="nav-links-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
            }}
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
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#f4f3ef",
                  opacity: 0.55,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: 0,
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: Get Tickets + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Get Tickets CTA — fades in on scroll */}
            <a
              href={RAZORPAY_LINK}
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
                padding: "10px 20px",
                textDecoration: "none",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                borderRadius: 2,
                transition: "all 0.2s ease",
                position: "relative",
                overflow: "hidden",
                opacity: scrolled ? 1 : 0,
                pointerEvents: scrolled ? "auto" : "none",
                transform: scrolled ? "translateY(0)" : "translateY(-4px)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#e04e3d")}
              onMouseLeave={e => (e.currentTarget.style.background = "#f6584b")}
            >
              Get Tickets
              <ArrowUpRight size={13} />
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
            maxHeight: menuOpen ? 400 : 0,
            transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            borderTop: menuOpen ? "1px solid rgba(244,243,239,0.06)" : "none",
          }}
        >
          <div style={{ padding: "24px 40px 32px" }}>
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
                style={{
                  display: "block",
                  width: "100%",
                  background: "none",
                  border: "none",
                  borderBottom: i < navLinks.length - 1 ? "1px solid rgba(244,243,239,0.05)" : "none",
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
              href={RAZORPAY_LINK}
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
              Get Tickets
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        /* Desktop: show nav links, hide hamburger */
        @media (min-width: 768px) {
          .nav-links-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
          .nav-mobile-drawer { display: none !important; }
        }
        /* Mobile: hide nav links, show hamburger */
        @media (max-width: 767px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
