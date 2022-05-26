import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { SessionProvider, useSession, signIn } from 'next-auth/react'
import { Provider } from 'react-redux'
import LoadingPage from '../components/LoadingPage'
import Router from 'next/router'
import store from '../redux/store'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {Component.auth ? (
          <Auth>
            {loading ? <LoadingPage /> : <Component {...pageProps} />}
          </Auth>
        ) : (
          <>{loading ? <LoadingPage /> : <Component {...pageProps} />}</>
        )}
      </Provider>
    </SessionProvider>
  )
}

function Auth({ children }) {
  const { data: session, status } = useSession({ required: true })
  const isUser = !!session?.user
  useEffect(() => {
    if (status === 'loading') return
    if (!isUser) signIn()
  }, [isUser, status])

  if (isUser) {
    return children
  }
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-black text-[2rem] font-thin text-white">
      Loading...
    </div>
  )
}
