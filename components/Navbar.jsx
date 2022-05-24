import Link from 'next/link'
import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
const Navbar = () => {
  const menuName = [
    { name: 'Home', url: '#home' },
    { name: 'Menu', url: '#menu' },
    { name: 'About Us', url: '#about-us' },
    { name: 'Service', url: '#service' },
  ]
  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-light-theme ">
      <nav className="container flex px-8 py-2  ">
        <motion.div
          whileTap={{ scale: 1.25 }}
          className="flex cursor-pointer items-center gap-2"
        >
          <img className="w-8 object-cover" src="/assets/logo.png" />
          <h1 className="text-[1.2rem] font-bold">Foody</h1>
        </motion.div>

        <div className="ml-auto flex items-center gap-6 text-text-light">
          {/* Menu */}
          <ul className="m-auto flex gap-[6rem] text-[1.1rem]  ">
            {menuName.map((menu, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all duration-100 ease-in-out hover:font-medium hover:text-[#2e2e2e]"
              >
                <Link href={`${menu.url}`}>
                  <a>{menu.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          {/* Bag Shoping Char */}
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="relative cursor-pointer"
          >
            <MdShoppingBasket className=" text-[1.5rem]" />
            <div className="absolute -top-2 -right-2 flex h-5 w-5 rounded-full bg-red-custome  text-white">
              <p className="m-auto text-xs">2</p>
            </div>
          </motion.div>
          {/* Avatar */}
          <div>
            <motion.img
              whileTap={{ scale: 0.75 }}
              className="w-8 cursor-pointer"
              src="/assets/avatar.png"
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
