import React from 'react'
import CardFood from './CardFood'
import CardCategory from './CardCategory'
import { IoFastFood } from 'react-icons/io5'

const Menu = () => {
  const dataFruites = [...Array(5)].map((_, i) => ({
    imageUrl: '/assets/f1.png',
    title: 'Blue Berries',
    desc: '80 Calories',
    price: '12',
  }))
  const dataIcon = [...Array(5)].map((_, i) => ({
    title: 'Category',
    icon: (
      <IoFastFood className="text-[1.3rem] text-white group-hover:text-text-light" />
    ),
  }))
  const dataHotDishes = [...Array(5)].map((_, i) => ({
    imageUrl: '/assets/f1.png',
    title: 'Blue Berries',
    desc: '80 Calories',
    price: '12',
  }))

  return (
    <section id="menu" className="container pt-[4rem] md:pt-[7rem]">
      {/* Fruit category */}
      <div className="flex w-full flex-col  ">
        <MenuTitle title={'Our Fresh & Healthy Fruits'} />
        <div className="md:my-[7rem] my-[3rem] flex flex-wrap md:flex-nowrap w-full justify-center md:justify-between gap-3">
          {dataFruites.map((data, i) => (
            <CardFood key={i} data={data} />
          ))}
        </div>
      </div>
      {/* Hot dishes category */}
      <div>
        <MenuTitle title={'Our Hot Dishes'} />
        {/* Category filtering */}
        <div className="md:my-10 my-8 flex flex-wrap w-full justify-center gap-2 md:gap-4 ">
          {dataIcon.map((data, i) => (
            <CardCategory data={data} key={i} />
          ))}
        </div>
        <div className="md:mx-[7rem] mt-[3rem] md:mt-[7rem] flex flex-wrap justify-center gap-3">
          {dataHotDishes.map((data, i) => (
            <div className='md:mb-[3rem]'>
              <CardFood key={i} data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const MenuTitle = ({ title}) => {
  return (
    <p
      className={`before:content relative text-2xl font-semibold capitalize
    text-text-light before:absolute before:rounded-lg before:w-[10%] from-orange-400
    to-orange-600 before:-bottom-2 before:left-0 before:h-1 before:bg-gradient-to-tr
    `}
    >
      {title}
    </p>
  )
}

export default Menu
