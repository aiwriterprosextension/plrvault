import { Helmet } from "react-helmet-async";
import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OTO2 = () => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Expansion Pack",
          offers: { "@type": "Offer", price: "47.00", priceCurrency: "USD" },
        })}
      </script>
    </Helmet>

    <Navbar />

    <main className="min-h-screen vault-navy-gradient pt-20">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="text-5xl mb-6">🚀</div>
        <h1 className="font-heading font-bold text-3xl sm:text-5xl text-secondary-foreground leading-tight mb-6">
          10X Your Profits with the{" "}
          <span className="text-primary">Expansion Pack</span>
        </h1>

        <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-10">
          <div className="bg-secondary/40 rounded-xl border border-border/50 p-6">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-heading font-bold text-secondary-foreground mb-1">100 EXTRA Products</h3>
            <p className="text-vault-grey text-sm">Unique digital products different from the main pack</p>
          </div>
          <div className="bg-secondary/40 rounded-xl border border-border/50 p-6">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-heading font-bold text-secondary-foreground mb-1">Social Media Kit</h3>
            <p className="text-vault-grey text-sm">Complete marketing kit to promote your store</p>
          </div>
        </div>

        <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl border-2 border-primary/30 p-8 max-w-md mx-auto mb-8">
          <p className="font-heading font-bold text-5xl text-primary mb-2">$47.00</p>
          <p className="text-secondary-foreground/60 text-sm mb-6">One-time • Instant access</p>

          <a
            href="#jvzoo-oto2"
            className="vault-cta-gradient vault-pulse text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl inline-block transition-all hover:shadow-2xl w-full"
          >
            YES, Upgrade My Order
          </a>
        </div>

        <a
          href="/thank-you"
          className="text-vault-grey/60 text-sm hover:text-vault-grey transition-colors underline"
        >
          No thanks, take me to my purchase
        </a>

        {/* FAQ */}
        <div className="mt-16 text-left">
          <h2 className="font-heading font-bold text-2xl text-secondary-foreground text-center mb-8">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="q1" className="bg-secondary/30 rounded-xl border border-border/50 px-5">
              <AccordionTrigger className="font-heading font-semibold text-secondary-foreground text-left py-4 hover:no-underline hover:text-primary">
                Are these products unique?
              </AccordionTrigger>
              <AccordionContent className="text-vault-grey text-sm pb-4">
                Yes, they are completely different from the 100 products in the main PLR Vault pack.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="bg-secondary/30 rounded-xl border border-border/50 px-5">
              <AccordionTrigger className="font-heading font-semibold text-secondary-foreground text-left py-4 hover:no-underline hover:text-primary">
                Do I get Resell Rights?
              </AccordionTrigger>
              <AccordionContent className="text-vault-grey text-sm pb-4">
                Yes, full PLR/MRR included with every product in the Expansion Pack.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>

    <VaultFooter />
  </>
);

export default OTO2;
