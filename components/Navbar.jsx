import Link from 'next/link'
import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
const Navbar = () => {
  const menuName = [
    { name: 'Home', url: '' },
    { name: 'Menu', url: '' },
    { name: 'About Us', url: '' },
    { name: 'Service', url: '' },
  ]
  return (
    <header className="border-2 bg-light-theme">
      <nav className="container flex border-2 p-2  ">
        <div className="flex items-center gap-2">
          <img className="w-8 object-cover" src="/assets/logo.png" />
          <h1 className="text-[1.2rem] font-bold">Foody</h1>
        </div>

        <div className="ml-auto flex items-center gap-6 text-text-light">
          {/* Menu */}
          <ul className="m-auto flex gap-14 text-[1.1rem]  ">
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
          <div className="relative">
            <MdShoppingBasket className="cursor-pointer text-[1.5rem]" />
            <div className="absolute -top-2 -right-2 flex h-5 w-5 rounded-full bg-red-custome  text-white">
              <p className="m-auto text-xs">2</p>
            </div>
          </div>
          {/* Avatar */}
          <div>
            <img className="w-8 cursor-pointer" src="/assets/avatar.png" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
