import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const RAZORPAY_LINK = "https://rzp.io/rzp/theproductstreet";

const navLinks = [
  { label: "Tickets", id: "tickets" },
  { label: "Venue", id: "venue" },
];

const aboutLinks = [
  { label: "Past Summits", id: "past-events" },
  { label: "Partners", id: "partners" },
  { label: "Who Should Attend", id: "attend" },
  { label: "Podcast", id: "podcast" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

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

  // Close About dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
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

          {/* Right side: nav links + Register CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {/* Desktop nav links */}
            <div
              className="nav-links-desktop"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
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

              {/* About dropdown */}
              <div ref={aboutRef} style={{ position: "relative" }}>
                <button
                  onClick={() => setAboutOpen(o => !o)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: aboutOpen ? "#f6584b" : "#f4f3ef",
                    opacity: aboutOpen ? 1 : 0.75,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    transition: "opacity 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.color = "#f6584b"; }}
                  onMouseLeave={e => { if (!aboutOpen) { e.currentTarget.style.opacity = "0.75"; e.currentTarget.style.color = "#f4f3ef"; } }}
                >
                  About
                  <ChevronDown size={12} style={{ transition: "transform 0.2s ease", transform: aboutOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>

                {/* Dropdown panel */}
                {aboutOpen && (
                  <div style={{
                    position: "absolute",
                    top: "calc(100% + 16px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(8,8,8,0.97)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(244,243,239,0.08)",
                    padding: "8px 0",
                    minWidth: 180,
                    zIndex: 200,
                  }}>
                    {aboutLinks.map(link => (
                      <button
                        key={link.id}
                        onClick={() => { scrollTo(link.id); setAboutOpen(false); }}
                        style={{
                          display: "block",
                          width: "100%",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#f4f3ef",
                          opacity: 0.6,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          padding: "10px 20px",
                          textAlign: "left",
                          transition: "opacity 0.15s ease, background 0.15s ease",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.background = "rgba(246,88,75,0.07)"; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = "0.6"; e.currentTarget.style.background = "none"; }}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Register CTA — desktop only; mobile has it in the drawer + hero */}
            <a
              href={RAZORPAY_LINK}
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
              Register
              <ArrowUpRight size={12} />
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
            {[...navLinks, ...aboutLinks].map((link, i, arr) => (
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
                  opacity: i >= navLinks.length ? 0.45 : 0.7,
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = i >= navLinks.length ? "0.45" : "0.7")}
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
        /* Desktop: show nav links + register CTA, hide hamburger */
        @media (min-width: 768px) {
          .nav-links-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
          .nav-mobile-drawer { display: none !important; }
          .nav-register-desktop { display: inline-flex !important; }
        }
        /* Mobile: hide nav links, show hamburger + compact register CTA */
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
