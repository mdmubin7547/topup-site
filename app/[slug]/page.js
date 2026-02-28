import Link from "next/link";

const PACKS = [
  { id: "100", name: "100 Diamonds", price: "৳120" },
  { id: "310", name: "310 Diamonds", price: "৳350" },
  { id: "520", name: "520 Diamonds", price: "৳590" },
];

export default function PackSelect({ params }) {
  const { slug } = params;

  return (
    <main className="min-h-screen hero-energy-bg py-10">
      <div className="container-custom text-center">
        <h1 className="text-3xl font-black mb-6">
          <span className="gradient-text neon-text">
            {slug.toUpperCase()} Packs
          </span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {PACKS.map((p) => (
            <Link
              key={p.id}
              href={`/${slug}/uid?pack=${p.id}`}
              className="glass-effect p-6 rounded-2xl text-center hover:scale-[1.02] transition-transform"
            >
              <div className="text-3xl mb-2">💎</div>
              <div className="font-bold">{p.name}</div>
              <div className="text-sm text-slate-600 mt-1">{p.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
