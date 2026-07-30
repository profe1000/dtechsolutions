"use client";

import type React from "react";
import { useState } from "react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch(
        "https://next-js-practice-keyway-app.vercel.app/api/subscribers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) throw new Error(`Failed: ${response.status}`);
      const data = await response.json();
      setSubmitMsg(data.message || "");
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("❌ Subscription error:", error);
      alert("Something went wrong while subscribing. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br to-[#EA903F]  from-[#C91F4B] flex flex-col items-center justify-center px-6 text-white`}
    >
      {/* Logo Header */}
      <header className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-center">
        <div className="relative flex items-center justify-center gap-3">
          <div className="relative">
            <img
              src="/logob.png"
              alt="CFI Glow Paint Logo"
              className="relative h-16 w-16 object-contain drop-shadow-md transition-transform duration-500 hover:scale-110 rounded-2xl"
            />
          </div>
          {/* <span className="font-extrabold text-3xl md:text-4xl text-gray-900 tracking-wide">
            <span className="text-[#ffffff] fontKanitRegular">Soft</span>
            <span className="text-[#ffffff] fontKanitRegular">Life</span>
          </span> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="text-center mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight fontPoppinsRegular text-[#F4EADF]">
          Fresh Colour. Lasting Finish. Coming Soon.
          <br />
        </h1>
      </main>

      <main className="text-center max-w-xl text-cente">
        <p className="mt-4 text-[#F4EADF] text-lg sm:text-xl font-medium fontAlbertSansRegular"></p>

        <p className="mt-2 text-[#F4EADF] fontAlbertSansRegular text-base sm:text-lg md:text-lg">
          Be the first to discover inspiring colours, trusted paint solutions,
          and practical advice for your next project.
        </p>

        <p className="mt-4 text-[#F4EADF] fontAlbertSansRegular font-bold text-lg sm:text-xl md:text-xl">
          Get Exclusive First Access!
        </p>

        {/* Email Form */}

        <div className="mt-20">
          <form
            onSubmit={handleSubmit}
            className="mt-8 w-full max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-lg shadow-lg flex flex-col sm:flex-row overflow-hidden"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="flex-1 px-6 py-3 text-gray-800 placeholder-gray-400 bg-transparent border-none outline-none text-base"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-[#cd2f4c] text-white font-semibold hover:opacity-90 transition-all disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Notify Me"}
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <p className="mt-4 text-center text-white font-medium animate-pulse">
              {submitMsg || "Thanks! You're on the list."}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
