import React from 'react'
import { Link } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm'
import useAuth from '../hooks/useAuth'

export const Login: React.FC = () => {
  const { loginWithEmail, loginWithGoogle } = useAuth()

  return (
    <main className='flex flex-col lg:flex-row min-h-screen'>
      <div className='hidden lg:flex-1 bg-gray-100 lg:flex lg:items-center lg:justify-center'></div>

      <div className=' flex-1  flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <LoginForm
            onEmailLogin={loginWithEmail}
            onGoogleLogin={loginWithGoogle}
          />
          <p className='mt-28'>
            Não tem uma conta?{' '}
            <Link
              to='/create-account'
              className='text-blue-500 hover:underline hover:underline-offset-1'
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
