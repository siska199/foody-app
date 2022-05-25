import React from 'react'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../redux/features/themeSlice'
const ChangeTheme = () => {
  const theme = [
    {
      theme: 'light',
      bg: 'bg-[#f5f3f3]',
      textMainColor: 'text-[#515151]',
      primaryText: 'text-orange-600',
      primaryCard: 'bg-orange-600',
      cardColor: 'bg-white',
    },
    {
      theme: 'dark',
      bg: 'bg-[#FF8D29]',
      textMainColor: 'text-slate-200',
      primaryText: 'text-[#414349]',
      primaryCard: 'bg-[#414349]',
      cardColor: 'bg-red-400',
    },
  ]

  const themeInfo = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  const handleChangeTheme = () => {
    const newTheme = themeInfo.theme == 'light' ? theme[1] : theme[0]
    dispatch(changeTheme(newTheme))
  }
  return (
    <motion.div
      whileTap={{ scale: 0.75 }}
      onClick={() => handleChangeTheme()}
      className="fixed z-[999] bottom-4 right-5 cursor-pointer rounded-full bg-white p-2 text-[2rem] text-white shadow-lg"
    >
      <WiMoonAltFirstQuarter color="black" />
    </motion.div>
  )
}

export default ChangeTheme
