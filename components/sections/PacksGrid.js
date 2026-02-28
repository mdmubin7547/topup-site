"use client";

const packs = [
  { title: "BD Server", slug: "/bd", emoji: "🇧🇩" },
  { title: "ID Code TopUp", slug: "/idcode", emoji: "🆔" },
  { title: "Weekly/Monthly", slug: "/weekly", emoji: "💎" },
  { title: "Level Up Pass", slug: "/levelup", emoji: "⬆️" },
  { title: "Weekly Lite", slug: "/weekly-lite", emoji: "🟣" },
  { title: "Evo Access", slug: "/evo-access", emoji: "⚡" },
  { title: "Taiwan Server", slug: "/taiwan", emoji: "🇹🇼" },
  { title: "India Server", slug: "/india", emoji: "🇮🇳" },
  { title: "Brazil Server", slug: "/brazil", emoji: "🇧🇷" },
  { title: "Singapore Server", slug: "/singapore", emoji: "🇸🇬" },
  { title: "Pakistan Server", slug: "/pakistan", emoji: "🇵🇰" },
  { title: "Indonesia", slug: "/indonesia", emoji: "🇮🇩" },
];

export default function PacksGrid() {
  return (
    <section className="container-custom py-14">
      <h2 className="text-3xl font-black mb-8 text-center">
        <span className="gradient-text neon-text">
          Free Fire Purchase
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {packs.map((item) => (
          <a
            key={item.title}
            href={item.slug}
            className="glass-effect p-6 rounded-2xl text-center hover:scale-[1.02] transition-transform"
          >
            <div className="text-4xl mb-3">{item.emoji}</div>
            <div className="font-bold">{item.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
