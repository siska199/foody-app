import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ChangeTheme from '../components/ChangeTheme'
import ShippingAddress from '../components/ShippingAddress'
import ShippingPayment from '../components/ShippingPayment'
import ShippingReview from '../components/ShippingReview'
import { RiEBike2Line } from 'react-icons/ri'
import { MdPayment } from 'react-icons/md'
import { MdOutlineVerified } from 'react-icons/md'
const payment = () => {
  const theme = useSelector((state) => state.theme.value)
  const [stepShipping, setStepShipping] = useState('address')
  const renderStepShipping = (step) => {
    switch (step) {
      case 'address':
        return <ShippingAddress setStepShipping={setStepShipping} />
      case 'payment':
        return <ShippingPayment setStepShipping={setStepShipping} />
      case 'review':
        return <ShippingReview setStepShipping={setStepShipping} />
    }
  }
  return (
    <div>
      <Head>
        <title>Foodyy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${theme.bg} flex min-h-[100vh] flex-col items-center justify-center px-6 py-[7rem]`}
      >
        <Navbar />

        <div className={`flex ${theme.theme=="light"?"bg-white":"bg-black/80 text-white"} flex-col rounded-lg border-[0.2rem] p-5 gap-[3rem] w-[50rem]`}>
          <ul className="flex gap-[12.5rem] justify-center items-center">
            <li className="before:content relative flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-full border-2 p-2 before:absolute before:-right-[12.5rem] before:h-1 before:w-[12.5rem] before:bg-gray-300">
              <RiEBike2Line className="text-[2rem]" />
              Address
            </li>
            <li className="before:content relative flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-full border-2 p-2 before:absolute before:-right-[12.5rem] before:h-1 before:w-[12.5rem] before:bg-gray-300">
              <MdPayment className="text-[2rem]" />
              Payment
            </li>
            <li className="before:content flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-full border-2 p-2 ">
              <MdOutlineVerified className="text-[2rem]" />
              Review
            </li>
          </ul>

          <div >{renderStepShipping(stepShipping)}</div>
        </div>

        <ChangeTheme />
      </main>
    </div>
  )
}

export default payment
