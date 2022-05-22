import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyAy9NPeneh9rDjpCKTZ-41Bxj4fdCPNIQQ',
  authDomain: 'foodyy-app.firebaseapp.com',
  projectId: 'foodyy-app',
  storageBucket: 'foodyy-app.appspot.com',
  messagingSenderId: '918431788900',
  appId: '1:918431788900:web:9aad24d7ddea60a1dad471',
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
