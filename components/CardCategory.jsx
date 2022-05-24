import React from 'react'
import { motion } from 'framer-motion'
const CardCategory = ({ data }) => {
  return (
    <motion.div whileTap={{scale:0.75}} className="dropdown-shadow-xl group flex w-[5rem] h-[5rem] md:h-28 md:w-[6rem] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-white transition-all duration-150 ease-in-out hover:bg-red-custome shadow-lg">
      <div>
        <div className="rounded-full flex h-10 w-10 items-center justify-center bg-red-custome group-hover:bg-white">
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
