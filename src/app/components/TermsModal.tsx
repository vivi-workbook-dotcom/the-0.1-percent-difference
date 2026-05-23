import { useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  onClose: () => void;
}

const sections = [
  {
    title: "1. Ticket Purchase & Confirmation",
    body: [
      "All ticket sales are processed through Razorpay. By completing your purchase, you agree to these terms.",
      "You will receive a confirmation email with your ticket details within 24 hours of purchase. If you don't receive it, contact vetha.theproductstreet@gmail.com.",
      "Tickets are non-transferable between pricing tiers (Early Bird, General Admission, Final Batch). However, you may transfer your ticket to another person by notifying us at least 48 hours before the summit with their name and email address.",
    ],
  },
  {
    title: "2. No Refunds or Cancellations",
    body: [
      "All ticket sales are final. No refunds or cancellations will be issued under any circumstances, including no-shows.",
      "In the event of speaker cancellations or schedule changes, we will provide a replacement of comparable caliber. No refunds will be issued for such changes.",
      "If the summit is cancelled entirely by The Product Street, full refunds will be issued to all ticket holders.",
    ],
  },
  {
    title: "3. Age Restriction",
    body: [
      "This summit is open to individuals aged 18 and above. Valid government-issued ID may be required at entry.",
    ],
  },
  {
    title: "4. Photography & Media Consent",
    body: [
      "By attending this summit, you consent to being photographed, filmed, and recorded. Images, videos, and audio may be used for promotional purposes by The Product Street across social media, website, podcast, and other marketing channels.",
      "If you do not wish to be photographed or filmed, please inform our volunteers at registration.",
    ],
  },
  {
    title: "5. Code of Conduct",
    body: [
      "All attendees are expected to conduct themselves professionally and respectfully.",
      "Harassment, discrimination, or disruptive behavior of any kind will not be tolerated and may result in immediate removal from the summit without refund.",
      "The Product Street reserves the right to deny entry or remove any attendee who violates this code of conduct.",
    ],
  },
  {
    title: "6. Liability Waiver",
    body: [
      "The Product Street and T Hub are not liable for any injury, loss, or damage to personal belongings during the summit.",
      "Attendees participate at their own risk and are responsible for their own health and safety.",
    ],
  },
  {
    title: "7. Food & Beverages",
    body: [
      "High tea will be provided as part of your ticket. The menu is fixed and dietary preferences or restrictions cannot be accommodated.",
      "Outside food and beverages are not permitted at the venue.",
    ],
  },
  {
    title: "8. Intellectual Property",
    body: [
      "All content shared during the summit (presentations, talks, panel discussions) is the intellectual property of the respective speakers and The Product Street.",
      "Recording, photographing, or reproducing any part of the presentations without prior written consent is strictly prohibited.",
    ],
  },
  {
    title: "9. Summit Changes",
    body: [
      "The Product Street reserves the right to modify the summit schedule, format, speakers, or venue due to unforeseen circumstances. No refunds will be issued for such changes.",
    ],
  },
  {
    title: "10. Contact Information",
    body: [
      "For any questions or concerns regarding these terms, please contact:",
      "Email: vetha.theproductstreet@gmail.com",
    ],
  },
];

export function TermsModal({ onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(244,243,239,0.1)",
          width: "100%",
          maxWidth: 720,
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "28px 36px 24px",
            borderBottom: "1px solid rgba(244,243,239,0.08)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 16,
            flexShrink: 0,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                color: "#f6584b",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              The Product Velocity Summit
            </div>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 900,
                color: "#f4f3ef",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Terms & Conditions
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "1px solid rgba(244,243,239,0.15)",
              color: "#f4f3ef",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#f6584b";
              e.currentTarget.style.color = "#f6584b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(244,243,239,0.15)";
              e.currentTarget.style.color = "#f4f3ef";
            }}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable body */}
        <div
          style={{
            overflowY: "auto",
            padding: "32px 36px 40px",
            flex: 1,
          }}
        >
          {sections.map((section) => (
            <div key={section.title} style={{ marginBottom: 32 }}>
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#f4f3ef",
                  letterSpacing: "0.01em",
                  marginBottom: 12,
                  marginTop: 0,
                }}
              >
                {section.title}
              </h3>
              {section.body.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 13,
                    color: "#f4f3ef",
                    opacity: 0.5,
                    lineHeight: 1.75,
                    margin: "0 0 10px",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}

          {/* Footer note */}
          <div
            style={{
              marginTop: 8,
              paddingTop: 24,
              borderTop: "1px solid rgba(244,243,239,0.08)",
              fontFamily: "Poppins, sans-serif",
              fontSize: 12,
              color: "#f4f3ef",
              opacity: 0.35,
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            By purchasing a ticket, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
          </div>
        </div>
      </div>
    </div>
  );
}
