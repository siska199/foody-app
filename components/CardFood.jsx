import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'

const CardFood = ({ data }) => {
  return (
    <div className="flex h-auto gap-2 border-2 bg-black p-3 text-white">
      <img src={data.imageUrl} className="-mt-8 w-[8rem] object-cover " alt="" />
      <div className="flex flex-col ">
        <div></div>
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        <h5>
          <span>$</span>
          {data.price}
        </h5>
      </div>
    </div>
  )
}
export default CardFood
