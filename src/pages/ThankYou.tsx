import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";

const ThankYou = () => (
  <>
    <Navbar />

    <main className="min-h-screen vault-navy-gradient pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-secondary-foreground leading-tight mb-4">
            Order Complete! <span className="text-primary">Access Your Downloads.</span>
          </h1>
          <p className="text-vault-grey text-lg max-w-2xl mx-auto">
            Everything you need is right here. Download your files and start building your digital empire.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl border border-border/50 p-6 text-center">
            <div className="text-4xl mb-4">🔐</div>
            <h2 className="font-heading font-bold text-xl text-secondary-foreground mb-2">System Core</h2>
            <p className="text-vault-grey text-sm mb-6">Your complete PLR Vault WordPress store package with all 100 products and plugins.</p>
            <a
              href="#download-zip"
              className="vault-cta-gradient text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-xl inline-block transition-all hover:shadow-lg w-full"
            >
              Download ZIP
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl border border-border/50 p-6 text-center">
            <div className="text-4xl mb-4">🎬</div>
            <h2 className="font-heading font-bold text-xl text-secondary-foreground mb-2">Installation Guide</h2>
            <p className="text-vault-grey text-sm mb-6">Step-by-step video tutorials walking you through the entire setup process.</p>
            <a
              href="#watch-video"
              className="vault-cta-gradient text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-xl inline-block transition-all hover:shadow-lg w-full"
            >
              Watch Video
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl border border-border/50 p-6 text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h2 className="font-heading font-bold text-xl text-secondary-foreground mb-2">Bonuses / Upgrades</h2>
            <p className="text-vault-grey text-sm mb-6">Access your 25GB+ bonus products library and any purchased upgrades.</p>
            <a
              href="#access-bonuses"
              className="vault-cta-gradient text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-xl inline-block transition-all hover:shadow-lg w-full"
            >
              Access Bonuses
            </a>
          </div>
        </div>

        {/* Affiliate CTA Banner */}
        <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8 text-center">
          <h2 className="font-heading font-bold text-2xl text-secondary-foreground mb-3">
            Want to Sell This? <span className="text-primary">Earn 50% Commission.</span>
          </h2>
          <p className="text-vault-grey mb-6 max-w-xl mx-auto">
            Join the PLR Vault affiliate program and earn generous commissions on every sale you refer.
          </p>
          <a
            href="/affiliates"
            className="vault-cta-gradient text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl inline-block transition-all hover:shadow-2xl"
          >
            Become an Affiliate
          </a>
        </div>
      </div>
    </main>

    <VaultFooter />
  </>
);

export default ThankYou;
