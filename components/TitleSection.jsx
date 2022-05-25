import React from 'react'
import { useSelector } from 'react-redux'

const TitleSection = ({ title }) => {
  const theme = useSelector((state) => state.theme.value)
  return (
    <div>
      <h1
        className={`from-orange-400 to-orange-600 text-[2rem] font-bold md:text-[3rem] ${theme.textMainColor}  before:content relative before:absolute
    before:-bottom-2 before:left-0 before:h-1 before:w-[100%] before:bg-gradient-to-tr`}
      >
        {title}
      </h1>
    </div>
  )
}

export default TitleSection
