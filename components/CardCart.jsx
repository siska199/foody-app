import React from 'react'
import { motion } from 'framer-motion'

const CardCart = ({ data }) => {
  return (
    <div className="flex w-full justify-between rounded-lg bg-[#333437] py-4 px-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <img src={data.imageUrl} className="w-16" />
        <div className="font-medium">
          <h1>{data.title}</h1>
          <p>${data.price}</p>
        </div>
      </div>
      <div className="flex items-center  gap-4">
        <motion.span whileTap={{ scale: 0.75 }} className="cursor-pointer text-[1.5rem]">
          +
        </motion.span>
        <span className="bg-[#292A2D] p-2">4</span>
        <motion.span whileTap={{ scale: 0.75 }} className="cursor-pointer text-[1.5rem]">
          -
        </motion.span>
      </div>
    </div>
  )
}

export default CardCart
