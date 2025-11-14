import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const nothingFont = localFont({
  src: "../fonts/nothing-font-5x7.ttf",
});

export default function Projects() {
  return (
    <div className={`flex flex-col min-h-screen bg-zinc-50 dark:bg-black ${nothingFont.className}`}>
      <Navbar />

      <div className="p-20 text-center flex flex-col items-center">
        <h1 className="text-7xl text-orange-500 mb-10">Projects</h1>

        {/* Bombsquad Project */}
        <div className="w-full md:w-3/5 bg-zinc-900 border border-zinc-700 rounded-2xl p-10 mt-5 shadow-lg hover:shadow-orange-500/20 transition">
          <h2 className="text-4xl text-cyan-300 mb-4">BombSquad Server Project</h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            I modded a BombSquad game server using
            Python layers. I optimized player events, reduced lag, added real-time
            logging, matchmaking enhancements, mini-games, and integrated Discord
            communication using a Python backend.  
            <br /><br />
            The server handles 35k+ players (both online + offline) of SQL-based player data records while keeping
            latency extremely low, with custom caching logic and optimized scene
            behaviors.
          </p>
        </div>

        {/* WaveBot Project */}
        <div className="w-full md:w-3/5 bg-zinc-900 border border-zinc-700 rounded-2xl p-10 mt-8 shadow-lg hover:shadow-purple-500/20 transition">
          <h2 className="text-4xl text-purple-300 mb-4">WaveBot — discord.py Bot</h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            WaveBot is a Discord moderation + utility bot I created to manage a
            community server.  
            <br /><br />
            Features include role management, anti-spam, logging, fun commands,
            media utilities, cooldown systems, global settings, and fast execution
            using optimized discord.py cogs.  
            <br /><br />
            It keeps the server safe, active, and fully automated.
          </p>
        </div>
      </div>
    </div>
  );
}
