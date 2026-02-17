import { Users, Search, Gift, DollarSign, BarChart3, ShieldCheck } from "lucide-react";

const GrowthSections = () => (
  <>
    {/* Affiliate Section */}
    <section id="affiliate" className="vault-navy-gradient py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-secondary-foreground text-center mb-3">
          Built-In <span className="text-primary">Affiliate Program</span>
        </h2>
        <p className="text-center text-primary font-heading text-lg mb-10">
          <strong>Let others market your store — and pay them only when they make a sale.</strong>
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: DollarSign, title: "50% Commission", desc: "Your affiliates earn a generous 50% commission on every sale they drive to your store. That's an irresistible offer that attracts top-tier promoters." },
            { icon: Gift, title: "$10 Welcome Bonus", desc: "New affiliates get a $10 welcome bonus just for signing up to promote your store. This incentivizes sign-ups and gets your marketing army growing fast." },
            { icon: BarChart3, title: "$50 Minimum Payout", desc: "Low payout threshold means affiliates get paid quickly, keeping them motivated and actively promoting your products week after week." },
          ].map((item) => (
            <div key={item.title} className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
              <item.icon className="text-primary mb-3" size={32} />
              <h3 className="font-heading font-bold text-xl text-secondary-foreground mb-2">{item.title}</h3>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SEO & Speed Section */}
    <section id="seo-speed" className="bg-background py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground text-center mb-3">
          SEO & Speed <span className="text-primary">Built In</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          <strong className="text-foreground">Your PLR Vault store comes pre-configured for search engine success and blazing-fast load times.</strong> No need to hire an SEO specialist or speed optimization expert.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Search, title: "Full SEO Configuration", desc: "WP Rocket handles caching, minification, and lazy loading out of the box. Your product pages are structured for search engines to crawl and index quickly, helping you rank for profitable keywords." },
            { icon: ShieldCheck, title: "Security Hardened", desc: "Wordfence Security provides enterprise-grade firewall protection, malware scanning, and login security. Combined with content copy protection, your store is locked down from day one." },
            { icon: Users, title: "Mobile-First Design", desc: "The Zakra theme is fully responsive and optimized for every screen size. Over 60% of online shoppers browse on mobile — your store looks stunning on all devices." },
            { icon: BarChart3, title: "Conversion Optimized", desc: "Product pages are laid out for maximum conversions with clear pricing, professional descriptions, and streamlined checkout. Everything is designed to turn visitors into buyers." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-vault-light border border-border/50">
              <item.icon className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bonus Section */}
    <section id="bonus" className="vault-navy-gradient py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block vault-cta-gradient text-primary-foreground font-heading font-bold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          🎁 Exclusive Bonus
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-secondary-foreground mb-4">
          25GB+ <span className="text-primary">Bonus Digital Products Library</span>
        </h2>
        <p className="text-secondary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          <strong className="text-secondary-foreground">On top of the 100 products already in your store, you get access to a massive 25GB+ library of additional digital products.</strong> These are ready to upload to your store, package into bundles, or sell separately — expanding your inventory and profit potential exponentially.
        </p>
        <p className="text-vault-grey text-sm mb-8">
          eBooks • Templates • Video Content • Audio Files • Software Tools • Graphics Packs • And More
        </p>
        <a
          href="#buy"
          className="vault-cta-gradient vault-pulse text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl inline-block transition-all hover:shadow-2xl"
        >
          Claim Your Vault + Bonus — $47.97
        </a>
      </div>
    </section>
  </>
);

export default GrowthSections;
