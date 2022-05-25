import React from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
const DropdownMenu = () => {
  return (
    <div class="absolute right-0 z-10 mt-2 w-44 divide-y divide-gray-100 rounded bg-white shadow ">
      <ul
        class="py-1 text-sm text-gray-700 "
        aria-labelledby="dropdownInformationButton"
      >
        <Link href="/add-item">
          <a class="block px-4 py-2 hover:bg-gray-100 ">Add Menu</a>
        </Link>
      </ul>
      <div onClick={() => signOut()} class="py-1">
        <a
          href="#"
          class="e block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sign out
        </a>
      </div>
    </div>
  )
}
export default DropdownMenu
