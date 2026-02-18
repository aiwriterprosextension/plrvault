import { Helmet } from "react-helmet-async";
import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OTO1 = () => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "White Glove Install",
          offers: { "@type": "Offer", price: "67.00", priceCurrency: "USD" },
        })}
      </script>
    </Helmet>

    <Navbar />

    {/* Urgent banner */}
    <div className="bg-destructive text-destructive-foreground text-center py-3 font-heading font-bold text-sm sm:text-base tracking-wide mt-14">
      ⚠️ WAIT! Your Order Is Not Complete...
    </div>

    <main className="min-h-screen vault-navy-gradient">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center">
        <h1 className="font-heading font-bold text-3xl sm:text-5xl text-secondary-foreground leading-tight mb-6">
          Skip the Technical Setup.{" "}
          <span className="text-primary">Let Us Install It For You.</span>
        </h1>

        <p className="text-vault-grey text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Our expert team will set up your entire PLR Vault store on your hosting — themes, plugins, products, payment gateway — everything configured and ready to earn.
        </p>

        <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl border-2 border-primary/30 p-8 max-w-md mx-auto mb-8">
          <p className="font-heading font-bold text-5xl text-primary mb-2">$67.00</p>
          <p className="text-secondary-foreground/60 text-sm mb-6">One-time • Done in 24 hours</p>

          <a
            href="#jvzoo-oto1"
            className="vault-cta-gradient vault-pulse text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl inline-block transition-all hover:shadow-2xl w-full"
          >
            YES, Install It For Me
          </a>
        </div>

        <a
          href="/downsell"
          className="text-vault-grey/60 text-sm hover:text-vault-grey transition-colors underline"
        >
          No thanks, I will install it myself
        </a>

        {/* FAQ */}
        <div className="mt-16 text-left">
          <h2 className="font-heading font-bold text-2xl text-secondary-foreground text-center mb-8">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="q1" className="bg-secondary/30 rounded-xl border border-border/50 px-5">
              <AccordionTrigger className="font-heading font-semibold text-secondary-foreground text-left py-4 hover:no-underline hover:text-primary">
                How long does it take?
              </AccordionTrigger>
              <AccordionContent className="text-vault-grey text-sm pb-4">
                Typically within 24 hours. Our team works fast to get your store live as quickly as possible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="bg-secondary/30 rounded-xl border border-border/50 px-5">
              <AccordionTrigger className="font-heading font-semibold text-secondary-foreground text-left py-4 hover:no-underline hover:text-primary">
                Is it secure?
              </AccordionTrigger>
              <AccordionContent className="text-vault-grey text-sm pb-4">
                Yes, we use temporary developer access that is revoked immediately after setup is complete.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>

    <VaultFooter />
  </>
);

export default OTO1;
