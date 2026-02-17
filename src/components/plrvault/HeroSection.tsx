import heroImg from "@/assets/vault-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 vault-navy-gradient opacity-70" />
      {/* Circuit pattern */}
      <div className="absolute inset-0 circuit-pattern" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Sale badge */}
        <div className="inline-block mb-6 animate-badge-bounce">
          <span className="vault-cta-gradient text-primary-foreground font-heading font-bold text-sm uppercase tracking-widest px-5 py-2 rounded-full">
            🔥 Limited Time — Save 50%
          </span>
        </div>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary-foreground leading-tight mb-4">
          Your Digital Empire,{" "}
          <span className="text-primary">Ready to Launch</span>
        </h1>

        <p
          id="hero-description"
          className="font-heading text-xl sm:text-2xl text-primary font-semibold tracking-wide mb-6"
        >
          Unlock. Deploy. Profit.
        </p>

        <p className="text-vault-grey text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          <strong className="text-secondary-foreground">PLR Vault</strong> is the complete, done-for-you WordPress digital products store loaded with{" "}
          <strong className="text-secondary-foreground">100 ready-to-sell products</strong>,{" "}
          <strong className="text-secondary-foreground">$350+ in premium plugins</strong>, and everything you need to start earning passive income — today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#buy"
            className="vault-cta-gradient vault-pulse text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl transition-all hover:shadow-2xl inline-block"
          >
            Unlock the Vault — $47.97
          </a>
          <span className="text-vault-grey text-sm">
            <s className="text-vault-grey/60">$97.00</s>{" "}
            <span className="text-primary font-semibold">You save $49.03</span>
          </span>
        </div>

        <p className="text-vault-grey/70 text-sm">
          One-time payment • No recurring fees • Instant access
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
