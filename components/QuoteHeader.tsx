import React from "react";
import { Inter } from "next/font/google";
import { FaQuoteLeft } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"], weight: "700" });
const QuoteHeader = ({ quoteNumber }: { quoteNumber: number }) => {
  return (
    <div className="flex justify-center items-center">
      <span
        key={quoteNumber}
        className={`${inter.className} flex items-center gap-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow-lg transition-all duration-300 fade-in`}
      >
        <FaQuoteLeft className="text-white text-xs sm:text-sm opacity-80" />
        QUOTE#{quoteNumber}
      </span>
    </div>
  );
};

export default QuoteHeader;
