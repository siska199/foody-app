import React from 'react'
import LabelTitle from './LabelTitle'
import CardFood from './CardFood'

const Menu = () => {
  const dataFruites = [...Array(5)].map((_, i) => ({
    imageUrl: '/assets/f1.png',
    title: 'Blue Berries',
    desc: '80 Calories',
    price: '12',
  }))

  console.log('dataFruites: ', dataFruites)

  return (
    <section id="menu" className="container ">
      {/* Fruit category */}
      <div className='flex flex-col w-full  '>
        <LabelTitle title={'Our Fresh & Healthy Fruits'}  />
        <div className="my-[7rem] w-full flex gap-3 justify-between">
          {dataFruites.map((data, i) => (
            <CardFood key={i} data={data} />
          ))}
        </div>
      </div>
      {/* Hot dishes category */}
      <div>
        <LabelTitle title={'Our Hot Dishes'}/>
        {/* Category filtering */}
        <div className='w-full border-black justify-center'>
            
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}
export default Menu
