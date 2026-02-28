export default function ServerPage({ params }) {
  const serverName = params.slug.replace("-", " ");

  return (
    <main className="min-h-screen hero-energy-bg flex items-center justify-center px-4">
      <div className="glass-effect p-8 rounded-2xl text-center max-w-md w-full">
        <h1 className="text-3xl font-black gradient-text capitalize">
          {serverName} TopUp
        </h1>

        <p className="mt-3 text-slate-600">
          Select your recharge option below.
        </p>

        <div className="mt-6 space-y-3">
          <button className="w-full gradient-bg glow-btn text-white py-3 rounded-xl font-semibold">
            100 Diamonds
          </button>

          <button className="w-full gradient-bg glow-btn text-white py-3 rounded-xl font-semibold">
            310 Diamonds
          </button>

          <button className="w-full gradient-bg glow-btn text-white py-3 rounded-xl font-semibold">
            520 Diamonds
          </button>
        </div>

        <a
          href="/"
          className="inline-block mt-6 text-sm text-purple-600"
        >
          ← Back Home
        </a>
      </div>
    </main>
  );
}
