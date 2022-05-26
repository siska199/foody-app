import React from 'react'
import { motion } from 'framer-motion'
const CardCategory = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      whileTap={{ scale: 0.75 }}
      className="dropdown-shadow-xl group flex h-[5rem] w-[5rem] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-lg transition-all duration-150 ease-in-out hover:bg-red-custome md:h-28 md:w-[6rem]"
    >
      <div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-custome group-hover:bg-white">
          {data.icon}
        </div>
      </div>
      <p className="text-sm text-text-light group-hover:text-white">
        {data.title}
      </p>
    </motion.div>
  )
}

export default CardCategory
