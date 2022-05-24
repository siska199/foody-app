import React from 'react'

const TitleSection = ({ title }) => {
  return (
    <div>
      <h1
        className="from-orange-400 to-orange-600 text-[2rem] md:text-[3rem] font-bold text-text-light before:absolute before:content relative
    before:-bottom-2 before:left-0 before:h-1 before:w-[100%] before:bg-gradient-to-tr"
      >
        {title}
      </h1>
    </div>
  )
}

export default TitleSection
