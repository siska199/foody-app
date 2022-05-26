import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { addToCarts } from '../redux/features/cartsSlice'
const CardFood = ({ data }) => {
  const theme = useSelector((state) => state.theme.value)
  const disptach = useDispatch()

  const handleAddToCart = () => {
    disptach(addToCarts(data))
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className={`flex flex-col items-center justify-between gap-2 md:w-[15rem] ${theme.cardColor} p-3 backdrop-blur-sm hover:${theme.cardColor} mb-5 hover:shadow-lg md:mb-0`}
    >
      <div className="relative flex w-full justify-end ">
        <motion.img
          src={data.imageUrl}
          whileHover={{ scale: 1.2 }}
          className="absolute left-0 -mt-[2.5rem] w-[5rem] object-contain md:-mt-[4rem] md:w-[8rem]"
          alt=""
        />
        <motion.div
          onClick={() => handleAddToCart()}
          whileTap={{ scale: 0.75 }}
          className={`flex h-8 w-8 cursor-pointer items-center ${
            theme.theme == 'dark' && 'border-2'
          } justify-center rounded-full bg-red-600  shadow-lg hover:shadow-md `}
        >
          <MdShoppingBasket className="text-white" />
        </motion.div>
      </div>

      <div className="flex w-full flex-col items-end">
        <div className="flex flex-col items-end gap-1">
          <h1
            className={`text-right text-lg font-semibold ${
              theme.theme == 'light'
                ? 'text-gray-600'
                : '!font-medium text-white/90'
            } `}
          >
            {data.title}
          </h1>
          <p
            className={`text-sm ${
              theme.theme == 'light' ? 'text-gray-500' : '!font-thin text-white'
            } `}
          >
            {data.desc}
          </p>
          <h5
            className={`text-lg font-semibold ${
              theme.theme == 'light'
                ? 'text-text-light'
                : 'font-light text-white'
            } `}
          >
            <span
              className={`text-sm ${
                theme.theme == 'light' ? 'text-red-500' : 'text-white'
              }`}
            >
              $
            </span>
            {data.price}
          </h5>
        </div>
      </div>
    </motion.div>
  )
}
export default CardFood
