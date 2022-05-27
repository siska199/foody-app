import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import CardCart from './CardCart'
import { showCarts } from '../redux/features/cartsSlice'
const CartsInfo = ({ carts, shipping }) => {
  //**Constanta**\\
  const router = useRouter()
  const dispatch = useDispatch()

  //**Handler**\\
  const handlerMovePage = () => {
    shipping ? router.push('/') : router.push('/payment')
    dispatch(showCarts(false))
  }
  return (
    <div
      className={`flex w-full flex-col ${
        shipping && 'h-[23rem]'
      } justify-between border-2 ${shipping && 'bg-white'}`}
    >
      <div className="flex h-[45%] flex-col gap-3 overflow-y-scroll scrollbar-thin">
        {carts.dataCarts.map((data, i) => (
          <CardCart shipping={shipping} data={data} key={i} />
        ))}
      </div>

      <div className="rounded-[3rem] bg-white p-[2rem] text-black">
        <div className=" mb-[1rem] flex justify-between ">
          <p>Sub Total</p>
          <p>
            $ {` `} {carts.totalPrice}
          </p>
        </div>
        <div className=" mb-[1rem] flex justify-between border-b-2 pb-[2rem] ">
          <p>Delivery Costs</p>
          <p>
            {' '}
            ${` `} {carts.deliveryCost}
          </p>
        </div>
        <div className=" mb-[1rem] flex justify-between text-[1.2rem] ">
          <p>Total</p>
          <p>
            ${` `}
            {carts.totalPrice + carts.deliveryCost}
          </p>
        </div>
        {!shipping && (
          <div className="flex justify-center">
            <motion.button
              onClick={() => handlerMovePage()}
              whileTap={{ scale: 0.9 }}
              className="my-4 w-full rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 p-2 px-5"
            >
              Check Out
            </motion.button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartsInfo
