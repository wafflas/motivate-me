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

  async function fetchQuoteData() {
    const quoteData = await fetchQuote();
    const { content, author } = quoteData;
    setQuote(content);
    setAuthor(author);
    setRandomNumber(Math.floor(Math.random() * 1000) + 1);
  }

  useEffect(() => {
    fetchQuoteData();
  }, []);



  return (
    <div
      className="bg-white rounded-3xl  
    flex flex-col 
    items-center 
    justify-center
    mt-20
    h-[419px]
    w-[696px]
    border-b-4 border-gray-300  
    relative
    gap-3"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
        <QuoteHeader quoteNumber={randomNumber} />
      </div> 
      <p className="text-black text-lg md:text-xl lg:text-2xl font-inter italic text-center mt-4">
        "{quote}"
      </p>

      <Author author={author} />
      <div className="absolute left-1/2 -bottom-7 transform -translate-x-1/2">
        <DiceButton onClick={() => fetchQuoteData()} />
      </div>
    </div>
  );
};

export default QuoteContainer;
