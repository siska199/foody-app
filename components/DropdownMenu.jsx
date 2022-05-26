import React from 'react'
import { signOut } from 'next-auth/react'
import {IoIosAddCircleOutline} from "react-icons/io"
import {IoIosLogOut } from "react-icons/io"
import Link from 'next/link'
const DropdownMenu = () => {
  return (
    <div className="absolute right-0 z-10 mt-2 w-44 divide-y divide-gray-100 rounded bg-white shadow ">
      <ul
        className="py-1 text-sm text-gray-700 "
        aria-labelledby="dropdownInformationButton"
      >
        <Link href="/add-item" className=''>
          <a className="px-4 py-2 hover:bg-gray-100 flex items-center gap-1"><IoIosAddCircleOutline className='text-[1rem]'/> Add Menu</a>
        </Link>
      </ul>
      <div onClick={() => signOut()} className="py-1">
        <a
          className="e flex items-center cursor-pointer px-4 py-2 gap-1 text-sm text-gray-700 hover:bg-gray-100"
        >
          <IoIosLogOut className='text-[1rem]'/> Sign out
        </a>
      </div>
    </div>
  )
}
export default DropdownMenu
