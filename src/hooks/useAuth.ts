import { useState } from 'react'
import { auth } from '../../firebase'
import {
  UserCredential,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'

export const useAuth = () => {
  const [user, setUser] = useState<any>(null)

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password)
      const userToken = await userCredential.user.getIdToken()
      const userName = userCredential.user.displayName
      sessionStorage.setItem('@AuthFirebase:token', userToken)
      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(userName))

      setUser(userCredential.user)
    } catch (error) {
      console.error(error)
    }
  }

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const userToken = await userCredential.user.getIdToken()
      const userName = userCredential.user.displayName

      sessionStorage.setItem('@AuthFirebase:token', userToken)
      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(userName))

      setUser(userCredential.user)
    } catch (error) {
      console.error(error)
    }
  }

  const logOut = () => {
    sessionStorage.clear()
    setUser(null)
  }

  return {
    user,
    setUser,
    loginWithEmail,
    loginWithGoogle,
    logOut,
  }
}
