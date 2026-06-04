import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const RAZORPAY_LINK = "https://rzp.io/rzp/theproductstreet";
const EVENT_DATE = new Date("2026-07-04T16:30:00+05:30");

function useCountdown() {
  const getTimeLeft = () => {
    const diff = EVENT_DATE.getTime() - Date.now();
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

export function AnnouncementBar() {
  const timeLeft = useCountdown();

  const countdownText = () => {
    if (!timeLeft) return "The summit is today!";
    if (timeLeft.days > 1) return `${timeLeft.days} days left to register.`;
    if (timeLeft.days === 1) return `1 day left to register.`;
    if (timeLeft.hours > 0) return `${timeLeft.hours}h ${timeLeft.minutes}m left to register.`;
    return `${timeLeft.minutes}m ${timeLeft.seconds}s left to register.`;
  };

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
        🎟 General Admission is now open.{" "}
        <span style={{ fontWeight: 700 }}>{countdownText()}</span>
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
        Get Tickets
        <ArrowUpRight size={12} />
      </a>
    </div>
  );
}
