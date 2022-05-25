import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import CardFood from './CardFood'
import CardCategory from './CardCategory'
import { IoFastFood } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const Menu = () => {
  const dataFruites = [...Array(5)].map((_, i) => ({
    id: uuidv4(),
    imageUrl: '/assets/f1.png',
    title: 'Blue Berries',
    desc: '80 Calories',
    price: 12,
  }))
  const dataHotDishes = [...Array(5)].map((_, i) => ({
    id: uuidv4(),
    imageUrl: '/assets/f1.png',
    title: 'Blue Berries',
    desc: '80 Calories',
    price: 12,
  }))

  const dataIcon = [...Array(5)].map((_, i) => ({
    title: 'Category',
    icon: (
      <IoFastFood className="text-[1.3rem] text-white group-hover:text-text-light" />
    ),
  }))
  const theme = useSelector((state) => state.theme.value)

  return (
    <section id="menu" className="container pt-[4rem] md:pt-[7rem]">
      <div className="flex w-full flex-col  ">
        <MenuTitle theme={theme} title={'Our Fresh & Healthy Fruits'} />
        <div className="my-[3rem] flex w-full flex-wrap justify-center gap-3 md:my-[7rem] md:flex-nowrap md:justify-between">
          {dataFruites.map((data, i) => (
            <CardFood key={i} data={data} />
          ))}
        </div>
      </div>
      <div>
        <MenuTitle theme={theme} title={'Our Hot Dishes'} />
        <div className="my-8 flex w-full flex-wrap justify-center gap-2 md:my-10 md:gap-4 ">
          {dataIcon.map((data, i) => (
            <CardCategory data={data} key={i} />
          ))}
        </div>
        <div className="mt-[3rem] flex flex-wrap justify-center gap-3 md:mx-[7rem] md:mt-[7rem]">
          {dataHotDishes.map((data, i) => (
            <div className="md:mb-[3rem]">
              <CardFood key={i} data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const MenuTitle = ({ theme, title }) => {
  return (
    <h1
      className={` ${theme.textMainColor} before:content relative from-orange-400  to-orange-600 text-2xl
    font-semibold capitalize text-text-light before:absolute before:-bottom-2
    before:left-0 before:h-1 before:w-[10%] before:rounded-lg before:bg-gradient-to-tr
    `}
    >
      {title}
    </h1>
  )
}

export default Menu
