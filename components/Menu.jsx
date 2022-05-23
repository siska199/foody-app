import React from 'react'
import LabelTitle from './LabelTitle'
import CardFood from './CardFood'

const Menu = () => {
  const dataFruites = [...Array(4)].map((_, i) => ({
    imageUrl: '/assets/f1.png',
    title: 'Blue Berries',
    desc: '80 Calories',
    price: '12',
  }))

  console.log('dataFruites: ', dataFruites)

  return (
    <section id="menu" className="container border-2">
      {/* Fruit category */}
      <div className="border-pink border-2">
        <LabelTitle title={'Our Fresh & Healthy Fruits'} lengthLine={'20'} />
        <div className="my-[7rem] flex overflow-x-scroll scrollbar-thin gap-5 justify-between border-2 border-black  ">
          {dataFruites.map((data, i) => (
            <CardFood key={i} data={data} />
          ))}
        </div>
      </div>
      {/* Hot dishes category */}
    </section>
  )
}
export default Menu
