import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import QuoteContainer from "@/components/QuoteContainer";
import DiceButton from "@/components/DiceButton";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="w-full max-w-md flex flex-col items-center justify-center">
        <h1 className="text-4xl text-black font-bold font-inter text-center font-change">
          Motivate Me !
        </h1>
        <div className="flex flex-col items-center justify-center">
          <QuoteContainer />
        </div>
      </div>
    </main>
  );
}
