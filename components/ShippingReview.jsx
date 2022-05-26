import React from 'react'
import { useSelector } from 'react-redux'
import CartsInfo from "./CartsInfo"
const ShippingReview = () => {
  const carts = useSelector((state) => state.carts.value)

  console.log('carts data: ', carts)
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[1.3rem] font-medium">Address information</h1>
          <p>JL Gunung Kawi RT/01 RW/05, Kec.Besuki Kab.Situbondo 68356</p>
        </div>
        <div>
          <h1 className="text-[1.3rem] font-medium">Payment Information</h1>
          <p>Using Paypal dengan nomor transaksi ...</p>
        </div>
      </div>

      <CartsInfo carts={carts} shipping={true} />
    </div>
  )
}
export default ShippingReview
