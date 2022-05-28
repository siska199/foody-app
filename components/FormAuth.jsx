import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const FormAuth = ({ type }) => {
  const theme = useSelector((state) => state.theme.value)

  return (
    <form action="" className="flex flex-col gap-2  ">
      <h1
        className={`text-center font-bold text-white ${
          theme.theme == 'light' && 'font-medium '
        } text-[2rem]`}
      >
        {type == 'signIn' ? 'Sign In' : 'Sign Up'}
      </h1>

      <div className="flex w-full flex-col">
        <input
          className="rounded-lg px-4 py-2  outline-none"
          placeholder="Email"
        />
      </div>

      <div className="flex w-full flex-col">
        <input
          className="rounded-lg px-4 py-2 outline-none"
          placeholder="Password"
          type="text"
        />
      </div>
      <motion.button
        whileTap={{ scale: 0.75 }}
        className={`mt-3 rounded-md text-white ${
          theme.theme == 'light' ? 'e bg-gray-700' : 'bg-orange-600 !font-bold'
        } p-2 font-medium`}
      >
        {type == 'signIn' ? 'Sign In' : 'Sign Up'}
      </motion.button>
    </form>
  )
}
export default FormAuth
