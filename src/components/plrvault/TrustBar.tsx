import { Package, Puzzle, Clock, Users } from "lucide-react";

const stats = [
  { icon: Package, value: "100", label: "Digital Products" },
  { icon: Puzzle, value: "$350+", label: "In Free Plugins" },
  { icon: Clock, value: "15 min", label: "To First Sale" },
  { icon: Users, value: "4,000+", label: "Happy Customers" },
];

const TrustBar = () => (
  <section className="bg-vault-navy-mid py-6 border-y border-primary/20">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center justify-center gap-3">
          <stat.icon className="text-primary shrink-0" size={28} />
          <div>
            <p className="font-heading font-bold text-xl text-secondary-foreground">{stat.value}</p>
            <p className="text-vault-grey text-xs uppercase tracking-wider">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
