import React from 'react'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../redux/features/themeSlice'
import { themeDark, themeLight } from '../helper/constanta'
const ChangeTheme = () => {
  const theme = [themeLight, themeDark]
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
      className="fixed bottom-4 right-5 z-[999] cursor-pointer rounded-full bg-red-custome p-2 text-[2rem] text-white shadow-lg"
    >
      <WiMoonAltFirstQuarter color="" />
    </motion.div>
  )
}

export default ChangeTheme
