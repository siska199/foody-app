import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../Layout/Layout'
import ShippingAddress from '../components/ShippingAddress'
import ShippingPayment from '../components/ShippingPayment'
import ShippingReview from '../components/ShippingReview'
import { RiEBike2Line } from 'react-icons/ri'
import { MdPayment } from 'react-icons/md'
import { MdOutlineVerified } from 'react-icons/md'
import { data } from 'autoprefixer'

const payment = () => {
  //**Constanta**\\
  const theme = useSelector((state) => state.theme.value)
  const steps = [
    {
      title: 'Address',
      icon: <RiEBike2Line className="text-[2rem]" />,
    },
    {
      title: 'Payment',
      icon: <MdPayment className="text-[2rem]" />,
    },
    {
      title: 'Review',
      icon: <MdOutlineVerified className="text-[2rem]" />,
    },
  ]
  const [stepShipping, setStepShipping] = useState('address')
  //**Handler**\\

  //**Rendering**\\
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
    <Layout title={'Add product'}>
      <div className="container flex min-h-[100vh]">
        <div
          className={`n m-auto my-[4rem] flex w-[40rem] flex-col gap-[3rem] p-8 `}
        >
          <ul className="flex items-center justify-center gap-4 lg:gap-16">
            {steps.map((data, i) => (
              <li
                key={i}
                className={`before:content relative flex h-[5.8rem] w-[5.8rem] flex-col items-center justify-center rounded-full border-2 p-3 ${
                  stepShipping == data.title.toLocaleLowerCase()
                    ? 'border-[0.3rem] bg-sky-300 text-white'
                    : ''
                }  `}
              >
                {data.icon}
                Step {` ${i + 1}`}
              </li>
            ))}
          </ul>

          <div>{renderStepShipping(stepShipping)}</div>
        </div>
      </div>
    </Layout>
  )
}

export default payment
