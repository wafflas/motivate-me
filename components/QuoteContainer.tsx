"use client";
import React, { useEffect, useState } from "react";
import QuoteHeader from "./QuoteHeader";
import Author from "./Author";
import DiceButton from "./DiceButton";
import fetchQuote from "@/app/fetchQuote";

const QuoteContainer = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [copied, setCopied] = useState(false);

  async function fetchQuoteData() {
    const quoteData = await fetchQuote();
    const { content, author } = quoteData;
    setQuote(content);
    setAuthor(author);
    setRandomNumber(Math.floor(Math.random() * 1000) + 1);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${quote}" - ${author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    fetchQuoteData();
  }, []);

  // Generate tags dynamically based on the quote content
  function getTags(quote: string) {
    const tagMap: { [key: string]: string } = {
      growth: "growth",
      focus: "focus",
      mindset: "mindset",
      success: "success",
      courage: "courage",
      perseverance: "perseverance",
      motivation: "motivation",
      inspire: "inspiration",
      dream: "dream",
      achieve: "achievement",
      start: "action",
      now: "action",
      time: "action",
      believe: "belief",
      learn: "learning",
      change: "change",
      challenge: "challenge",
      opportunity: "opportunity",
      goal: "goal",
      hope: "hope",
    };
    const lower = quote.toLowerCase();
    const tags = Object.keys(tagMap)
      .filter((word) => lower.includes(word))
      .map((word) => tagMap[word]);
    // Remove duplicates
    return Array.from(new Set(tags));
  }
  const tags = getTags(quote);

  return (
    <div className="quote-card bg-white rounded-3xl flex flex-col items-center justify-center mt-6 sm:mt-12 w-[98vw] sm:w-[1200px] h-[400px] border-b-4 border-gray-300 relative gap-5 px-2 sm:px-8 py-4 sm:py-8 ">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 sm:mt-4">
        <QuoteHeader quoteNumber={randomNumber} />
      </div>
      <p
        key={quote}
        className="fade-in slide-in-up text-black text-sm sm:text-base md:text-lg lg:text-2xl font-inter italic text-center mt-4 px-2 sm:px-0 max-w-full "
      >
        &quot;{quote}&quot;
      </p>
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={handleCopy}
          className="mt-2 p-2 bg-transparent hover:bg-gray-200 rounded-full transition-colors duration-200 text-xl relative"
          title="Copy to clipboard"
        >
          <span role="img" aria-label="Copy">
            📋
          </span>
        </button>
        {copied && <span className="text-xs text-green-600 mt-1">Copied!</span>}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold"
              >
                #{tag}
              </span>
            ))
          ) : (
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">
              #motivation
            </span>
          )}
        </div>
      </div>
      <Author author={author} />
      <div className="absolute left-1/2 -bottom-12 sm:-bottom-10 transform -translate-x-1/2">
        <DiceButton onClick={() => fetchQuoteData()} />
      </div>
    </div>
  );
};

export default QuoteContainer;
