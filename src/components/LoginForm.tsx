import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Google } from '../assets/icons/Google'

interface LoginFormProps {
  onEmailLogin: (email: string, password: string) => void
  onGoogleLogin: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onEmailLogin,
  onGoogleLogin,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault()
    onEmailLogin(email, password)
  }

  const handleGoogleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    onGoogleLogin()
  }

  return (
    <div className='flex-1 px-8 pt-20 flex items-center justify-center'>
      <div className='flex flex-col max-w-[350px] w-full '>
        <header className='font-title space-y-3'>
          <span className='text-sm lg:text-base text-gray-700'>
            Bem vindo de volta
          </span>
          <h1 className='text-2xl lg:text-[28px] font-bold'>
            Faça login na sua conta
          </h1>
        </header>

        <form className='mt-12' onSubmit={handleEmailLogin}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-sm text-gray-500'>
              E-mail
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='form-input p-3 border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500'
              required
            />
          </div>

          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor='email' className='text-sm text-gray-500'>
              Senha
            </label>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-input p-3 border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500'
            />
          </div>

          <div className='mt-4 flex items-center justify-between'>
            <div className='inline-flex items-center gap-3'>
              <input
                type='checkbox'
                name='remember'
                id='remember'
                className='rounded-full bg-gray-100 border-gray-200 text-blue-500 cursor-pointer focus:ring-blue-500'
              />
              <label
                htmlFor='remember'
                className='cursor-pointer text-sm text-gray-700'
              >
                Lembre de mim{' '}
              </label>
            </div>

            <Link
              to='/reset-password'
              className='text-sm font-semibold text-blue-500 hover:underline hover:underline-offset-1'
            >
              Esqueceu sua senha?
            </Link>
          </div>

          <button className='font-bold text-white bg-green-500 hover:bg-green-600 transition-all flex items-center justify-center h-12 rounded-md w-full mt-12'>
            Entrar
          </button>
        </form>

        <button
          className='font-bold text-white bg-gray-900 hover:bg-gray-800 transition-all flex items-center justify-center h-12 rounded-md w-full mt-4 gap-3'
          onClick={handleGoogleLogin}
        >
          <Google />
          <span>Ou faça login com o Google</span>
        </button>
      </div>
    </div>
  )
}
