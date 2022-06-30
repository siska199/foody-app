import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { collection, addDoc, doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase.config'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret : process.env.JWT_SECRET,
  session:{
    strategy:"jwt"
  },
  pages: {
    signIn: '/',
    signOut: '/',
  },
  theme: {
    colorScheme: 'light',
  },
  
  callbacks: {
    async signIn({ user }) {
      const docSnap = await getDoc(doc(db, 'users', user.email))
      if (!docSnap.exists()) {
        await setDoc(doc(collection(db, 'users'), user.email), {
          name: user.name,
          username: user.name.split(' ').join('').toLocaleLowerCase(),
          email: user.email,
          image: user.image,
          role: 'user',
        })
      }
      return true
    },
    async session({ session }) {
      const docSnap = await getDoc(doc(db, 'users', session.user.email))
      session = {
        user: {
          ...session.user,
          role: docSnap.data().role,
        },
      }
      return session
    },
  },
})
