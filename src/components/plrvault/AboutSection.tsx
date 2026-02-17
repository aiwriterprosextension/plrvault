import {
  BookOpen, FileText, Video, Headphones, Code2, Image, ShieldCheck,
  CheckCircle2, ArrowRight
} from "lucide-react";

const tocLinks = [
  { href: "#what-is", label: "What is PLR Vault?" },
  { href: "#whats-inside", label: "What's Inside the Vault" },
  { href: "#plugins", label: "Premium Plugins ($350+ Value)" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#affiliate", label: "Built-In Affiliate Program" },
  { href: "#seo-speed", label: "SEO & Speed Advantages" },
  { href: "#bonus", label: "25GB Bonus Library" },
  { href: "#testimonials", label: "What Customers Say" },
  { href: "#faq-section", label: "FAQ" },
  { href: "#pricing", label: "Pricing" },
];

const deliverables = [
  "Complete WordPress WooCommerce store — fully configured and ready to sell",
  "100 pre-loaded digital products (eBooks, Templates, Videos, Audio, Articles, Software, Graphics)",
  "Resell Rights (RR), Master Resell Rights (MRR), and Private Label Rights (PLR) on all products",
  "Beautiful, responsive Zakra WordPress theme installed and customized",
  "6 premium plugins included FREE (combined retail value $350+)",
  "Built-in affiliate program — 50% commission for your affiliates",
  "GDPR Cookie Consent fully configured",
  "4 blog articles pre-posted and optimized",
  "All legal pages ready (Privacy Policy, Terms, Disclaimer)",
  "Full SEO configuration via WP Rocket",
  "Content copy protection enabled (no right-click theft)",
  "25GB+ bonus digital products library for additional resale inventory",
  "Complete documentation + video tutorials for setup",
  "You are the 100% sole owner — modify, rebrand, resell at will",
];

const productTypes = [
  { icon: BookOpen, label: "eBooks", count: "25+" },
  { icon: FileText, label: "Templates", count: "15+" },
  { icon: Video, label: "Video Courses", count: "15+" },
  { icon: Headphones, label: "Audio Files", count: "10+" },
  { icon: Code2, label: "Software", count: "10+" },
  { icon: Image, label: "Graphics", count: "15+" },
  { icon: ShieldCheck, label: "Articles", count: "10+" },
];

const AboutSection = () => (
  <>
    {/* Table of Contents */}
    <section className="bg-vault-light py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4">📋 Table of Contents</h2>
        <nav className="grid sm:grid-cols-2 gap-2">
          {tocLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm text-vault-grey hover:text-primary transition-colors py-1"
            >
              <ArrowRight size={14} className="text-primary shrink-0" />
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>

    {/* What is PLR Vault? */}
    <section id="what-is" className="bg-background py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6 text-center">
          What Is <span className="text-primary">PLR Vault</span>?
        </h2>

        {/* AEO Definition Box */}
        <div className="border-2 border-primary/30 bg-primary/5 rounded-xl p-6 sm:p-8 mb-8">
          <p className="text-lg leading-relaxed text-foreground">
            <strong>PLR Vault is a complete, done-for-you WordPress WooCommerce digital products store</strong> pre-loaded with 100 digital products carrying Private Label Rights (PLR), Master Resell Rights (MRR), and Resell Rights (RR). It is a ready-made passive income business that lets you sell digital downloads — eBooks, templates, videos, software, and more — from your own branded store within minutes of installation.
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Think of it as having an entire digital products business handed to you in a box. No need to create products, configure payment gateways, install security, set up an affiliate program, or design your storefront. <strong className="text-foreground">PLR Vault handles every single piece</strong> so you can focus on what matters: marketing your store and collecting profits.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Whether you're a side-hustler looking for your first passive income stream, a freelance blogger wanting to diversify revenue, or an existing online entrepreneur adding a new profit center — PLR Vault gives you a fully operational DFY WordPress store that you can launch in under 90 minutes.
        </p>

        {/* Product type cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
          {productTypes.map((type) => (
            <div
              key={type.label}
              className="bg-vault-light rounded-lg p-4 text-center border border-border/50 hover:border-primary/40 transition-colors"
            >
              <type.icon className="mx-auto text-primary mb-2" size={28} />
              <p className="font-heading font-semibold text-foreground text-sm">{type.label}</p>
              <p className="text-xs text-muted-foreground">{type.count} products</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What's Inside the Vault */}
    <section id="whats-inside" className="vault-navy-gradient py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-secondary-foreground mb-3 text-center">
          What's Inside <span className="text-primary">the Vault</span>?
        </h2>
        <p className="text-primary font-heading text-lg text-center mb-10">
          <strong>Everything you need to launch a profitable digital products business — nothing left out.</strong>
        </p>

        <div className="space-y-3">
          {deliverables.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-secondary/30 rounded-lg px-4 py-3">
              <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
              <p className="text-secondary-foreground/90 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#buy"
            className="vault-cta-gradient text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl inline-block transition-all hover:shadow-2xl"
          >
            Crack Open the Vault — $47.97
          </a>
        </div>
      </div>
    </section>
  </>
);

export default AboutSection;
