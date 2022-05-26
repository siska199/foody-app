import React, { useRef, useState } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import ChangeTheme from '../components/ChangeTheme'
import Navbar from '../components/Navbar'
import { IoFastFoodOutline } from 'react-icons/io5'
import { BsCloudUploadFill } from 'react-icons/bs'
import { IoBody } from 'react-icons/io5'
import { BiDollar } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import Link from 'next/link'
const additem = () => {
  const imageRef = useRef(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [form, setForm] = useState({
    title: '',
    category: '',
    photo: '',
    calories: '',
    price: '',
  })
  const theme = useSelector((state) => state.theme.value)

  const dataCategories = [...Array(7)].map((_, i) => ({
    id: uuidv4(),
    title: 'Category' + i,
  }))

  const handleOnChange = (e) => {
    const inputName = e.target.name
    setForm({
      ...form,
      [inputName]: inputName == 'photo' ? e.target.files[0] : e.target.value,
    })
    if (inputName == 'photo' && e.target.files[0]) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (rederEvent) => {
        setImageUrl(rederEvent.target.result)
      }
    }
  }
  const handleCloseImage = () => {
    setImageUrl(null)
    setForm({
      ...form,
      photo: '',
    })
  }
  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('form: ', form)
  }
  return (
    <div>
      <Head>
        <title>Foodyy | Add items</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${theme.bg} flex h-[100vh] items-center justify-center`}
      >
        <Navbar />

        <form className="container m-auto flex w-[50rem] flex-col gap-4 rounded-lg border-[0.17rem] p-4">
          <div className="flex items-center gap-2 border-b-[0.17rem] bg-transparent">
            <IoFastFoodOutline className="text-[1.2rem]" />{' '}
            <input
              type="text"
              placeholder="Tittle"
              name="title"
              onChange={(e) => handleOnChange(e)}
              className="w-full bg-transparent px-5 py-2 outline-none placeholder:text-gray-800"
            />
          </div>
          <select
            name="category"
            className="w-full rounded-lg p-2 outline-none"
            onChange={(e) => handleOnChange(e)}
            value={form.category}
          >
            {dataCategories.map((data) => (
              <option key={data.id} value={`${data.title}`}>
                {data.title}
              </option>
            ))}
          </select>
          <div
            onClick={() => imageUrl == null && imageRef.current.click()}
            className="flex h-[20rem] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-[0.17rem] text-gray-600"
          >
            {imageUrl ? (
              <div className="relative flex h-full w-full p-4">
                <IoCloseOutline
                  onClick={() => handleCloseImage()}
                  className="absolute right-10 text-[1.2rem]"
                />
                <img className="w-full object-contain" src={imageUrl} alt="" />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <input
                  name="photo"
                  ref={imageRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleOnChange(e)}
                />
                <BsCloudUploadFill className="text-[2.5rem]" />
                <p className="font-semibold">Click here to Upload</p>
              </div>
            )}
          </div>
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="flex items-center gap-2 border-b-[0.17rem] bg-transparent">
              <IoBody className="text-[1.2rem]" />
              <input
                type="text"
                placeholder="Calories"
                name="calories"
                onChange={(e) => handleOnChange(e)}
                className="w-full bg-transparent px-5 py-2 outline-none placeholder:text-gray-800"
              />
            </div>
            <div className="flex items-center gap-2 border-b-[0.17rem] bg-transparent">
              <BiDollar className="text-[1.2rem]" />
              <input
                type="text"
                placeholder="Price"
                name="price"
                onChange={(e) => handleOnChange(e)}
                className="w-full bg-transparent px-5 py-2 outline-none placeholder:text-gray-600"
              />
            </div>{' '}
          </div>
          <motion.button
            whileTap={{ scale: 0.75 }}
            onClick={(e) => handleSubmitForm(e)}
            className={`ml-auto w-[8rem] rounded-lg py-1 text-[1.1rem] text-white ${
              theme.theme == 'light' ? 'bg-orange-600' : 'bg-black/80'
            }`}
          >
            Save
          </motion.button>
        </form>

        <ChangeTheme />
      </main>
    </div>
  )
}

export default additem
