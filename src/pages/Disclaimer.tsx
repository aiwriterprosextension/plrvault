import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";

const Disclaimer = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-vault-light pt-20">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-heading font-bold text-3xl text-foreground mb-8">Disclaimer</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <p><strong>Last updated:</strong> February 2026</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">Earnings Disclaimer</h2>
          <p>PLR Vault makes no guarantees regarding income or financial results. Any income figures mentioned on this website are illustrative examples and should not be considered as a promise of earnings. Your results will vary depending on your effort, experience, and market conditions.</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">Product Disclaimer</h2>
          <p>PLR Vault provides a done-for-you WordPress store with digital products. We do not guarantee that these products will generate sales. The buyer is responsible for marketing, hosting, and maintaining their store.</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">Affiliate Disclaimer</h2>
          <p>This website may contain affiliate links. If you click on an affiliate link and make a purchase, we may receive a commission at no additional cost to you.</p>
        </div>
      </div>
    </main>
    <VaultFooter />
  </>
);

export default Disclaimer;
