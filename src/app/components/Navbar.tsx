import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const RAZORPAY_LINK = "https://rzp.io/rzp/theproductstreet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 38,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(244,243,239,0.06)" : "none",
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
        {/* Logo image */}
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

        {/* Get Tickets CTA */}
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
      </div>
    </nav>
  );
}
