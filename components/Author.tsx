import React from 'react'

const Author = ({author}: {author: string}) => {
  return (
    <div className='text-gray-500 text-2xl italic font-inter drop-shadow-lg'>-{author}</div>
  )
}

export default Author