import { useState } from 'react'
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { auth } from '../../firebase'

interface UseAuthResult {
  user: any
  loginWithEmail: (email: string, password: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
}

const useAuth = (): UseAuthResult => {
  const [user, setUser] = useState<any>(null)

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      setUser(userCredential.user)
    } catch (error) {
      console.error(error)
    }
  }

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      setUser(userCredential.user)
    } catch (error) {
      console.error(error)
    }
  }

  return { user, loginWithEmail, loginWithGoogle }
}

export default useAuth
