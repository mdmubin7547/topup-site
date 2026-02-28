"use client";

import { useSearchParams, useParams } from "next/navigation";
import { useState } from "react";

export default function UIDPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const pack = searchParams.get("pack");

  const [uid, setUid] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center hero-energy-bg px-4">
      <div className="glass-effect p-8 rounded-2xl w-full max-w-md text-center">
        
        <h1 className="text-2xl font-bold mb-4 gradient-text">
          {params.slug.toUpperCase()} - {pack} Diamonds
        </h1>

        <p className="text-sm text-slate-600 mb-6">
          Enter your Free Fire UID
        </p>

        <input
          type="text"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          placeholder="Enter UID"
          className="w-full p-3 rounded-xl border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          disabled={!uid}
          className="w-full gradient-bg glow-btn text-white py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          Continue to Payment
        </button>

      </div>
    </main>
  );
}
