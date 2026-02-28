"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PayPage({ params }) {
  const router = useRouter();
  const search = useSearchParams();

  const pack = search.get("pack");
  const price = search.get("price");
  const uid = search.get("uid");

  const [method, setMethod] = useState("bkash");

  function handleConfirm() {
    router.push(
      `/${params.slug}/success?pack=${pack}&price=${price}&uid=${uid}&method=${method}`
    );
  }

  return (
    <main className="min-h-screen hero-energy-bg py-10">
      <div className="container-custom">
        <h1 className="text-3xl font-black mb-6">
          <span className="gradient-text neon-text">Payment</span>
        </h1>

        <div className="glass-effect p-6 rounded-2xl mb-6">
          <div>Server: {params.slug}</div>
          <div>Pack: {pack}</div>
          <div>UID: {uid}</div>
          <div className="font-bold mt-2">Total: ৳{price}</div>
        </div>

        <div className="glass-effect p-6 rounded-2xl">
          <div className="font-semibold mb-4">Select Method</div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setMethod("bkash")}
              className="p-4 rounded-xl bg-white/60"
            >
              bKash
            </button>

            <button
              onClick={() => setMethod("nagad")}
              className="p-4 rounded-xl bg-white/60"
            >
              Nagad
            </button>
          </div>

          <button
            onClick={handleConfirm}
            className="mt-6 gradient-bg glow-btn text-white px-6 py-3 rounded-xl font-semibold w-full"
          >
            Confirm Order →
          </button>
        </div>
      </div>
    </main>
  );
}
