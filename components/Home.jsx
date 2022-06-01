import React from 'react'
import CardHero from './CardHero'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
const Home = () => {
  const heroData = [
    {
      name: 'Icecream',
      desc: 'Chocolate & vanilla',
      price: '5.25',
      imageSrc: '/assets/i1.webp',
    },
    {
      name: 'Strawberries',
      desc: 'Fresh Strawberries',
      price: '10.25',
      imageSrc: '/assets/f1.webp',
    },
    {
      name: 'Chicken Kebab',
      desc: 'Mixed Kebab Plate',
      price: '8.25',
      imageSrc: '/assets/c3.webp',
    },
    {
      name: 'Fish Kebab',
      desc: 'Mixed Fish Kebab',
      price: '5.25',
      imageSrc: '/assets/fi1.webp',
    },
  ]
  const theme = useSelector((state) => state.theme.value)

  return (
    <section
      id="home"
      className="bg-transparen container pt-[7rem] grid sm:grid-cols-2"
    >
      {/* Left */}
      <div className={`flex flex-col gap-0 lg:w-[80%] ${theme.textMainColor} `}>
        <div
          className={`flex w-[10rem] items-center justify-center gap-2 rounded-full ${
            theme.theme == 'light' ? 'bg-orange-100' : 'bg-orange-200 p-1'
          } p-1`}
        >
          <h5
            className={`text-base font-semibold ${
              theme.theme == 'light' ? 'text-orange-300' : 'text-orange-500'
            } `}
          >
            Bike Delivery
          </h5>
          <div className="h-[1.7rem] w-[1.7rem] overflow-hidden rounded-full bg-white drop-shadow-xl">
            <img src="/assets/delivery.png" alt="" />
          </div>
        </div>

        <h1 className="tracking-medium text-[3rem] font-bold md:text-[3rem] lg:text-[4rem] ">
          The Fastest Delivery in{' '}
          <span className={`${theme.primaryText}`}>Your City</span>
        </h1>
        <p
          className={`text-sm md:text-base ${
            theme.theme == 'dark' && 'font-[300]'
          } `}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          doloremque sint ratione voluptatum officia, quos eveniet nihil rerum
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
        </p>
        <motion.button
          whileTap={{ scale: 0.75 }}
          className={`w-[10rem] rounded-lg bg-gradient-to-br ${theme.theme=="light"?"from-orange-400 to-orange-500":"bg-[#222325]"}  px-4 py-2 transition-all duration-100 ease-in-out hover:shadow-lg`}
        >
          Order Now
        </motion.button>
      </div>

      {/* Right */}
      <div className="relative mt-10 flex md:mt-0 md:justify-end  ">
        <div className="absolute top-0 flex h-full w-full md:w-[100%] lg:w-[100%] flex-wrap items-center gap-4 md:justify-end ">
          <div className="flex flex-wrap justify-center gap-2 py-2 px-2 lg-md:w-[90%] sm:w-[100%] md:w-[100%] lg:w-[80%] md:gap-4 md:px-0 md:py-5">
            {heroData.map((data, i) => (
              <CardHero key={i} data={data} />
            ))}
          </div>
        </div>
        {/* BG hero */}
        <img
          src="/assets/heroBg.webp"
          className="w-[100%] h-[20rem] sm:h-auto md:w-[80%] lg:w-[60%]"
        />
      </div>
    </section>
  )
}

export default Home
