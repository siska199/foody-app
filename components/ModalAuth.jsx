import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { signIn } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { FcGoogle } from 'react-icons/fc'
import { showHideModalAuth } from '../redux/features/authSlice'
import FormAuth from './FormAuth'
const ModalAuth = ({ providers }) => {
  const theme = useSelector((state) => state.theme.value)
  const [typeAuth, setTypeAuth] = useState('signIn')
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
        <FormAuth type={typeAuth} />
        <div className="flex flex-col">
          {Object.values(providers).map((provider) => (
            <motion.button
              className="flex  items-center justify-center rounded-md bg-white p-2 font-[500]"
              key={provider.name}
              onClick={() => signIn(provider.id)}
              whileTap={{ scale: 0.75 }}
            >
              <FcGoogle className="mr-2 " />
              {typeAuth == 'signIn' ? 'Sign In ' : 'Sign Up '}
              with {provider.name}
            </motion.button>
          ))}

          <p
            className={`mt-2 text-center ${
              theme.theme == 'light' ? 'text-gray-600' : 'text-gray font thin'
            } `}
          >
            {typeAuth == 'signIn'
              ? 'Dont have an account '
              : 'Have an account '}{' '}
            <br />
            <span
              onClick={() =>
                setTypeAuth(typeAuth == 'signIn' ? 'signUp' : 'signIn')
              }
              className="text-[100] cursor-pointer text-white"
            >
              Here
            </span>{' '}
          </p>
        </div>
      </div>
    </section>
  )
}
export default ModalAuth
