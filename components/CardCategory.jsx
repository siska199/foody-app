import React from 'react'
import { IoFastFood } from 'react-icons/io5'
import { motion } from 'framer-motion'
const CardCategory = ({ data, setCategory, idCategory }) => {
  const handleChangeCategory = () => {
    setCategory({id : data.id})
  }
  return (
    <motion.div
      onClick={() => handleChangeCategory()}

      whileTap={{ scale: 0.75 }}
      className={`${data.id==idCategory&&"bg-red-custome"} dropdown-shadow-xl group flex h-[5rem] w-[5rem] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-lg transition-all duration-1000 ease-out hover:bg-red-custome md:h-28 md:w-[6rem]`}
    >
      <div>
        <div
          className={`${data.id==idCategory&&"!bg-white"} flex h-10 w-10 items-center justify-center rounded-full bg-red-custome group-hover:bg-white`}
        >
          <IoFastFood
            className={`text-[1.3rem] ${data.id==idCategory&&"!text-text-light"} text-white group-hover:text-text-light`}
          />
        </div>
      </div>
      <p className={`text-sm text-text-light ${data.id==idCategory&&"!text-white"} group-hover:text-white`}>
        {data.name}
      </p>
    </motion.div>
  )
}

export default CardCategory
