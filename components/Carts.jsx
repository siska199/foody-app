import React from 'react'
import CardCart from './CardCart'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi'
import { IoNuclearOutline } from 'react-icons/io5'
import { showCarts, deleteAllCharts } from '../redux/features/cartsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Carts = () => {
  const carts = useSelector((state) => state.carts.value)
  const dispatch = useDispatch()

  return (
    <motion.div className="fixed top-0 right-0 z-50 h-full w-full bg-white shadow-lg md:w-[25rem] ">
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
          onClick={() => dispatch(deleteAllCharts())}
          className="flex items-center rounded-lg border-2 bg-slate-200 px-2 text-[1rem] font-[300]"
        >
          Clear <IoNuclearOutline />
        </motion.button>
      </header>
      <main className="flex h-full w-full  gap-[2rem] rounded-[3rem] bg-gray-200 p-8 text-white">
        {carts.dataCarts.length > 0 ? (
          <div className="flex w-full flex-col justify-between">
            <div className="flex h-[45%] flex-col gap-3 overflow-y-scroll scrollbar-thin">
              {carts.dataCarts.map((data, i) => (
                <CardCart data={data} key={i} />
              ))}
            </div>

            <div className="rounded-[3rem] bg-white p-[2rem] text-black">
              <div className=" mb-[1rem] flex justify-between ">
                <p>Sub Total</p>
                <p>
                  $ {` `} {carts.totalPrice}
                </p>
              </div>
              <div className=" mb-[1rem] flex justify-between border-b-2 pb-[2rem] ">
                <p>Delivery Costs</p>
                <p>
                  {' '}
                  ${` `} {carts.deliveryCost}
                </p>
              </div>
              <div className=" mb-[1rem] flex justify-between text-[1.2rem] ">
                <p>Total</p>
                <p>
                  ${` `}
                  {carts.totalPrice + carts.deliveryCost}
                </p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="my-4 w-full rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 p-2 px-5"
                >
                  Check Out
                </motion.button>
              </div>
            </div>
          </div>
        ) : (
          <div className="m-auto flex h-full flex-col items-center justify-center text-black">
            <img src="/assets/empty-bag.png" className="mb-2 w-[8rem]" />
            <h1 className='font-medium'>Empty Carts</h1>
          </div>
        )}
      </main>
    </motion.div>
  )
}
export default Carts
