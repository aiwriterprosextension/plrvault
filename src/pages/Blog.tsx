import Navbar from "@/components/plrvault/Navbar";
import VaultFooter from "@/components/plrvault/VaultFooter";

const categories = ["PLR Strategy", "Traffic Generation", "WordPress Tips", "Monetization"];

const posts = [
  {
    title: "How to Flip PLR Products for Profit",
    excerpt:
      "Learn the exact process to take a basic PLR eBook, rebrand it with your own cover and tweaks, and sell it for $17–$47 on your own store. Most sellers skip these 3 steps.",
    category: "PLR Strategy",
    date: "Feb 10, 2026",
  },
  {
    title: "5 Free Traffic Sources for Digital Product Stores",
    excerpt:
      "You don't need paid ads to make your first sales. Discover five proven free traffic methods that drive targeted buyers to your WooCommerce store every day.",
    category: "Traffic Generation",
    date: "Feb 5, 2026",
  },
  {
    title: "Speed Up Your WordPress Store in 15 Minutes",
    excerpt:
      "A slow store kills conversions. Here's how to configure WP Rocket, optimize images, and leverage browser caching to get your PLR Vault store loading in under 2 seconds.",
    category: "WordPress Tips",
    date: "Jan 28, 2026",
  },
];

const Blog = () => (
  <>
    <Navbar />

    <main className="min-h-screen bg-vault-light pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-foreground leading-tight mb-4">
            Digital Marketing <span className="text-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tips, strategies, and insights to grow your digital products business.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className="bg-background border border-border/50 text-foreground font-heading font-semibold text-sm px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-background rounded-xl border border-border/50 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary/10 text-primary font-heading font-semibold text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-muted-foreground text-xs">{post.date}</span>
              </div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <button className="text-primary font-heading font-semibold text-sm hover:underline">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>

    <VaultFooter />
  </>
);

export default Blog;
