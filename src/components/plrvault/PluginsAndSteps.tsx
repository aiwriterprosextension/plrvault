import { Zap, Rocket, Shield, HardDrive, Users, Lock } from "lucide-react";

const plugins = [
  {
    name: "Elementor",
    value: "$49",
    icon: Zap,
    desc: "The world's leading drag-and-drop page builder. Customize every inch of your store without writing a single line of code.",
  },
  {
    name: "WP Rocket",
    value: "$49",
    icon: Rocket,
    desc: "Premium speed optimization plugin. Your store loads lightning-fast, boosting SEO rankings and customer conversions.",
  },
  {
    name: "Wordfence Security",
    value: "$99",
    icon: Shield,
    desc: "Enterprise-grade firewall and malware protection. Keeps your store and customer data safe around the clock.",
  },
  {
    name: "UpdraftPlus Backup",
    value: "$76",
    icon: HardDrive,
    desc: "Automated backup and restore solution. Never worry about losing your store data — one-click recovery anytime.",
  },
  {
    name: "WP Affiliate Platform",
    value: "$49.95",
    icon: Users,
    desc: "Full affiliate management system. Recruit an army of promoters who market your store and earn commissions on sales.",
  },
  {
    name: "Content Copy Protection",
    value: "$36",
    icon: Lock,
    desc: "Prevents content theft with right-click disable and text copy protection. Your products and descriptions stay yours.",
  },
];

const steps = [
  {
    emoji: "🔓",
    title: "Unlock",
    subtitle: "Purchase & Download",
    desc: "Grab PLR Vault at the current sale price. You'll get instant access to the complete store package, all 100 products, and your bonus library.",
  },
  {
    emoji: "🚀",
    title: "Deploy",
    subtitle: "Install in 90 Minutes",
    desc: "Follow the step-by-step documentation or video tutorials. Upload to your WordPress hosting, import the store, and configure your branding. No technical skills required.",
  },
  {
    emoji: "💰",
    title: "Profit",
    subtitle: "Start Earning Immediately",
    desc: "Your store is live with 100 products, payment processing, and an affiliate program ready to go. Share your link, drive traffic, and watch the sales roll in — within 15 minutes of going live.",
  },
];

const PluginsAndSteps = () => (
  <>
    {/* Plugins Section */}
    <section id="plugins" className="bg-vault-light py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground text-center mb-3">
          Premium Plugins Included <span className="text-primary">FREE</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          <strong className="text-foreground">Every PLR Vault store ships with $350+ in premium WordPress plugins</strong> — no extra cost, no recurring license fees. These are the same tools top-earning stores use daily.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plugins.map((plugin) => (
            <div
              key={plugin.name}
              className="bg-background rounded-xl overflow-hidden shadow-md border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="bg-vault-navy px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <plugin.icon size={18} className="text-primary" />
                  <span className="font-heading font-bold text-secondary-foreground text-sm">
                    {plugin.name}
                  </span>
                </div>
                <span className="vault-cta-gradient text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                  {plugin.value} value
                </span>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm leading-relaxed">{plugin.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section id="how-it-works" className="bg-background py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground text-center mb-3">
          How Does <span className="text-primary">PLR Vault</span> Work?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          <strong className="text-foreground">Three simple steps</strong> stand between you and a fully operational digital products business. No coding, no design work, no product creation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="text-5xl mb-4">{step.emoji}</div>
              <div className="inline-block vault-cta-gradient text-primary-foreground font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Step {i + 1}
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-1">{step.title}</h3>
              <p className="text-primary font-heading text-sm font-semibold mb-3">{step.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#buy"
            className="vault-cta-gradient text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl inline-block transition-all hover:shadow-2xl"
          >
            Start Your Journey — $47.97
          </a>
        </div>
      </div>
    </section>
  </>
);

export default PluginsAndSteps;
