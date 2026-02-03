import Image from "next/image";
import localFont from "next/font/local";
import { Roboto_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";

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
        <div>
          <img className="rounded-full w-96 h-96" src="pfp.png" />
        </div>

        <p className="text-7xl mt-10">
  <span className="text">
    Hey, wassup? I'm <span className="text-orange-500">Akshay!</span>
  </span>
</p>

        <div className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-center size-8"> 
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>

  <p className="p-5 text-cyan-300 text-2xl animate-pulse delay-2">Ghaziabad, Uttar Pradesh</p>
</div>


              </div>
    </div>
  );
}
