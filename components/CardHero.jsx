import React from 'react'
import { useSelector } from 'react-redux'

const CardHero = ({ data }) => {
  const theme = useSelector((state) => state.theme.value)
  const title = theme.theme == 'light' ? 'text-gray-500' : 'text-gray-700'
  const desc = theme.theme == 'light' ? 'text-gray-400' : 'text-gray-600'

  return (
    <div className="flex w-[8.5rem] flex-col items-center rounded-3xl bg-white/50 p-5  backdrop-blur-sm md:mb-20 lg:w-[12rem]">
      <img className="w-[7rem] md:-mt-20 md:w-[10rem] " src={data.imageSrc} />
      <h1 className={`text-center text-lg font-semibold ${title} md:mt-4`}>
        {data.name}
      </h1>
      <p
        className={`text-center text-[0.7rem] ${desc} md:my-3 md:text-sm md:font-semibold`}
      >
        {data.desc}
      </p>
      <p className="text-sm font-semibold text-gray-700">
        <span className="text-sm text-red-600">$</span>
        {data.price}
      </p>
    </div>
  )
}
export default CardHero
