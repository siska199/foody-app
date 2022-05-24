import React from 'react'
import LabelTitle from './LabelTitle'
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
    <section id="menu" className="container ">
      {/* Fruit category */}
      <div className="flex w-full flex-col  ">
        <LabelTitle title={'Our Fresh & Healthy Fruits'} />
        <div className="my-[7rem] flex w-full justify-between gap-3">
          {dataFruites.map((data, i) => (
            <CardFood key={i} data={data} />
          ))}
        </div>
      </div>
      {/* Hot dishes category */}
      <div>
        <LabelTitle title={'Our Hot Dishes'} />
        {/* Category filtering */}
        <div className="my-10 flex w-full justify-center gap-4 ">
          {dataIcon.map((data, i) => (
            <CardCategory data={data} key={i} />
          ))}
        </div>
        <div className="m-[7rem] flex flex-wrap justify-center gap-3">
          {dataHotDishes.map((data, i) => (
            <div className='mb-[3rem]'>
              <CardFood key={i} data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Menu
