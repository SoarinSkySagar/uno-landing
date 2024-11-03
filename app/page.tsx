import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="bg-pink-400 py-16 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <Image src="/header.png" alt="header" width={300} height={300} />
            <p className="text-2xl text-white">
              An online UNO game built on top of a provable game engine{" "}
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300">
              Try Out our Demo
            </button>
          </div>
          <div className="relative">
            <Image
              src="/hero.png"
              alt="Character illustration"
              className="rounded-lg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-screen">
          <svg viewBox="0 0 1440 100" className="fill-yellow-400">
            <path d="M0,60 Q60,100 120,60 T240,60 T360,60 T480,60 T600,60 T720,60 T840,60 T960,60 T1080,60 T1200,60 T1320,60 T1440,60 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      <div className="bg-yellow-400 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/cards.png"
                alt="Cards"
                className="rounded-lg"
                width={1000}
                height={1000}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                The future of gaming, now in UNO!
              </h2>
              <p className="text-lg">
                Play UNO like never before with a provable, zero-knowledge game
                engine on Web3—secure, fair, and entirely decentralized. Dive
                into the ultimate online experience where every move is
                verifiably fair and transparent.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-center">How it works</h2>
            <div className="grid grid-cols-3 gap-8">
              {["Provable", "Transparent", "Secure"].map((step, index) => (
                <div key={index} className="bg-pink-200 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-pink-400 rounded-full mb-4 flex items-center justify-center">
                    {index === 0 && (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step}</h3>
                  <p className="text-gray-700">
                    {index === 0 &&
                      "Every game is backed by zero-knowledge proofs, ensuring each move is fair and tamper-proof."}
                    {index === 1 &&
                      "All game actions are verifiable on-chain, offering full transparency without compromising privacy."}
                    {index === 2 &&
                      "Built on Web3, our game safeguards your data and tokens, creating a trustworthy environment for all players."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
