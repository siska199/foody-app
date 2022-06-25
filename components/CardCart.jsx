import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch} from 'react-redux'
import { addToCarts } from '../redux/features/cartsSlice'
import { removeFromCarts } from '../redux/features/cartsSlice'
import { useSession } from 'next-auth/react'
const CardCart = ({ data, shipping }) => {
  const { data: session } = useSession()
  const dispatch = useDispatch()
  const handleAddToCarts = () => {
    dispatch(addToCarts({ data, idUser: session?.user.email }))
  }
  const handleRemoveCarts = () => {
    dispatch(removeFromCarts({ data, idUser: session?.user.email }))
  }
  useEffect(() => {})
  return (
    <div className="flex w-full justify-between rounded-lg bg-white py-2 px-3 text-black backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <img src={data.photo} className="w-16" />
        <div className="font-[300]">
          <h1>{data.title}</h1>
          <p className="text-sm ">$ {data.price}</p>
        </div>
      </div>
      {shipping ? (
        <div className="flex flex-col justify-center text-sm font-[300]">
          <p>X {data.qty}</p>
        </div>
      ) : (
        <div className="flex items-center gap-4  font-[300]">
          <motion.span
            whileTap={{ scale: 0.75 }}
            onClick={() => handleAddToCarts()}
            className="cursor-pointer text-[1.5rem]"
          >
            +
          </motion.span>
          <span className="p-2">{data.qty}</span>
          <motion.span
            whileTap={{ scale: 0.75 }}
            className="cursor-pointer text-[1.5rem]"
            onClick={() => handleRemoveCarts()}
          >
            -
          </motion.span>
        </div>
      )}
    </div>
  )
}

export default CardCart
