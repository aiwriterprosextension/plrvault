import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Freelance Blogger",
    stars: 5,
    quote:
      "I had my store live within an hour. Within the first week I made 3 sales — all passive. PLR Vault basically handed me a business. The affiliate program is bringing in promoters I never even had to recruit.",
  },
  {
    name: "James Rodriguez",
    role: "Amazon FBA Seller Transitioning Online",
    stars: 5,
    quote:
      "As someone coming from physical products, I was blown away by how turnkey PLR Vault is. 100 products ready to sell, no inventory, no shipping. I'm averaging $80/day in the second month. The premium plugins alone are worth more than the price.",
  },
  {
    name: "Priya Sharma",
    role: "Side-Hustle Entrepreneur",
    stars: 5,
    quote:
      "Zero tech skills and I still got everything set up following the video tutorials. The 25GB bonus library is insane — I've already added 40 more products to my store. Best investment I've made this year, hands down.",
  },
];

const faqs = [
  {
    q: "What is PLR Vault?",
    a: "PLR Vault is a complete, done-for-you WordPress WooCommerce store pre-loaded with 100 digital products. Every product carries Private Label Rights (PLR), Master Resell Rights (MRR), or Resell Rights (RR), meaning you can resell them as your own and keep 100 percent of the profits. It includes premium plugins worth over $350, a built-in affiliate program, and full documentation to get you earning within minutes.",
  },
  {
    q: "How much does PLR Vault cost?",
    a: "PLR Vault is currently on sale for $27.00, reduced from the regular price of $97.00. This one-time payment includes the complete WordPress store, 100 digital products, all premium plugins, the 25GB bonus products library, and lifetime access with no recurring fees.",
  },
  {
    q: "What digital products are included in PLR Vault?",
    a: "PLR Vault includes 100 diverse digital products spanning eBooks, templates, video courses, audio files, articles, software tools, and graphics packs. Each product comes with either Private Label Rights (PLR), Master Resell Rights (MRR), or Resell Rights (RR), allowing you to resell, rebrand, or modify them as you wish.",
  },
  {
    q: "Do I need technical skills to set up PLR Vault?",
    a: "No technical skills are required. PLR Vault comes with complete step-by-step documentation and video tutorials that walk you through the entire setup process. Most users complete the full installation in under 90 minutes, and you can start earning within 15 minutes of going live.",
  },
  {
    q: "What premium plugins are included for free with PLR Vault?",
    a: "PLR Vault includes six premium WordPress plugins at no extra cost: Elementor page builder ($49 value), WP Rocket speed optimization ($49), WP Content Copy Protection ($36), UpdraftPlus Backup ($76), WP Affiliate Platform ($49.95), and Wordfence Security ($99). That is over $350 in premium plugin value included free with your purchase.",
  },
  {
    q: "How does the PLR Vault built-in affiliate program work?",
    a: "PLR Vault comes with a fully configured affiliate program powered by WP Affiliate Platform. Your affiliates earn a generous 50 percent commission on every sale they refer. New affiliates receive a $10 welcome bonus, and the minimum payout threshold is just $50. This gives you a built-in marketing army promoting your store without upfront advertising costs.",
  },
  {
    q: "Can I really start earning money within 15 minutes of installing PLR Vault?",
    a: "Yes. Once PLR Vault is installed on your WordPress hosting, all 100 products are immediately live with descriptions, pricing, and payment processing ready to go. You can begin sharing your store link and accepting orders within 15 minutes of completing the installation process.",
  },
  {
    q: "Are there any hidden fees or recurring costs with PLR Vault?",
    a: "There are absolutely no hidden fees or recurring costs. The $27.00 sale price is a one-time payment that includes everything: the complete store, all 100 products, all premium plugins, the 25GB bonus library, documentation, and video tutorials. You own the store 100 percent with no monthly subscriptions or license renewals.",
  },
];

const ConversionSections = () => (
  <>
    {/* Testimonials */}
    <section id="testimonials" className="bg-vault-light py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground text-center mb-3">
          What <span className="text-primary">Customers</span> Are Saying
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          <strong className="text-foreground">Real results from real PLR Vault store owners.</strong>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background rounded-xl p-6 shadow-md border border-border/50">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section id="faq-section" className="bg-background py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground text-center mb-3">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          <strong className="text-foreground">Everything you need to know about PLR Vault before you unlock it.</strong>
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-vault-light rounded-xl border border-border/50 px-5 overflow-hidden"
            >
              <AccordionTrigger className="font-heading font-semibold text-foreground text-left py-4 hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Pricing / CTA */}
    <section id="pricing" className="vault-navy-gradient py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-40" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <div className="inline-block vault-cta-gradient text-primary-foreground font-heading font-bold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Limited Time Offer
        </div>

        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-secondary-foreground mb-8">
          Ready to Unlock Your <span className="text-primary">Digital Empire</span>?
        </h2>

        {/* Pricing box */}
        <div id="buy" className="bg-secondary/40 backdrop-blur-sm rounded-2xl border-2 border-primary/30 p-8 sm:p-10 max-w-lg mx-auto mb-8">
          <p className="font-heading text-secondary-foreground/60 text-lg mb-1">
            Regular Price: <s>$97.00</s>
          </p>
          <p className="font-heading font-bold text-5xl sm:text-6xl text-primary mb-2">
            $27.00
          </p>
          <div className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            You Save $70.00 (72% OFF)
          </div>

          <ul className="text-secondary-foreground/80 text-sm space-y-2 text-left max-w-sm mx-auto mb-8">
            {[
              "Complete WordPress WooCommerce Store",
              "100 Pre-Loaded Digital Products (PLR/MRR/RR)",
              "$350+ in Premium Plugins — FREE",
              "Built-In Affiliate Program",
              "25GB+ Bonus Products Library",
              "Full Documentation + Video Tutorials",
              "Lifetime Access — No Recurring Fees",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#buy"
            className="vault-cta-gradient vault-pulse text-primary-foreground font-heading font-bold text-xl px-12 py-5 rounded-xl inline-block transition-all hover:shadow-2xl w-full sm:w-auto"
          >
            Unlock the Vault Now
          </a>
          <p className="text-vault-grey text-xs mt-4">One-time payment • Instant download • 100% ownership</p>
        </div>

        {/* Guarantee badge */}
        <div className="inline-flex items-center gap-3 border-2 border-primary/40 rounded-full px-6 py-3">
          <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
            <span className="text-primary font-heading font-bold text-xs leading-tight text-center">100%<br />✓</span>
          </div>
          <p className="text-secondary-foreground/80 text-sm text-left">
            <strong className="text-secondary-foreground">Satisfaction Guarantee</strong><br />
            Full confidence in your purchase. Quality assured.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default ConversionSections;
