import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 200,
            width: 44,
            height: 44,
            borderRadius: 2,
            background: "#f6584b",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(246,88,75,0.35)",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#e04e3d")}
          onMouseLeave={e => (e.currentTarget.style.background = "#f6584b")}
        >
          <ArrowUp size={18} color="#000" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
