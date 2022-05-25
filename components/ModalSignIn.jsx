import React from 'react'
import { motion } from 'framer-motion'
import { signIn } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { FcGoogle } from 'react-icons/fc'
import { showHideModalAuth } from '../redux/features/authSlice'
const ModalSignIn = ({ providers }) => {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  return (
    <section
      onClick={() => dispatch(showHideModalAuth(false))}
      className="fixed top-0 left-0 z-50  flex h-full w-full bg-black/60   "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`m-auto px-10  ${theme.primaryCard} flex h-[30rem] w-[20rem] flex-col justify-center gap-[2rem] rounded-[2rem]`}
      >
        <form action="" className="flex flex-col gap-2  ">
          <h1
            className={`text-center font-bold text-white ${
              theme.theme == 'light' && 'font-medium '
            } text-[2rem]`}
          >
            Sign In
          </h1>
          <div className="flex w-full flex-col">
            <input
              className="rounded-lg p-2 outline-none"
              placeholder="Email"
            />
          </div>
          <div className="flex w-full flex-col">
            <input
              className="rounded-lg p-2 outline-none"
              placeholder="Password"
              type="text"
            />
          </div>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className={`mt-3 rounded-md text-white ${
              theme.theme == 'light'
                ? 'bg-gray-700 e'
                : 'bg-orange-600 !font-bold'
            } p-2 font-medium`}
          >
            Log In
          </motion.button>
        </form>
        {Object.values(providers).map((provider) => (
          <motion.button
            className="flex  items-center justify-center rounded-md bg-white p-2 font-[500]"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            whileTap={{ scale: 0.75 }}
          >
            <FcGoogle className="mr-2 " /> Sign in with {provider.name}
          </motion.button>
        ))}
      </div>
    </section>
  )
}
export default ModalSignIn
