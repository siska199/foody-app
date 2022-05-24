import React from 'react'
import TitleSection from './TitleSection'
import CardService from './CardService'
import { GiChickenOven } from 'react-icons/gi'
import { MdDeliveryDining } from 'react-icons/md'
import { MdPayment } from 'react-icons/md'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
const Service = () => {
  const dataServices = [
    {
      icon: <GiChickenOven />,
      title: 'Delicious Food',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam omnis ',
    },
    {
      icon: <MdDeliveryDining />,
      title: 'Fast Shipping',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam omnis ',
    },
    {
      icon: <AiOutlineSafetyCertificate />,
      title: 'Certificate Food',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam omnis ',
    },
    {
      icon: <MdPayment />,
      title: 'Payment Online',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam omnis ',
    },
  ]
  return (
    <section id="service" className="flex flex-col items-center py-[3rem] md:py-[5rem]">
      <TitleSection title={'Our Services'} />
      <div className="mt-[5rem] flex flex-wrap w-full items-center justify-center md:gap-5 gap-2 ">
        {dataServices.map((data, i) => (
          <CardService data={data} key={i} />
        ))}
      </div>
    </section>
  )
}

export default Service
