import { useState } from "react";
import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-vault-light pt-20">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground mb-8">
            Have a question about PLR Vault? Fill out the form below and we'll get back to you within 24 hours.
          </p>

          {submitted ? (
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-2">Message Sent!</h2>
              <p className="text-muted-foreground text-sm">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-heading font-semibold text-sm text-foreground mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-heading font-semibold text-sm text-foreground mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block font-heading font-semibold text-sm text-foreground mb-1">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  maxLength={200}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-heading font-semibold text-sm text-foreground mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  maxLength={2000}
                  rows={5}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="vault-cta-gradient text-primary-foreground font-heading font-bold text-sm px-8 py-3 rounded-xl transition-all hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </main>
      <VaultFooter />
    </>
  );
};

export default ContactUs;
