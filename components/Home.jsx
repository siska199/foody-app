import React from 'react'
import { motion } from 'framer-motion'
const Home = () => {
  const heroData = [
    {
      name: 'Icecream',
      desc: 'Chocolate & vanilla',
      price: '5.25',
      imageSrc: '/assets/i1.png',
    },
    {
      name: 'Strawberries',
      desc: 'Fresh Strawberries',
      price: '10.25',
      imageSrc: '/assets/f1.png',
    },
    {
      name: 'Chicken Kebab',
      desc: 'Mixed Kebab Plate',
      price: '8.25',
      imageSrc: '/assets/c3.png',
    },
    {
      name: 'Fish Kebab',
      desc: 'Mixed Fish Kebab',
      price: '5.25',
      imageSrc: '/assets/fi1.png',
    },
  ]
  return (
    <section
      id="home"
      className="container pt-[7rem] grid grid-cols-1 md:grid-cols-2 bg-light-theme "
    >
      {/* Left */}
      <div className="flex md:w-[90%] flex-col gap-5 text-[#2e2e2e] ">
        <div className="flex w-[10rem] items-center justify-center gap-2 rounded-full bg-orange-100">
          <h5 className="text-base font-semibold text-orange-500">
            Bike Delivery
          </h5>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-white drop-shadow-xl">
            <img src="/assets/delivery.png" alt="" />
          </div>
        </div>

        <h1 className="text-[3rem] md:text-[3rem] lg:text-[4rem] font-bold tracking-medium ">
          The Fastest Delivery in{' '}
          <span className="text-orange-600">Your City</span>
        </h1>
        <p className="text-sm md:text-base ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          doloremque sint ratione voluptatum officia, quos eveniet nihil rerum
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
        </p>
        <motion.button whileTap={{scale:0.75}} className="w-[10rem] rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2 transition-all duration-100 ease-in-out hover:shadow-lg">
          Order Now
        </motion.button>
      </div>

      {/* Right */}
      <div className="relative flex md:h-[35rem] md:justify-end mt-10 md:mt-0 ">
        <div className="absolute top-0 md:justify-end flex h-full w-full flex-wrap items-center gap-4 ">
          <div className="flex py-2 px-2 md:px-0 md:py-5 md:w-[90%] justify-center flex-wrap gap-2 md:gap-4">
            {heroData.map((data, i) => (
              <div
                key={i}
                className="md:mb-20 flex w-[8.5rem] lg:w-[12rem] flex-col items-center rounded-3xl  p-5 backdrop-blur-sm bg-white/50"
              >
                <img className="md:-mt-20 w-[7rem] md:w-[10rem] " src={data.imageSrc} />
                <h1 className="md:mt-4 text-center text-lg font-semibold text-gray-500">
                  {data.name}
                </h1>
                <p className="md:my-3 text-center text-[0.7rem] md:text-sm md:font-semibold text-gray-400">
                  {data.desc}
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  <span className="text-sm text-red-600">$</span>
                  {data.price}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* BG hero */}
        <img src="/assets/heroBg.png" className='w-[100%] md:w-[80%] lg:w-[60%]' />
      </div>
    </section>
  )
}

export default Home
