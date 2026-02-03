import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const nothingFont = localFont({
  src: "../fonts/nothing-font-5x7.ttf",
});

export default function Projects() {
  return (
    <div className={`flex flex-col min-h-screen bg-zinc-50 dark:bg-black ${nothingFont.className}`}>
      <Navbar />

      <div className="p-20 text-center flex flex-col items-center">
        <h1 className="text-7xl text-orange-500 mb-10">About Me 🗿</h1>

        <div className="w-full md:w-3/5 bg-zinc-900 border border-zinc-700 rounded-2xl p-10 mt-5 shadow-lg">
          <h2 className="text-4xl text-cyan-200 mb-4">Learning slowly!</h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            Hello, I'm <span className="text-green-400 text-3xl">Akshay Mishra</span>, currently studying <span className="text-cyan-400">BTech in Computer Science </span> with <span className="text-yellow-400">Cybersecurity</span> at <span className="text-violet-400">SRM Institute of Science and Technology</span>
          </p>
        </div>

    
      </div>
      <p className="text-xl text-zinc leading-relaxed">
        Socials
      </p>
      <div className="flex gap-8 justify-center items-center py-10">
  <a href="https://www.instagram.com/y7.akshay/" className="transition-transform hover:scale-110">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512" 
      className="h-12 w-12 fill-[#c13584]"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  </a>
  <a href="https://discord.com/users/489750111094702110/" className="transition-transform hover:scale-110">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 16 16" 
      className="h-12 w-12 fill-[#5865F2]"
    >
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
    </svg>
  </a>
</div>
</div>
  );
}
