import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
const CardFood = ({ data }) => {
  return (
    <div className="flex w-[15rem] flex-col items-center justify-between gap-2 bg-white p-3 backdrop-blur-sm hover:bg-white hover:shadow-md">
      <div className="flex w-full justify-end relative ">
        <motion.img
          src={data.imageUrl}
          whileHover={{ scale: 1.2 }}
          className="-mt-[4rem] w-[8rem] object-contain absolute left-0"
          alt=""
        />
        <motion.div
          whileTap={{ scale: 0.75 }}
          className=" flex h-8 w-8 cursor-pointer items-center  justify-center rounded-full bg-red-600 shadow-lg hover:shadow-md"
        >
          <MdShoppingBasket className="text-white" />
        </motion.div>
      </div>

      <div className="flex w-full flex-col items-end">
        <div className="flex flex-col items-end gap-1">
          <h1 className="text-right text-lg font-semibold text-gray-600 ">
            {data.title}
          </h1>
          <p className="text-sm text-gray-500">{data.desc}</p>
          <h5 className="text-lg font-semibold text-text-light">
            <span className="text-sm text-red-500">$</span>
            {data.price}
          </h5>
        </div>
      </div>
    </div>
  )
}
export default CardFood
