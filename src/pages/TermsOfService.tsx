import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";

const TermsOfService = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-vault-light pt-20">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-heading font-bold text-3xl text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <p><strong>Last updated:</strong> February 2026</p>
          <p>By purchasing and using PLR Vault, you agree to the following terms and conditions.</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">License & Usage Rights</h2>
          <p>Upon purchase, you receive full ownership of the PLR Vault WordPress store package. You may resell, rebrand, and modify the included digital products in accordance with their respective PLR, MRR, or Resell Rights licenses.</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">Refund Policy</h2>
          <p>Due to the digital nature of this product, all sales are final. We stand behind the quality of PLR Vault and offer a satisfaction guarantee. If you experience technical issues, our support team will assist you.</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">Limitation of Liability</h2>
          <p>PLR Vault and AIWriterPros.com are not responsible for any income claims. Results vary based on individual effort, market conditions, and implementation.</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">Contact</h2>
          <p>For questions regarding these terms, please <a href="/contact" className="text-primary hover:underline">contact us</a>.</p>
        </div>
      </div>
    </main>
    <VaultFooter />
  </>
);

export default TermsOfService;
