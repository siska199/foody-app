import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { showCarts } from '../redux/features/cartsSlice'
import { useSession } from 'next-auth/react'
import { showHideModalAuth } from '../redux/features/authSlice'
import DropdownMenu from '../components/DropdownMenu'
const Navbar = () => {
  const [shadow, setShadow] = useState('')
  const [showMenu, setShowMenu] = useState(false)
  const { data: session } = useSession()
  const menuName = [
    { name: 'Home', url: '#home' },
    { name: 'Menu', url: '#menu' },
    { name: 'About Us', url: '#about-us' },
    { name: 'Service', url: '#service' },
  ]
  const theme = useSelector((state) => state.theme.value)
  const cartsTotal = useSelector((state) => state.carts.value.totalQty)
  const disptach = useDispatch()

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
          {session ? (
            <div className="flex items-center gap-[1.5rem]">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="relative cursor-pointer"
                onClick={() => disptach(showCarts(true))}
              >
                <MdShoppingBasket className=" text-[1.5rem]" />
                <div className="absolute -top-2 -right-2 flex h-5 w-5 rounded-full bg-red-custome  text-white">
                  <p className="m-auto text-xs text-white">{cartsTotal}</p>
                </div>
              </motion.div>
              <div className="relative">
                <motion.img
                  whileTap={{ scale: 0.75 }}
                  className="w-8 cursor-pointer "
                  src="/assets/avatar.png"
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
