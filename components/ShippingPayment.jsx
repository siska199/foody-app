import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import InputShipping from './InputShipping'

const ShippingPayment = ({ setStepShipping }) => {
  const theme = useSelector((state) => state.theme.value)
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStepShipping('review')
  }
  return (
    <form className="flex flex-col items-center justify-center">
      <h1 className="mb-5 text-[1.5rem] font-medium text-gray-600">
        Payment Information
      </h1>
      <div className="flex w-full flex-col gap-3  ">
        <div className="flex justify-between gap-2">
          <InputShipping label="Card Name" width="md:w-2/3" />
          <InputShipping label="Postal Code" width="md:w-1/3" />
        </div>
        <InputShipping label="Card Number" width="" />
        <div className="flex  w-full gap-2 justify-between flex-wrap">
          <div className="flex flex-col">
            <label htmlFor="">Expration</label>
            <div className='flex gap-2'>
              <input
                className={`input-shipping border py-2  ${
                  theme.theme == 'dark' && 'text-gray-600'
                }`}
                type="text"
              /> 
              <p>/</p>
              <input
                className={`input-shipping border py-2  ${
                  theme.theme == 'dark' && 'text-gray-600'
                }`}
                type="text"
              />
            </div>
          </div>
          <InputShipping label="CVV" width="" />

        </div>

        <div className="mt-4 flex justify-between">
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="w-[5rem] rounded-lg border-2 bg-orange-500 py-2 text-[1rem] font-medium text-gray-300"
            onClick={(e) => setStepShipping('address')}
          >
            back
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="w-[5rem] rounded-lg border-2 bg-orange-500 py-2 text-[1rem] font-medium text-gray-300"
            onClick={(e) => handleOnSubmit(e)}
          >
            Next
          </motion.button>
        </div>
      </div>
    </form>
  )
}
export default ShippingPayment
