import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  const sosmedData = [<FaFacebookF />, <BsTwitter />, <BsInstagram />]

  return (
    <div className="bg-[#292A2D] p-10 font-thin text-white">
      <div className="grid grid-cols-2 md:grid-cols-5 capitalize ">
        <div className='mb-5 md:mb-0'>
          <h1 className="text-[2rem] font-medium">Foodyy</h1>
          <p>slogan company</p>
        </div>
        <div className='mb-5 md:mb-0'>
          <p>weebly themes</p>
          <p>pre-sale faqs</p>
          <p>submit a ticket</p>
        </div>
        <div className='mb-5 md:mb-0'>
          <p>weebly themes</p>
          <p>pre-sale faqs</p>
          <p>submit a ticket</p>
        </div>
        <div className='mb-5 md:mb-0'>
          <p>weebly themes</p>
          <p>pre-sale faqs</p>
          <p>submit a ticket</p>
        </div>
        <div className='mb-5 md:mb-0'>
          <p>weebly themes</p>
          <p>pre-sale faqs</p>
          <p>submit a ticket</p>
        </div>
      </div>
      <hr className="md:my-[5rem] my-[1rem]" />
      <div className='flex justify-center gap-4'>
        {sosmedData.map((data, i) => (
          <div key={i} className="text-[1.5rem] cursor-pointer rounded-full border-2 p-2">{data}</div>
        ))}
      </div>
      <p className='text-center mt-2'>Siska Apriana Rifianti</p>
    </div>
  )
}
export default Footer
