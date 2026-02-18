import { Link } from "react-router-dom";

const VaultFooter = () => (
  <footer className="bg-vault-navy border-t border-vault-navy-mid py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="font-heading font-bold text-lg text-secondary-foreground mb-2">
            PLR <span className="text-primary">Vault</span>
          </p>
          <p className="text-vault-grey text-sm leading-relaxed">
            Your complete done-for-you WordPress digital products store. Unlock, deploy, and start profiting with 100 PLR products and $350+ in premium plugins.
          </p>
        </div>
        <div>
          <p className="font-heading font-semibold text-secondary-foreground text-sm mb-3 uppercase tracking-wider">Quick Links</p>
          <ul className="space-y-2">
            {[
              { to: "/#what-is", label: "About PLR Vault" },
              { to: "/#plugins", label: "Premium Plugins" },
              { to: "/#how-it-works", label: "How It Works" },
              { to: "/#faq-section", label: "FAQ" },
              { to: "/#pricing", label: "Pricing" },
              { to: "/blog", label: "Blog" },
              { to: "/affiliates", label: "Affiliates" },
            ].map((link) => (
              <li key={link.to}>
                <a href={link.to} className="text-vault-grey text-sm hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading font-semibold text-secondary-foreground text-sm mb-3 uppercase tracking-wider">Legal</p>
          <ul className="space-y-2">
            {[
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms of Service" },
              { to: "/disclaimer", label: "Disclaimer" },
              { to: "/contact", label: "Contact Us" },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-vault-grey text-sm hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-vault-navy-mid pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-vault-grey text-xs">
          © {new Date().getFullYear()} PLR Vault by{" "}
          <a href="https://aiwriterpros.com" className="text-primary hover:underline">AIWriterPros.com</a>. All rights reserved.
        </p>
        <p className="text-vault-grey/50 text-xs">
          PLR Vault is a product of AIWriterPros.com
        </p>
      </div>
    </div>
  </footer>
);

export default VaultFooter;
