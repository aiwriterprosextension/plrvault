import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const VaultLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PLR Vault logo">
    <rect x="4" y="6" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="2" className="text-primary" />
    <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="2" className="text-primary" />
    <circle cx="18" cy="18" r="2" fill="currentColor" className="text-primary" />
    <line x1="18" y1="12" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5" className="text-primary" opacity="0.5" />
    <line x1="24" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="1.5" className="text-primary" opacity="0.5" />
    <line x1="4" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5" className="text-primary" opacity="0.5" />
    <rect x="14" y="26" width="8" height="4" rx="1" fill="currentColor" className="text-primary" opacity="0.6" />
  </svg>
);

const navLinks = [
  { href: "#what-is", label: "About" },
  { href: "#whats-inside", label: "Features" },
  { href: "#plugins", label: "Plugins" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq-section", label: "FAQ" },
  { href: "#pricing", label: "Pricing" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-vault-navy/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-secondary-foreground">
          <VaultLogo />
          <span className="font-heading font-bold text-xl tracking-wide text-secondary-foreground">
            PLR <span className="text-primary">Vault</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-vault-grey hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            className="vault-cta-gradient text-primary-foreground font-heading font-bold text-sm px-6 py-2.5 rounded-lg transition-all hover:shadow-lg"
          >
            Get PLR Vault — $27.00
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-secondary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-vault-navy border-t border-vault-navy-mid px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-vault-grey hover:text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            onClick={() => setMobileOpen(false)}
            className="block vault-cta-gradient text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-lg text-center"
          >
            Get PLR Vault — $27.00
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
