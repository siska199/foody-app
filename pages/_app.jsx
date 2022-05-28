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
    <Provider store={store}>
      <SessionProvider session={session}>
        {Component.auth ? (
          <Auth>
            {loading ? <LoadingPage /> : <Component {...pageProps} />}
          </Auth>
        ) : (
          <>{loading ? <LoadingPage /> : <Component {...pageProps} />}</>
        )}
      </SessionProvider>
    </Provider>
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
  return <LoadingPage />
}
