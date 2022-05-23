import '../styles/globals.css'
import { SessionProvider, signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

const Auth = ({ children }) => {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  useEffect(() => {
    if (status === 'loading') return
    if (!isUser) signIn()
  }, [isUser, status])
  if (isUser) {
    return children
  }
  return <div className="bg-dark m-auto h-full w-full ">Loading...</div>
}

export default App
