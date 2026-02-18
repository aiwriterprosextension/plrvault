import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-vault-light pt-20">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-heading font-bold text-3xl text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <p><strong>Last updated:</strong> February 2026</p>
          <p>PLR Vault ("we," "us," or "our"), operated by AIWriterPros.com, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit plrvault.aiwriterpros.com.</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">Information We Collect</h2>
          <p>We may collect personal information you provide directly, such as your name, email address, and payment details when you make a purchase. We also collect usage data automatically, including IP address, browser type, and pages visited.</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">How We Use Your Information</h2>
          <p>We use your information to process transactions, deliver digital products, send order confirmations, improve our website, and communicate updates or promotions (with your consent).</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">Data Protection</h2>
          <p>We implement industry-standard security measures to protect your personal information. Payment processing is handled by secure third-party providers.</p>
          <h2 className="font-heading font-bold text-xl text-foreground mt-8">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please <a href="/contact" className="text-primary hover:underline">contact us</a>.</p>
        </div>
      </div>
    </main>
    <VaultFooter />
  </>
);

export default PrivacyPolicy;
