import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
const ShippingAddress = ({ setStepShipping }) => {
  const initialDataForm = {
    name: '',
    street: '',
    zip: '',
    city: '',
    state: '',
  }
  const [formAddress, setFormAddress] = useState(initialDataForm)
  const handleOnChange = (e) => {}
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStepShipping('payment')
    setFormAddress(initialDataForm)
  }
  const theme = useSelector((state) => state.theme.value)
  return (
    <form className="flex flex-col items-center justify-center">
      <h1 className="mb-5 text-[1.5rem]">Address Shipping</h1>
      <div className="flex w-full flex-col gap-3 ">
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input className={`input-address ${theme.theme=="dark"&&"text-gray-600"}`} type="text" />
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <div className="flex flex-col">
            <label htmlFor="">Street Address</label>
            <input className={`input-address ${theme.theme=="dark"&&"text-gray-600"}`} type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Apt./Ste.</label>
            <input className={`input-address ${theme.theme=="dark"&&"text-gray-600"}`}type="text" />
          </div>
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col">
            <label htmlFor="">ZIP</label>
            <input className={`input-address ${theme.theme=="dark"&&"text-gray-600"}`} type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">City</label>
            <input className={`input-address ${theme.theme=="dark"&&"text-gray-600"}`} type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">State</label>
            <input className={`input-address ${theme.theme=="dark"&&"text-gray-600"}`} type="text" />
          </div>
        </div>
        <div className="mt-4 flex justify-end">

          <motion.button
            whileTap={{ scale: 0.75 }}
            className="rounded-lg border-2 bg-orange-500 px-3 font-medium"
            onClick={(e) => handleOnSubmit(e)}
          >
            Next
          </motion.button>
        </div>
      </div>
    </form>
  )
}
export default ShippingAddress
