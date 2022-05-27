import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import InputShipping from './InputShipping'
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

  return (
    <form className="flex flex-col items-center justify-center">
      <h1 className="mb-5 text-[1.5rem] font-medium text-gray-600">Address Shipping</h1>
      <div className="flex w-full flex-col gap-3  ">
        <InputShipping label="Name"/>
        <div className="grid grid-cols-2 gap-2">
          <InputShipping  label="Address"/>
          <InputShipping  label="Apt/No. House"/>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          <InputShipping  label="Zip"/>
          <InputShipping  label="City"/>
          <InputShipping  label="Country"/>
        </div>

        <div className="mt-4 flex justify-end">
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="rounded-lg border-2 bg-orange-500 w-[5rem] py-2 text-[1rem] font-medium text-gray-300"
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
