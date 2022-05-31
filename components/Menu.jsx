import React, { useEffect, useState } from 'react'
import CardFood from './CardFood'
import CardCategory from './CardCategory'
import { useDispatch, useSelector } from 'react-redux'
import { GrPrevious } from 'react-icons/gr'
import { GrNext } from 'react-icons/gr'
import {
  getSpecifiedProducts,
  getCategories,
} from '../redux/features/productsSlice'
import { motion } from 'framer-motion'

const Menu = () => {
  const dispatch = useDispatch()
  const [category, setCategory] = useState({ id: '1ZSgjN0kHvkDN3gCvzHL' })
  const theme = useSelector((state) => state.theme.value)
  const categories = useSelector((state) => state.products.value.categories)
  const products = useSelector((state) => state.products.value.products)
  const fruits = useSelector((state) => state.products.value.fruits)

  useEffect(() => {
    dispatch(getCategories())
    dispatch(
      getSpecifiedProducts({ idCategory: '1ZSgjN0kHvkDN3gCvzHL', fruits: true })
    )
  }, [])

  useEffect(() => {
    dispatch(getSpecifiedProducts({ idCategory: category.id, fruits: false }))
  }, [category])

  return (
    <section id="menu" className="container pt-[4rem] md:pt-[7rem]">
      <div className="relative flex w-full flex-col">
        <MenuTitle theme={theme} title={'Our Fresh & Healthy Fruits'} />
        <div className="absolute top-0 right-0 flex space-x-2">
          <motion.button
            whileTap={{ scale: 0.75 }}
            className={`${theme.primaryCard} rounded-md p-2 `}
          >
            <GrPrevious color="white"/>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className={`${theme.primaryCard} rounded-md p-2 `}
          >
            <GrNext color="white"/>
          </motion.button>
        </div>
        <div className="my-[3rem] flex w-full flex-wrap justify-center gap-3 md:my-[7rem] md:flex-nowrap md:justify-between">
          {fruits.map((data, i) => (
            <CardFood key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div>
        <MenuTitle theme={theme} title={'Our Hot Dishes'} />
        <div className="my-8 flex w-full flex-wrap justify-center gap-2 md:my-10 md:gap-4 ">
          {categories.map((data, i) => (
            <CardCategory
              setCategory={setCategory}
              idCategory={category.id}
              data={data}
              key={data.id}
            />
          ))}
        </div>
        <div className="mt-[3rem] flex items-start justify-between md:mx-[7rem] md:mt-[7rem]">
          <motion.button
            whileTap={{ scale: 0.75 }}
            className={`${theme.primaryCard} rounded-md px-2 text-white`}
          >
            Prev
          </motion.button>
          <div className=" flex flex-wrap justify-center gap-3 ">
            {products.map((data, i) => (
              <div key={data.id} className="md:mb-[3rem]">
                <CardFood data={data} />
              </div>
            ))}
          </div>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className={`${theme.primaryCard} rounded-md px-2 text-white`}
          >
            Next
          </motion.button>
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
