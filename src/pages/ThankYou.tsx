import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";

const ThankYou = () => (
  <>
    <Navbar />

    <main className="min-h-screen vault-navy-gradient pt-20">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="font-heading font-bold text-3xl sm:text-5xl text-secondary-foreground leading-tight mb-6">
          Thank You for Your <span className="text-primary">Purchase!</span>
        </h1>

        <p className="text-vault-grey text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Your PLR Vault access details have been sent to your email. Check your inbox (and spam folder) for the download link and setup instructions.
        </p>

        <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl border border-border/50 p-8 max-w-md mx-auto">
          <h2 className="font-heading font-bold text-xl text-secondary-foreground mb-4">Next Steps</h2>
          <ol className="text-vault-grey text-sm space-y-3 text-left">
            <li className="flex gap-3"><span className="text-primary font-bold">1.</span> Check your email for the download link</li>
            <li className="flex gap-3"><span className="text-primary font-bold">2.</span> Follow the step-by-step installation guide</li>
            <li className="flex gap-3"><span className="text-primary font-bold">3.</span> Start sharing your store and earning!</li>
          </ol>
        </div>
      </div>
    </main>

    <VaultFooter />
  </>
);

export default ThankYou;
