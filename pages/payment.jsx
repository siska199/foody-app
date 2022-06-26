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
  const steps = [
    {
      title: 'Address',
      icon: <RiEBike2Line className="text-[1.5rem]" />,
    },
    {
      title: 'Payment',
      icon: <MdPayment className="text-[1.5rem]" />,
    },
    {
      title: 'Review',
      icon: <MdOutlineVerified className="text-[1.5rem]" />,
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
        <div className={`n m-auto my-[2rem] flex flex-col gap-[3rem] p-8 `}>
          <ul className="flex items-center justify-center gap-4 lg:gap-16">
            {steps.map((data, i) => (
              <div key={i}>
                <li
                  className={`before:content relative flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-full border-2 p-3 ${
                    stepShipping == data.title.toLocaleLowerCase()
                      ? 'border-[0.3rem] bg-sky-300 text-white'
                      : ''
                  }  `}
                >
                  {data.icon}
                </li>
                <p className="text-center">{`Step ${i + 1}`}</p>
              </div>
            ))}
          </ul>

          <div>{renderStepShipping(stepShipping)}</div>
        </div>
      </div>
    </Layout>
  )
}

export default payment
