import { Dispatch, FormEvent, SetStateAction, createContext, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

interface AuthProps {
  user: any
  email: string
  password: string
  successMessage: string
  errorMessage: string
  setEmail: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  setSuccessMessage: Dispatch<SetStateAction<string>>
  setErrorMessage: Dispatch<SetStateAction<string>>
  isLogged: boolean
  loginWithEmail: (email: string, password: string, event: FormEvent) => Promise<void>
  loginWithGoogle: (event: FormEvent) => Promise<void>
  logOut: () => void
  handleResetPassword: (event: FormEvent) => Promise<void>
  handleCreateAccount: (event: FormEvent) => Promise<void>
}

export const AuthContext = createContext({} as AuthProps)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const {
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
  } = useAuth()

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser = sessionStorage.getItem('@AuthFirebase:user')
      const storageToken = sessionStorage.getItem('@AuthFirebase:token')
      if (storageToken && storageUser) {
        setUser(storageUser)
      }
    }
    loadStorageData()
  }, [user, setUser])

  return (
    <AuthContext.Provider
      value={{
        user,
        email,
        password,
        successMessage,
        errorMessage,
        setEmail,
        setPassword,
        setSuccessMessage,
        setErrorMessage,
        isLogged: !!user,
        loginWithEmail,
        loginWithGoogle,
        logOut,
        handleResetPassword,
        handleCreateAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
