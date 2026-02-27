"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 26 + 18,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 2,
    }));
    setDiamonds(items);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-energy-bg overflow-hidden px-4 py-20">
      {/* Floating diamonds */}
      {diamonds.map((d) => (
        <div
          key={d.id}
          className="absolute text-[rgba(124,58,237,0.12)] pointer-events-none select-none"
          style={{
            left: d.left,
            top: d.top,
            fontSize: d.size,
            animation: `float ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        >
          💎
        </div>
      ))}

      {/* Content */}
      <div className="container-custom text-center">
        <h1 className="text-5xl font-black gradient-text mb-4">
          Diamond TopUp 🔥
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          God level site is starting...
        </p>

        <div className="glass-effect inline-block px-6 py-4 rounded-2xl">
          <p className="font-bold mb-3">Premium Glass UI Working 💎</p>
          <button className="gradient-bg text-white px-5 py-2 rounded-xl">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
