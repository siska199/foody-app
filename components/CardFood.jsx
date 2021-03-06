import React, { useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { addToCarts } from '../redux/features/cartsSlice'
import { showHideModalAuth } from '../redux/features/authSlice'
import { useSession } from 'next-auth/react'
import LoadingIcon from './LoadingIcon'
const CardFood = ({ data }) => {
  const theme = useSelector((state) => state.theme.value)
  const [load, setLoad] = useState(false)
  const { data: session } = useSession()

  const disptach = useDispatch()

  const handleAddToCart = () => {
    if (session) {
      disptach(addToCarts({ data, idUser: session?.user.email }))
    } else {
      disptach(showHideModalAuth(true))
    }
  }
  const handleOnLoadImage = (e) => {
    if (e.target.complete) {
      setLoad(true)
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`flex w-[14rem] flex-col items-center justify-between gap-2 md:w-[16rem] ${theme.cardColor} p-3 backdrop-blur-sm hover:${theme.cardColor} mb-5 hover:shadow-lg md:mb-0`}
    >
      <div className="relative flex w-full justify-end ">
        <div
          className={`${
            load ? 'flex' : 'hidden'
          } absolute left-0 -mt-[2.8rem] flex justify-center w-[7rem] h-[7rem]  rounded-full md:-mt-[4rem] md:w-[8rem] md:h-[8rem] `}
        >
          <motion.img
            src={data.photo}
            whileHover={{ scale: 1.2 }}
            className="object-contain"
            alt=""
            onLoad={(e) => handleOnLoadImage(e)}
          />
        </div>
        <div className={`${load ? 'hidden' : 'flex'}  absolute left-0 `}>
          <LoadingIcon size="w-[2rem]" />
        </div>

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
            {data.calories} {` `} calories
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
