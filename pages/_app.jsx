import '../styles/globals.css'
import { SessionProvider, useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'
import { Loading } from '../components/Loading'
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
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

function Auth({ children }) {
  const { data: session, status } = useSession()
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
      <Loading />
    </div>
  )
}
