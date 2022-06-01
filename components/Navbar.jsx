import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { showCarts } from '../redux/features/cartsSlice'
import { useSession } from 'next-auth/react'
import { showHideModalAuth } from '../redux/features/authSlice'
import DropdownMenu from '../components/DropdownMenu'
import { menuNameNavbar } from '../helper/constanta'
import { collection, doc, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase.config'

const Navbar = ({ home }) => {
  const disptach = useDispatch()
  const { data: session } = useSession()
  const menuName = menuNameNavbar
  const theme = useSelector((state) => state.theme.value)
  const [totalQty, setTotalQty] = useState(0)
  const [shadow, setShadow] = useState('')
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.pageYOffset > 10) {
        setShadow('shadow-lg')
      } else {
        setShadow('')
      }
    }
    window.addEventListener('scroll', handleOnScroll)
    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [])

  useEffect(() => {
    let unsub
    if (session?.user.email) {
      unsub = onSnapshot(
        query(collection(db, 'users', session?.user.email, 'carts')),
        (docs) => {
          let totalQty = 0
          docs.forEach((doc) => {
            totalQty += doc.data().qty
          })
          setTotalQty(totalQty)
        }
      )
    }
    return () => unsub
  }, [db,session])

  return (
    <header
      className={`fixed ${shadow} left-0 top-0 z-40 w-full ${theme.bg}  `}
    >
      <nav className="container flex px-8 py-2  ">
        <Link href="/">
          <motion.div
            whileTap={{ scale: 1.25 }}
            className="flex cursor-pointer items-center gap-2"
          >
            <img className="w-8 object-cover" src="/assets/logo.png" />
            <h1 className={`text-[1.2rem] font-bold ${theme.textMainColor}  `}>
              Foody
            </h1>
          </motion.div>
        </Link>

        <div
          className={`ml-auto flex items-center gap-6 ${theme.textMainColor}  `}
        >
          {home && (
            <ul
              className={`m-auto hidden md:flex md:gap-[2rem] md:text-[1rem] lg:gap-[6rem] lg:text-[1.1rem]  ${
                theme.theme == 'dark' && 'font-[300]'
              }`}
            >
              {menuName.map((menu, i) => (
                <li
                  key={i}
                  className={`cursor-pointer transition-all duration-100 ease-out hover:font-medium ${
                    theme.theme == 'light'
                      ? 'hover:text-[#2e2e2e]'
                      : 'hover:text-white'
                  } `}
                >
                  <Link href={`${menu.url}`}>
                    <a>{menu.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {session ? (
            <div className="flex items-center gap-[1.5rem]">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="relative cursor-pointer"
                onClick={() => disptach(showCarts(true))}
              >
                <MdShoppingBasket className=" text-[1.5rem]" />
                <div className="absolute -top-2 -right-2 flex h-5 w-5 rounded-full bg-red-custome  text-white">
                  <p className="m-auto text-xs text-white">{totalQty}</p>
                </div>
              </motion.div>
              <div className="relative">
                <motion.img
                  whileTap={{ scale: 0.75 }}
                  className="w-8 cursor-pointer "
                  src="/assets/avatar.webp"
                  onClick={() => setShowMenu(!showMenu)}
                />
                {showMenu && <DropdownMenu />}
              </div>
            </div>
          ) : (
            <button
              id="dropdownInformationButton"
              onClick={() => disptach(showHideModalAuth(true))}
              className={`${theme.primaryCard} rounded-xl px-3 py-1 text-white`}
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
