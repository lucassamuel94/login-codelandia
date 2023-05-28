import { createContext, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

interface AuthProps {
  user: any
  isLogged: boolean
  loginWithEmail: (email: string, password: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AuthProps)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser, loginWithEmail, loginWithGoogle } = useAuth()

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
    <AuthContext.Provider value={{ user, isLogged: !!user, loginWithEmail, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}
