import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Theme } from "./components/Theme";
import { WhoShouldAttend } from "./components/WhoShouldAttend";
import { Agenda } from "./components/Agenda";
import { Speakers } from "./components/Speakers";
import { PastEvents } from "./components/PastEvents";
import { Organizer } from "./components/Organizer";
import { PodcastStills } from "./components/PodcastStills";
import { Venue } from "./components/Venue";
import { Tickets } from "./components/Tickets";
import { Sponsor } from "./components/Sponsor";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #000; }

        /* --- Shine button sweep --- */
        .btn-shine::after {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%);
          transform: skewX(-20deg);
          transition: none;
          pointer-events: none;
        }
        .btn-shine:hover::after {
          animation: btnSweep 0.55s ease forwards;
        }
        @keyframes btnSweep {
          0%   { left: -75%; }
          100% { left: 125%; }
        }

        /* --- Glowing accent line --- */
        .accent-line {
          width: 32px; height: 1px;
          background: #f6584b;
          box-shadow: 0 0 8px rgba(246,88,75,0.65), 0 0 16px rgba(246,88,75,0.3);
          flex-shrink: 0;
        }

        /* --- Ticket card shimmer border --- */
        .ticket-shimmer-border {
          position: relative;
          background: linear-gradient(135deg, rgba(246,88,75,0.7) 0%, rgba(245,197,24,0.5) 50%, rgba(246,88,75,0.7) 100%);
          padding: 1px;
          background-size: 200% 200%;
          animation: borderShimmer 4s ease infinite;
        }
        .ticket-shimmer-border > div {
          background: #000;
          height: 100%;
        }
        @keyframes borderShimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* --- Sparkle pulse --- */
        .sparkle-gold {
          color: #f5c518;
          display: inline-block;
          animation: sparklePulse 3s ease-in-out infinite;
        }
        @keyframes sparklePulse {
          0%, 100% { opacity: 0.8; transform: scale(1) rotate(0deg); }
          50%       { opacity: 1;   transform: scale(1.15) rotate(15deg); }
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }

        @media (max-width: 640px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          .footer-cta-strip { padding-left: 20px !important; padding-right: 20px !important; }
          .footer-bottom { padding-left: 20px !important; padding-right: 20px !important; }
          .footer-grid { padding-left: 20px !important; padding-right: 20px !important; }
          .hero-date-display { display: none !important; }
          .agenda-header-row { display: none !important; }
          .agenda-row { grid-template-columns: 1fr !important; gap: 8px !important; }
          .agenda-duration { display: none !important; }
        }
      `}</style>

      <Navbar />
      <Hero />
      <Theme />
      <WhoShouldAttend />
      <Agenda />
      <Speakers />
      <PastEvents />
      <Organizer />
      <PodcastStills />
      <Venue />
      <Tickets />
      <Sponsor />
      <Footer />
    </div>
  );
}
