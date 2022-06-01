import React from 'react'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../redux/features/themeSlice'
import { themeDark, themeLight } from '../helper/constanta'

const ChangeTheme = () => {
  const theme = [
    {
      theme: 'dark',
      bg: 'bg-orange-600',
      textMainColor: 'text-slate-200',
      primaryText: 'text-[#414349]',
      primaryCard: 'bg-[#414349]',
      cardColor: 'bg-orange-400',
    },
    {
      theme: 'light',
      bg: 'bg-[#f5f3f3]',
      textMainColor: 'text-[#515151]',
      primaryText: 'text-orange-600',
      primaryCard: 'bg-orange-600',
      cardColor: 'bg-white',
    },
  ]
  const themeInfo = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  const handleChangeTheme = () => {
    const newTheme = themeInfo.theme == 'light' ? theme[0] : theme[1]
    console.log('theme: ', newTheme)
    dispatch(changeTheme(newTheme))
  }
  return (
    <motion.div
      whileTap={{ scale: 0.75 }}
      onClick={() => handleChangeTheme()}
      className="fixed bottom-4 right-5 z-[999] cursor-pointer rounded-full bg-red-custome p-2 text-[2rem] text-white shadow-lg"
    >
      <WiMoonAltFirstQuarter color="" />
    </motion.div>
  )
}

export default ChangeTheme
