import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBShDjvUOfYPEQ6H_-aXruLqTiaRjEg91k',
  authDomain: 'login-codelandia.firebaseapp.com',
  projectId: 'login-codelandia',
  storageBucket: 'login-codelandia.appspot.com',
  messagingSenderId: '482870100725',
  appId: '1:482870100725:web:13a23cfce5cbfb77bc7bbc',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
