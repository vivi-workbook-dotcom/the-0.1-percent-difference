import { ArrowUpRight } from "lucide-react";

const RAZORPAY_LINK = "https://rzp.io/rzp/theproductstreet";

export function AnnouncementBar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 101,
        background: "#f6584b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: "9px 20px",
        flexWrap: "wrap",
      }}
    >
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: "#000",
          letterSpacing: "0.04em",
          margin: 0,
        }}
      >
        🔥 Only 3 Early Bird tickets left at ₹899.
        <span style={{ fontWeight: 400, opacity: 0.75 }}> Price goes up to ₹1,499 after.</span>
      </p>
      <a
        href={RAZORPAY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          fontFamily: "Poppins, sans-serif",
          fontSize: 11,
          fontWeight: 700,
          color: "#000",
          textDecoration: "none",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          borderBottom: "1px solid rgba(0,0,0,0.35)",
          paddingBottom: 1,
          whiteSpace: "nowrap",
        }}
      >
        Get Early Bird
        <ArrowUpRight size={12} />
      </a>
    </div>
  );
}
