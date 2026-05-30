import { useEffect } from "react";
import { Youtube, Linkedin, ArrowUpRight, X } from "lucide-react";

const PHOTO_URL = "/vethavarshini.jpeg";

export function HostModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 20px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(244,243,239,0.08)",
          maxWidth: 960,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "1px solid rgba(244,243,239,0.12)",
            color: "#f4f3ef",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            transition: "border-color 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(246,88,75,0.5)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(244,243,239,0.12)")}
        >
          <X size={16} />
        </button>

        {/* Label */}
        <div style={{ padding: "40px 40px 0", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <div style={{ width: 32, height: 1, background: "#f6584b", boxShadow: "0 0 8px rgba(246,88,75,0.65)" }} />
          <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 600, color: "#f6584b", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Your Host
          </span>
        </div>

        {/* Two-col layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, padding: "0 40px 40px", alignItems: "start" }}>
          {/* Photo column */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={PHOTO_URL}
                alt="VethaVarshini — Host, The Product Street"
                style={{ width: "100%", height: 360, objectFit: "cover", objectPosition: "center top", display: "block", filter: "brightness(0.85) contrast(1.05)" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(to top, rgba(246,88,75,0.12), transparent)", pointerEvents: "none" }} />
            </div>
            <div style={{ background: "#f6584b", padding: "14px 20px", display: "inline-block" }}>
              <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 12, fontWeight: 900, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                VethaVarshini
              </span>
            </div>
          </div>

          {/* Text column */}
          <div style={{ paddingTop: 8 }}>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 600, color: "#f4f3ef", opacity: 0.3, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 20 }}>
              Creator · The Product Street
            </div>

            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 900, color: "#f4f3ef", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 28 }}>
              Lead from wherever<br />
              <span style={{ color: "#f6584b" }}>you are.</span>
            </h2>

            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 15, fontWeight: 700, color: "#f4f3ef", lineHeight: 1.6, borderLeft: "2px solid #f6584b", paddingLeft: 16, marginBottom: 24, fontStyle: "italic" }}>
              "One gap runs through every conversation in tech and product: what people know, and what they're willing to act on — without waiting for the title, the moment, or the permission. Hence this podcast. Hence this room."
            </p>

            <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, color: "#f4f3ef", opacity: 0.55, lineHeight: 1.9, marginBottom: 16 }}>
              VethaVarshini is the creator and host of The Product Street: built for conversations about AI, leadership, and the kind of agency that doesn't wait for permission to activate.
            </p>
            <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, color: "#f4f3ef", opacity: 0.55, lineHeight: 1.9, marginBottom: 28 }}>
              Her conversations with leaders from Microsoft, Google, Salesforce, ServiceNow and beyond keep arriving at the same place: that leadership isn't something you wait to be given a title for.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { icon: <Youtube size={15} />, label: "Listen to the Podcast", sub: "@TheProductStreet", href: "https://youtube.com/@TheProductStreet" },
                { icon: <Linkedin size={15} />, label: "Connect on LinkedIn", sub: "/in/vethavarshini", href: "https://linkedin.com/in/vethavarshini" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid rgba(244,243,239,0.07)", textDecoration: "none", transition: "border-color 0.2s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.borderBottomColor = "rgba(246,88,75,0.3)")}
                  onMouseLeave={e => (e.currentTarget.style.borderBottomColor = "rgba(244,243,239,0.07)")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: "#f6584b" }}>{link.icon}</span>
                    <div>
                      <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 13, fontWeight: 700, color: "#f4f3ef", letterSpacing: "-0.01em" }}>{link.label}</div>
                      <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, color: "#f4f3ef", opacity: 0.3 }}>{link.sub}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} color="rgba(244,243,239,0.25)" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
