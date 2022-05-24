import React from 'react'

const CardService = ({ data }) => {
  return (
    <div className="hover:bg-orange-400 flex md:w-[12rem] w-[9rem] text-white text-center p-5 flex-col items-center justify-center space-y-[1rem] bg-orange-500">
      <div className='text-[5rem] '>{data.icon}</div>
      <h1>{data.title}</h1>
      <p className='font-thin text-sm '>{data.desc}</p>
    </div>
  )
}

export default CardService
