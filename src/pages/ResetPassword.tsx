import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { ArrowBack } from '../assets/icons/ArrowBack'

export const ResetPassword = () => {
  const { email, setEmail, handleResetPassword, successMessage, errorMessage } =
    useContext(AuthContext)

  useEffect(() => {
    setEmail('')
  }, [setEmail])

  return (
    <main className='flex flex-col lg:flex-row min-h-screen'>
      <div className='hidden lg:flex-1 bg-gray-100 lg:flex lg:items-center lg:justify-center'></div>

      <div className=' flex-1 flex items-center justify-center'>
        <div className='flex flex-col items-center max-w-[350px]'>
          <header className='font-title'>
            <h1 className='text-2xl lg:text-[28px] font-bold'>Esqueceu sua senha?</h1>

            <p className='mt-3 text-sm text-gray-700'>
              Não se preocupe, enviaremos instruções de redefinição.
            </p>
          </header>

          <form onSubmit={handleResetPassword} className='w-full mt-12'>
            {!successMessage && (
              <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-sm text-gray-500'>
                  Digite seu e-mail
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='form-input p-3 border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500'
                  autoFocus={true}
                  required
                />

                {errorMessage && <p className='text-red-500 mt-4'>{errorMessage}</p>}

                <button className='font-bold text-white bg-green-500 hover:bg-green-600 transition-all flex items-center justify-center h-12 rounded-md w-full mt-12'>
                  Redefinir a senha
                </button>
              </div>
            )}

            {successMessage && <p className='text-gray-700'>{successMessage}</p>}
          </form>

          <footer className='mt-28 w-full'>
            <Link
              to='/login'
              className='text-blue-500 hover:underline hover:underline-offset-1 inline-flex items-center lg:justify-start gap-3'
            >
              <ArrowBack className='fill-blue-500' />
              <span>Voltar para fazer login</span>
            </Link>
          </footer>
        </div>
      </div>
    </main>
  )
}
