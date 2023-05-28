import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CreateAccountForm } from '../components/CreateAccountForm'
import { Link } from 'react-router-dom'

export const CreateAccount = () => {
  const {
    successMessage,
    errorMessage,
    setEmail,
    setPassword,
    setSuccessMessage,
    setErrorMessage,
  } = useContext(AuthContext)

  useEffect(() => {
    setEmail('')
    setPassword('')
    setSuccessMessage('')
    setErrorMessage('')
  }, [setEmail, setErrorMessage, setPassword, setSuccessMessage])

  return (
    <main className='flex flex-col lg:flex-row min-h-screen'>
      <div className='hidden lg:flex-1 bg-gray-100 lg:flex lg:items-center lg:justify-center'></div>

      <div className='flex-1 flex flex-col items-center justify-center'>
        <div className='max-w-[350px] w-full'>
          <header className='font-title space-y-2'>
            <span className='text-sm lg:text-base text-gray-700'>
              {successMessage && 'Parabens'}
              {!successMessage && 'Legal, então vamos lá'}
            </span>
            <h1 className='text-2xl lg:text-[28px] font-bold'>
              {successMessage && 'Conta criada com sucesso!'}
              {!successMessage && 'Criar uma conta'}
            </h1>
          </header>

          {!successMessage && <CreateAccountForm />}

          {errorMessage && <p>{errorMessage}</p>}
        </div>

        <p
          className='mt-28 flex items-center justify-center gap-2 w-full max-w-[350px]'
          style={{
            justifyContent: `${successMessage && 'start'}`,
            marginTop: `${successMessage && '32px'}`,
          }}
        >
          {!successMessage && <span>Já tem uma conta?</span>}

          <Link to='/login' className='text-blue-500 hover:underline hover:underline-offset-1'>
            {!successMessage && <span>Faça Login</span>}
            {successMessage && <span className='text-start'>Clique aqui e faça login</span>}
          </Link>
        </p>
      </div>
    </main>
  )
}
