import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { IoFastFoodOutline } from 'react-icons/io5'
import { BsCloudUploadFill } from 'react-icons/bs'
import { IoBody } from 'react-icons/io5'
import { BiDollar } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import Layout from '../Layout/Layout'

const additem = () => {
  //***Canstanta***\\
  const dataCategories = [...Array(7)].map((_, i) => ({
    id: uuidv4(),
    title: 'Category' + i,
  }))
  const theme = useSelector((state) => state.theme.value)
  const imageRef = useRef(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [form, setForm] = useState({
    title: '',
    category: '',
    photo: '',
    calories: '',
    price: '',
  })
  const [category, setCategory] = useState('')

  //***Handler***\\
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
  const handleAddcategory = (e) => {
    e.preventDefault()
  }
  return (
    <Layout>
      <div className="container flex min-h-[100vh] items-center pt-[3rem] md:pt-0 justify-center ">
        <form
          className={`flex w-[50rem] flex-col gap-4 rounded-lg border-[0.17rem] p-4 ${
            theme.theme == 'light' ? 'bg-transparent' : 'bg-white'
          }`}
        >
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
          <div className="flex gap-3 justify-between">
            <div className='flex md:w-1/2'>
              <select
                name="category"
                className="w-full rounded-lg border-2 p-2 outline-none"
                onChange={(e) => handleOnChange(e)}
                value={form.category}
              >
                {dataCategories.map((data) => (
                  <option key={data.id} value={`${data.title}`}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-wrap gap-2 md:w-1/2 border-2">
              <input
                type="text"
                placeholder="Add Category"
                className="border-b-[0.2rem] bg-transparent px-5 py-2 outline-none placeholder:text-gray-800"
                name=""
                id=""
                onChange={(e) => setCategory(e.target.value)}
              />
              <motion.button
                whileTap={{ scale: 0.75 }}
                onClick={(e) => handleAddcategory(e)}
                className="rounded-lg border-[0.2rem] px-2 hover:bg-white"
              >
                Add
              </motion.button>
            </div>
          </div>

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
      </div>
    </Layout>
  )
}

export default additem
