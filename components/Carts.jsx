import React from 'react'
import CardCart from './CardCart'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi'
import { MdDeleteForever } from 'react-icons/md'
const Carts = () => {
  const dataCart = [...Array(10)].map((_, i) => ({
    imageUrl: '/assets/f1.png',
    title: 'Blue Berries',
    price: '12',
  }))

  return (
    <div className="fixed top-0 right-0 z-50 h-full w-[27rem] bg-white shadow-lg">
      <header className="flex items-center justify-between py-3 px-3 text-[1.3rem]">
        <HiArrowLeft className="cursor-pointer" />
        <h1>Cart</h1>
        <MdDeleteForever className="cursor-pointer text-[1.5rem] text-red-600" />
      </header>
      <main className="flex h-full flex-col justify-between rounded-[3rem] bg-[#292A2D] p-8 text-white">
        <div className="flex h-[45%] flex-col gap-3 overflow-y-scroll scrollbar-thin">
          {dataCart.map((data, i) => (
            <CardCart data={data} key={i} />
          ))}
        </div>
        <div className="rounded-[3rem] bg-[#333437] p-[2rem]">
          <div className="text-text-gary-400 mb-[2rem] flex justify-between font-thin">
            <p>Sub Total</p>
            <p>$27</p>
          </div>
          <div className="text-text-gary-400 mb-[2rem] flex justify-between border-b-2 pb-[2rem] font-thin">
            <p>Delivery</p>
            <p>$27</p>
          </div>
          <div className="text-text-gary-400 mb-[2rem] flex justify-between text-[1.2rem] font-medium">
            <p>Total</p>
            <p>$27</p>
          </div>
          <div className="flex justify-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="my-5 w-full rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 p-2 px-5"
            >
              Check Out
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Carts
