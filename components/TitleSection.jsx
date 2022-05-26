import React from 'react'
import { useSelector } from 'react-redux'

const TitleSection = ({ title }) => {
  const theme = useSelector((state) => state.theme.value)
  return (
    <div>
      <h1
        className={`${theme.theme=="light"?"from-orange-400 to-orange-600 ":"from-black/40 to-black/60 "} text-[2rem] font-bold md:text-[3rem] ${theme.textMainColor}  before:content relative before:absolute
    before:-bottom-2 before:left-0 before:h-1 before:w-[100%] before:bg-gradient-to-tr`}
      >
        {title}
      </h1>
    </div>
  )
}

export default TitleSection
