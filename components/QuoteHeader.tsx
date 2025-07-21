import React from 'react'
import { Lacquer } from 'next/font/google'


const lacquer = Lacquer({ subsets: ['latin'], weight: '400' })
const QuoteHeader = ({quoteNumber}: {quoteNumber: number}) => {

  return (
    <div className={`${lacquer.className} text-black text-3xl font-bold font-inter`}>QUOTE#{quoteNumber}</div>    
  )
}

export default QuoteHeader