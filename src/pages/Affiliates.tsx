import { Helmet } from "react-helmet-async";
import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const commissions = [
  { product: "Front End (PLR Vault)", price: "$27.00", commission: "$13.50" },
  { product: "OTO1 (White Glove Install)", price: "$67.00", commission: "$33.50" },
  { product: "OTO2 (Expansion Pack)", price: "$47.00", commission: "$23.50" },
];

const emailSwipes = [
  {
    title: "Launch Email",
    body: `Subject: This done-for-you digital store just dropped...\n\nHey [Name],\n\nI just found something wild — a fully loaded WordPress store with 100 digital products, premium plugins, and an affiliate program built right in.\n\nIt's called PLR Vault and it's on sale for just $27.\n\nCheck it out: [YOUR LINK]\n\nTalk soon.`,
  },
  {
    title: "Follow-Up Email",
    body: `Subject: Still on the fence about passive income?\n\nHey [Name],\n\nRemember PLR Vault? The done-for-you WordPress store with 100 products ready to sell?\n\nPeople are already making sales within hours of setting it up. No tech skills needed.\n\nGrab it before the price goes up: [YOUR LINK]`,
  },
  {
    title: "Last Chance Email",
    body: `Subject: Final call — PLR Vault at $27 won't last\n\nHey [Name],\n\nThis is your last chance to grab PLR Vault at the launch price of $27.\n\n100 products. $350+ in plugins. Built-in affiliate program. All yours.\n\nDon't miss it: [YOUR LINK]`,
  },
];

const bannerSizes = ["728x90", "300x250", "160x600", "468x60", "120x600", "250x250"];

const Affiliates = () => (
  <>
    <Helmet>
      <meta
        name="description"
        content="Join the PLR Vault affiliate program and earn 50% commissions on high-converting digital products."
      />
    </Helmet>

    <Navbar />

    <main className="min-h-screen vault-navy-gradient pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="text-5xl mb-6">🤝</div>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-secondary-foreground leading-tight mb-4">
            Partner With PLR Vault —{" "}
            <span className="text-primary">Earn 50% Commission</span>
          </h1>
          <p className="text-vault-grey text-lg max-w-2xl mx-auto">
            Promote a high-converting digital product and earn generous commissions on every sale across the entire funnel.
          </p>
        </div>

        {/* Commission Table */}
        <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden mb-16">
          <div className="bg-primary/10 px-6 py-4 border-b border-border/50">
            <h2 className="font-heading font-bold text-xl text-secondary-foreground">
              Commission Breakdown
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left font-heading font-semibold text-secondary-foreground text-sm px-6 py-3">Product</th>
                  <th className="text-center font-heading font-semibold text-secondary-foreground text-sm px-6 py-3">Price</th>
                  <th className="text-center font-heading font-semibold text-primary text-sm px-6 py-3">Your Commission (50%)</th>
                </tr>
              </thead>
              <tbody>
                {commissions.map((c) => (
                  <tr key={c.product} className="border-b border-border/30">
                    <td className="text-vault-grey text-sm px-6 py-4">{c.product}</td>
                    <td className="text-secondary-foreground text-sm text-center px-6 py-4">{c.price}</td>
                    <td className="text-primary font-bold text-sm text-center px-6 py-4">{c.commission}</td>
                  </tr>
                ))}
                <tr>
                  <td className="font-heading font-bold text-secondary-foreground text-sm px-6 py-4">Total Per Customer</td>
                  <td className="text-secondary-foreground font-bold text-sm text-center px-6 py-4">$141.00</td>
                  <td className="text-primary font-bold text-sm text-center px-6 py-4">$70.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Email Swipes */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-2xl text-secondary-foreground text-center mb-8">
            📧 Email Swipes
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {emailSwipes.map((swipe, i) => (
              <AccordionItem
                key={i}
                value={`swipe-${i}`}
                className="bg-secondary/30 rounded-xl border border-border/50 px-5"
              >
                <AccordionTrigger className="font-heading font-semibold text-secondary-foreground text-left py-4 hover:no-underline hover:text-primary">
                  {swipe.title}
                </AccordionTrigger>
                <AccordionContent className="text-vault-grey text-sm pb-4 whitespace-pre-line">
                  {swipe.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Banners Grid */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-2xl text-secondary-foreground text-center mb-8">
            🖼️ Promotional Banners
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bannerSizes.map((size) => (
              <div
                key={size}
                className="bg-secondary/30 rounded-xl border border-border/50 p-6 flex flex-col items-center justify-center min-h-[120px]"
              >
                <p className="text-primary font-heading font-bold text-lg mb-1">{size}</p>
                <p className="text-vault-grey text-xs">Banner placeholder</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#jvzoo-affiliate-request"
            className="vault-cta-gradient vault-pulse text-primary-foreground font-heading font-bold text-xl px-12 py-5 rounded-xl inline-block transition-all hover:shadow-2xl"
          >
            Get Your Affiliate Link
          </a>
          <p className="text-vault-grey/60 text-sm mt-4">
            $10 welcome bonus • $50 minimum payout • Instant approval
          </p>
        </div>
      </div>
    </main>

    <VaultFooter />
  </>
);

export default Affiliates;
