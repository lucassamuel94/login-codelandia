import { useState } from 'react'
import { auth } from '../../firebase'
import {
  UserCredential,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

export const useAuth = () => {
  const [user, setUser] = useState<any>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const loginWithEmail = async (email: string, password: string, event: React.FormEvent) => {
    event.preventDefault()

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

  const loginWithGoogle = async (event: React.FormEvent) => {
    event.preventDefault()

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

  const handleResetPassword = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      await sendPasswordResetEmail(auth, email)
      setSuccessMessage('Um email de redefinição de senha foi enviado para o endereço fornecido.')
      setErrorMessage('')
    } catch (error) {
      setSuccessMessage('')
      setErrorMessage(
        'Erro ao solicitar a redefinição de senha. Verifique o endereço de email fornecido.'
      )
      console.error('Erro ao solicitar a redefinição de senha:', error)
    }
  }

  const handleCreateAccount = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setSuccessMessage('Usuário criado com sucesso!')
      setErrorMessage('')
    } catch (error) {
      setSuccessMessage('')
      setErrorMessage('Erro ao criar usuário. Verifique os dados fornecidos.')
      console.error('Erro ao criar usuário:', error)
    }
  }

  return {
    user,
    email,
    password,
    successMessage,
    errorMessage,
    setUser,
    setEmail,
    setPassword,
    setSuccessMessage,
    setErrorMessage,
    loginWithEmail,
    loginWithGoogle,
    logOut,
    handleResetPassword,
    handleCreateAccount,
  }
}
