import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi'
import { IoNuclearOutline } from 'react-icons/io5'
import { showCarts, deleteAllCarts } from '../redux/features/cartsSlice'
import { useDispatch, useSelector } from 'react-redux'
import CartsInfo from './CartsInfo'
import { useSession } from 'next-auth/react'

const Carts = () => {
  const { data: session } = useSession()
  const cartsExist = useSelector((state) => state.carts.value.cartExists)
  const dispatch = useDispatch()
  const handleClear = () => {
    if (session) {
      dispatch(deleteAllCarts(session.user.email))
    }
  }
  return (
    <div className="fixed top-0 right-0 z-50 flex h-full w-full bg-black/20">
      <div className=" ml-auto h-full w-full bg-white shadow-lg sm:w-[25rem]">
        <header className="flex items-center justify-between py-3 px-[2rem] text-[1.3rem]">
          <motion.div whileTap={{ scale: 0.75 }}>
            <HiArrowLeft
              onClick={() => dispatch(showCarts(false))}
              className="cursor-pointer"
            />
          </motion.div>
          <h1>Cart</h1>
          <motion.button
            whileTap={{ scale: 0.75 }}
            onClick={() => handleClear()}
            className="flex items-center rounded-lg border-2 bg-slate-200 px-2 text-[1rem] font-[300]"
          >
            Clear <IoNuclearOutline />
          </motion.button>
        </header>
        <main className="flex h-full w-full  gap-[2rem] rounded-[3rem] bg-gray-200 p-8 text-white">
          {cartsExist ? (
            <CartsInfo />
          ) : (
            <div className="m-auto flex h-full flex-col items-center justify-center text-black">
              <img src="/assets/empty-bag.png" className="mb-2 w-[8rem]" />
              <h1 className="font-medium">Empty Carts</h1>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
export default Carts
