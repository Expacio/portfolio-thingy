import Image from "next/image";
import localFont from "next/font/local";
import { Roboto_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"]
})

const nothingFont = localFont({
  src: "./fonts/nothing-font-5x7.ttf",
});

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen bg-zinc-50 dark:bg-black ${nothingFont.className}`}>
      <Navbar />

      <div className="p-20 text-center flex flex-col items-center">
        <div className="loader-ring">
          <img className="rounded-full w-96 h-96" src="pfp.png" />
        </div>

        <p className="text-7xl mt-10">
          Hey, wassup? I'm <span className="text-orange-500">Akshay!</span>
        </p>
        <div className="flex items-center">
  {/* Location Icon */}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-center size-8"> 
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>

  <p className="p-5 text-cyan-300 text-2xl">Ghaziabad, Uttar Pradesh</p>
</div>

{/* Social icons */}
<div className="flex flex-col gap-6 mt-2">
  {/* Discord */}
  <a href="https://discord.com/users/489750111094702110" target="_blank" rel="noopener noreferrer">
    <svg className="w-10 h-10 text-indigo-400 hover:text-indigo-300 transition" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.616 0 12.64 12.64 0 0 0-.617-1.249.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C1.79 9.04 1.113 13.58 1.42 18.067a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.862-.878.077.077 0 0 1-.008-.128c.125-.094.25-.19.37-.288a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.098.245.194.37.289a.077.077 0 0 1-.006.128c-.6.35-1.22.644-1.864.878a.076.076 0 0 0-.04.107c.36.698.77 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.876 19.876 0 0 0 6.001-3.03.077.077 0 0 0 .03-.056c.5-6.325-.838-10.838-3.548-13.672a.06.06 0 0 0-.03-.03ZM8.02 15.334c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.094 2.157 2.419 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.094 2.157 2.419 0 1.334-.947 2.419-2.157 2.419Z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://instagram.com/z3keyeager" target="_blank" rel="noopener noreferrer">
    <svg className="w-10 h-10 text-pink-400 hover:text-pink-300 transition" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.25-.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/>
    </svg>
  </a>
</div>

              </div>
    </div>
  );
}
