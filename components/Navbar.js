"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
      <div className="container-custom flex items-center justify-between py-4">
        <h1 className="text-xl font-bold gradient-text">
          DiamondTopUp
        </h1>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-purple-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-purple-600 transition">
            Packs
          </a>
          <a href="#" className="hover:text-purple-600 transition">
            Support
          </a>
        </div>
      </div>
    </nav>
  );
    }
