import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";

const Downsell = () => (
  <>
    <Navbar />

    <main className="min-h-screen vault-navy-gradient pt-20">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="text-5xl mb-6">😔</div>
        <h1 className="font-heading font-bold text-3xl sm:text-5xl text-secondary-foreground leading-tight mb-6">
          Okay, Money is Tight.{" "}
          <span className="text-primary">I Understand.</span>
        </h1>

        <p className="text-vault-grey text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          I'll waive the priority fee. Get the same professional installation service for{" "}
          <strong className="text-primary">$20 off</strong>.
        </p>

        <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl border-2 border-primary/30 p-8 max-w-md mx-auto mb-8">
          <p className="text-secondary-foreground/60 text-lg mb-1">
            Was: <s>$67.00</s>
          </p>
          <p className="font-heading font-bold text-5xl text-primary mb-2">$47.00</p>
          <p className="text-secondary-foreground/60 text-sm mb-6">Same service • Discounted price</p>

          <a
            href="#jvzoo-downsell"
            className="vault-cta-gradient vault-pulse text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl inline-block transition-all hover:shadow-2xl w-full"
          >
            YES, Install It For $47
          </a>
        </div>

        <a
          href="/oto2"
          className="text-vault-grey/60 text-sm hover:text-vault-grey transition-colors underline"
        >
          No thanks, I'll do it myself
        </a>
      </div>
    </main>

    <VaultFooter />
  </>
);

export default Downsell;
