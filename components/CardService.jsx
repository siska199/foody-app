import React from 'react'
import { useSelector } from 'react-redux'

const CardService = ({ data }) => {

  const theme = useSelector(state=>state.theme.value)

  return (
    <div
      className={`flex w-[9rem] flex-col items-center justify-center space-y-[1rem] p-5 text-center text-white hover:bg-orange-400 md:w-[12rem] ${theme.primaryCard}`}
    >
      <div className="text-[5rem] ">{data.icon}</div>
      <h1>{data.title}</h1>
      <p className="text-sm font-thin ">{data.desc}</p>
    </div>
  )
}

export default CardService
