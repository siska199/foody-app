import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import CartsInfo from './CartsInfo'
const ShippingReview = ({setStepShipping}) => {
  const carts = useSelector((state) => state.carts.value)

  console.log('carts data: ', carts)
  return (
    <div className='w-[100%] md:w-[80%] m-auto'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[1.2rem] font-medium text-gray-600">
              Address information
            </h1>
            <p className="text-[0.7rem] text-gray-500">
              JL Gunung Kawi RT/01 RW/05, Kec.Besuki Kab.Situbondo 68356
            </p>
          </div>
          <div>
            <h1 className="text-[1.2rem] font-medium text-gray-600">
              Payment Information
            </h1>
            <p className="text-[0.7rem] text-gray-500">Using Paypal dengan nomor transaksi ...</p>
          </div>
        </div>
        <CartsInfo carts={carts} shipping={true} />
      </div>
      <div className="mt-4 flex w-full justify-between">
        <motion.button
          whileTap={{ scale: 0.75 }}
          className="w-[5rem] rounded-lg border-2 bg-orange-500 py-2 text-[1rem] font-medium text-gray-300"
          onClick={(e) => setStepShipping('payment')}
        >
          Back
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.75 }}
          className="w-[5rem] rounded-lg border-2 bg-orange-500 py-2 text-[1rem] font-medium text-gray-300"
          onClick={(e) => setStepShipping('payment')}
        >
          Pay
        </motion.button>
      </div>
    </div>
  )
}
export default ShippingReview
