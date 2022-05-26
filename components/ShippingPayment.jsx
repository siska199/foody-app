import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const ShippingPayment = ({ setStepShipping }) => {
  const theme = useSelector((state) => state.theme.value)
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStepShipping('review')
  }
  return (
    <form className="flex flex-col items-center justify-center">
      <h1 className="mb-5 text-[1.5rem]">Payment Information</h1>

      <div className="flex w-full flex-col gap-3">
        <div className="flex w-full justify-between gap-3">
          <div className="flex w-2/3 flex-col">
            <label htmlFor="">Name on card</label>
            <input
              className={`input-address ${
                theme.theme == 'dark' && 'text-gray-600'
              }`}
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Postal Code</label>
            <input
              className={`input-address ${
                theme.theme == 'dark' && 'text-gray-600'
              }`}
              type="text"
            />
          </div>
        </div>

        <div className="flex w-full flex-col">
          <label htmlFor="">card Number</label>
          <input
            className={`input-address ${
              theme.theme == 'dark' && 'text-gray-600'
            }`}
            type="text"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <label htmlFor="">Expration</label>
            <div>
              <input
                className={`input-address ${
                  theme.theme == 'dark' && 'text-gray-600'
                }`}
                type="text"
              />
              {' / '}

              <input
                className={`input-address ${
                  theme.theme == 'dark' && 'text-gray-600'
                }`}
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">CVV</label>
            <input
              className={`input-address ${
                theme.theme == 'dark' && 'text-gray-600'
              }`}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between w-full">
        <motion.button
          whileTap={{ scale: 0.75 }}
          className="rounded-lg border-2 bg-orange-500 px-3 font-medium"
          onClick={(e) => setStepShipping('address')}
        >
          Back
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.75 }}
          className="rounded-lg border-2 bg-orange-500 px-3 font-medium"
          onClick={(e) => handleOnSubmit(e)}
        >
          Next
        </motion.button>
      </div>
    </form>
  )
}
export default ShippingPayment
