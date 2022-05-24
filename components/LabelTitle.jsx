import React from 'react'

const LabelTitle = ({ title}) => {
  return (
    <p
      className={`before:content relative text-2xl font-semibold capitalize
    text-text-light before:absolute before:rounded-lg before:w-[10%] from-orange-400
    to-orange-600 transition-all duration-100 ease-in-out before:-bottom-2 before:left-0 before:h-1 before:bg-gradient-to-tr
    `}
    >
      {title}
    </p>
  )
}
export default LabelTitle
