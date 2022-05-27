import React from 'react'
import { useSelector } from 'react-redux'

const InputShipping = ({ label, width }) => {
  const theme = useSelector((state) => state.theme.value)

  return (
    <div className={`flex flex-col ${width}`}>
      <label htmlFor="">{label}</label>
      <input
        className={`input-shipping border py-2  ${
          theme.theme == 'dark' && 'text-gray-600'
        }`}
        type="text"
      />
    </div>
  )
}

export default InputShipping
