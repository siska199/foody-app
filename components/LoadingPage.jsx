import React from 'react'
import LoadingIcon from './LoadingIcon'
const LoadingPage = () => {
  return (
    <div className="fixed flex h-screen w-screen items-center justify-center bg-transparent ">
      <LoadingIcon size="w-10" />
    </div>
  )
}
export default LoadingPage
