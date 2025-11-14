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
        <h1 className="text-7xl text-orange-500 mb-10">About Me 🗿</h1>

        {/* Bombsquad Project */}
        <div className="w-full md:w-3/5 bg-zinc-900 border border-zinc-700 rounded-2xl p-10 mt-5 shadow-lg hover:shadow-orange-500/20 transition">
          <h2 className="text-4xl text-cyan-200 mb-4">Learning slowly!</h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            Hello, I'm <span className="text-green-400 text-3xl">Akshay Mishra</span>, currently studying <span className="text-cyan-400">BTech in Computer Science </span> with <span className="text-yellow-400">Cybersecurity</span> at <span className="text-violet-400">SRM Institute of Science and Technology</span>
          </p>
        </div>

    
      </div>
    </div>
  );
}
