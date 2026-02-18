import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const socialProofData = [
  { name: "John D.", location: "New York" },
  { name: "Sarah M.", location: "London" },
  { name: "Mike R.", location: "Toronto" },
  { name: "Emily T.", location: "Sydney" },
  { name: "Carlos G.", location: "Miami" },
  { name: "Priya S.", location: "Mumbai" },
  { name: "James L.", location: "Chicago" },
  { name: "Anna K.", location: "Berlin" },
];

const ConversionPopups = () => {
  const [showExit, setShowExit] = useState(false);
  const [exitShown, setExitShown] = useState(false);
  const [proofVisible, setProofVisible] = useState(false);
  const [proofIndex, setProofIndex] = useState(0);

  // Exit intent
  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShown) {
        setShowExit(true);
        setExitShown(true);
      }
    },
    [exitShown]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  // Social proof cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setProofIndex((prev) => (prev + 1) % socialProofData.length);
      setProofVisible(true);
      const hideTimeout = setTimeout(() => setProofVisible(false), 4000);
      return () => clearTimeout(hideTimeout);
    }, 20000);

    // Show first one after 8 seconds
    const initial = setTimeout(() => {
      setProofVisible(true);
      setTimeout(() => setProofVisible(false), 4000);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, []);

  const currentProof = socialProofData[proofIndex];

  return (
    <>
      {/* Exit Intent Popup */}
      {showExit && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-background border-2 border-primary rounded-2xl p-8 sm:p-10 max-w-md mx-4 text-center shadow-2xl animate-fade-in-up">
            <button
              onClick={() => setShowExit(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-3">
              WAIT! Don't Leave Empty Handed.
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the complete PLR Vault System today for just{" "}
              <strong className="text-primary">$27</strong>.
            </p>
            <a
              href="#buy"
              onClick={() => setShowExit(false)}
              className="vault-cta-gradient vault-pulse text-primary-foreground font-heading font-bold text-lg px-8 py-4 rounded-xl inline-block transition-all hover:shadow-2xl"
            >
              Claim Discount Now
            </a>
            <p className="text-muted-foreground/60 text-xs mt-4">
              One-time payment • Instant access
            </p>
          </div>
        </div>
      )}

      {/* Social Proof Notification */}
      <div
        className={`fixed bottom-4 left-4 z-[90] bg-background border border-border/50 rounded-xl shadow-lg px-4 py-3 max-w-xs transition-all duration-500 ${
          proofVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-heading font-bold text-sm shrink-0">
            {currentProof.name[0]}
          </div>
          <p className="text-sm text-foreground">
            <strong>{currentProof.name}</strong>{" "}
            <span className="text-muted-foreground">from {currentProof.location}</span>{" "}
            just bought PLR Vault.
          </p>
        </div>
      </div>
    </>
  );
};

export default ConversionPopups;
