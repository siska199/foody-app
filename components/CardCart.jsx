import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { addToCarts } from '../redux/features/cartsSlice'
import { removeFromCarts } from '../redux/features/cartsSlice'
const CardCart = ({ data }) => {
  const dispatch = useDispatch()
  const qty = useSelector(
    (state) =>
      state.carts.value.dataCarts.filter((cart) => cart.id == data.id)[0].qty
  )
  return (
    <div className="flex w-full justify-between rounded-lg bg-white text-black py-2 px-3 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <img src={data.imageUrl} className="w-16" />
        <div className="font-[300]">
          <h1>{data.title}</h1>
          <p className="text-sm ">$ {data.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4  font-[300]">
        <motion.span
          whileTap={{ scale: 0.75 }}
          onClick={() => dispatch(addToCarts(data))}
          className="cursor-pointer text-[1.5rem]"
        >
          +
        </motion.span>
        <span className="p-2">{qty}</span>
        <motion.span
          whileTap={{ scale: 0.75 }}
          className="cursor-pointer text-[1.5rem]"
          onClick={() => dispatch(removeFromCarts(data))}
        >
          -
        </motion.span>
      </div>
    </div>
  )
}

export default CardCart
