import React, { useEffect, useState } from 'react'
import CardFood from './CardFood'
import CardCategory from './CardCategory'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import {
  getSpecifiedProducts,
  getCategories,
  getPrevNext,
} from '../redux/features/productsSlice'
import { motion } from 'framer-motion'

const Menu = () => {
  const dispatch = useDispatch()
  const [category, setCategory] = useState({ id: '1ZSgjN0kHvkDN3gCvzHL' })
  const theme = useSelector((state) => state.theme.value)
  const categories = useSelector((state) => state.products.value.categories)
  const products = useSelector((state) => state.products.value.products)
  const fruits = useSelector((state) => state.products.value.fruits)
  const prev = useSelector((state) => state.products.value.prevState)
  const next = useSelector((state) => state.products.value.nextState)
  console.log('prev :', prev)
  console.log('next: ', next)

  const firstVisibleProduct = useSelector(
    (state) => state.products.value.firstVisibleProduct
  )
  const lastVisibleProduct = useSelector(
    (state) => state.products.value.lastVisibleProduct
  )
  console.log('first: ', firstVisibleProduct)
  console.log('last: ', lastVisibleProduct)

  useEffect(() => {
    dispatch(getCategories())
    dispatch(
      getSpecifiedProducts({ idCategory: '1ZSgjN0kHvkDN3gCvzHL', fruits: true })
    )
  }, [])

  useEffect(() => {
    dispatch(getSpecifiedProducts({ idCategory: category.id, fruits: false }))
  }, [category])

  //Handler:
  const handleNextPrev = (next, fruits) => {
    const product = next ? lastVisibleProduct : firstVisibleProduct
    dispatch(getPrevNext({ idCategory: category.id, fruits, next, product }))
  }

  return (
    <section id="menu" className="container pt-[4rem] md:pt-[7rem]">
      <div className="relative flex w-full flex-col">
        <MenuTitle theme={theme} title={'Our Fresh & Healthy Fruits'} />
        <div className="absolute top-0 right-0 flex space-x-2">
          {prev && (
            <motion.button
              whileTap={{ scale: 0.75 }}
              onClick={() => handleNextPrev(false, true)}
              className={`${theme.primaryCard} rounded-md p-2 `}
            >
              <BsFillArrowLeftCircleFill size="20px" color="white" />
            </motion.button>
          )}
          {next && (
            <motion.button
              whileTap={{ scale: 0.75 }}
              onClick={() => handleNextPrev(true, true)}
              className={`${theme.primaryCard} rounded-md p-2 `}
            >
              <BsFillArrowRightCircleFill size="20px" color="white" />
            </motion.button>
          )}
        </div>
        <div className="my-[3rem] flex w-full flex-wrap justify-center gap-3 md:my-[7rem] md:flex-nowrap md:justify-start md:gap-[3rem]">
          {fruits.map((data, i) => (
            <div  className={`md:mb-[3rem] ${i==5&&"!hidden"}`}>
              <CardFood key={data.id} data={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-[100vh]">
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
        <div className="mt-[3rem] flex items-start justify-between md:mx-[5rem] md:mt-[7rem]">
          {prev && (
            <motion.button
              whileTap={{ scale: 0.75 }}
              onClick={() => handleNextPrev(false, false)}
              className={`${theme.primaryCard} rounded-md px-2 text-white`}
            >
              Prev
            </motion.button>
          )}
          <div className=" flex flex-wrap justify-center gap-4 ">
            {products.map((data, i) => (
              <div
                key={data.id}
                className={`md:mb-[3rem] ${i == 5 && '!hidden'} `}
              >
                <CardFood data={data} />
              </div>
            ))}
          </div>
          {next && (
            <motion.button
              whileTap={{ scale: 0.75 }}
              onClick={() => handleNextPrev(true, false)}
              className={`${theme.primaryCard} rounded-md px-2 text-white`}
            >
              Next
            </motion.button>
          )}
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
