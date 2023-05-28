import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm'
import { AuthContext } from '../context/AuthContext'
import { ArrowBack } from '../assets/icons/ArrowBack'

export const Login = () => {
  const { isLogged, loginWithEmail, loginWithGoogle } = useContext(AuthContext)

  if (isLogged) {
    return (
      <main className='flex items-center justify-center min-h-screen'>
        <div className='flex flex-col gap-1 items-center justify-center '>
          <h1 className='text-5xl font-bold'>Oops!</h1>
          <p className='text-xl text-gray-500 mt-2'>Você já está logado(a)</p>

          <Link
            to='/'
            className='hover:underline hover:underline-offset-2 transition-all text-blue-500 mt-8 inline-flex items-center gap-3'
          >
            <ArrowBack className='fill-blue-500' />
            <span>Voltar a navegar</span>
          </Link>
        </div>
      </main>
    )
  } else {
    return (
      <main className='flex flex-col lg:flex-row min-h-screen'>
        <div className='hidden lg:flex-1 bg-gray-100 lg:flex lg:items-center lg:justify-center'></div>

        <div className=' flex-1  flex items-center justify-center'>
          <div className='flex flex-col items-center'>
            <LoginForm onEmailLogin={loginWithEmail} onGoogleLogin={loginWithGoogle} />
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
}
