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
              { href: "#what-is", label: "About PLR Vault" },
              { href: "#plugins", label: "Premium Plugins" },
              { href: "#how-it-works", label: "How It Works" },
              { href: "#faq-section", label: "FAQ" },
              { href: "#pricing", label: "Pricing" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-vault-grey text-sm hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading font-semibold text-secondary-foreground text-sm mb-3 uppercase tracking-wider">Legal</p>
          <ul className="space-y-2">
            {["Privacy Policy", "Terms of Service", "Disclaimer", "Contact Us"].map((item) => (
              <li key={item}>
                <a href="#" className="text-vault-grey text-sm hover:text-primary transition-colors">
                  {item}
                </a>
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
