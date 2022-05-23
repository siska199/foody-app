import React from 'react'

export const LabelSectionHome = ({ text, lengthLine }) => {
  return (
    <p className={`relative text-2xl font-semibold capitalize text-text-light
    before:absolute before:rounded-lg before:content before-${lengthLine} before:h-1
    before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100
    `}>
      {text}
    </p>
  )
}
