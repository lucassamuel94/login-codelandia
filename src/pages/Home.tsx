import { Navigate } from 'react-router-dom'
import { ArrowBack } from '../assets/icons/ArrowBack'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Home = () => {
  const { user, logOut } = useContext(AuthContext)

  function onLogOut() {
    logOut()
    return <Navigate to='/' />
  }

  return (
    <div className='min-h-screen flex flex-col gap-1 items-center justify-center '>
      <div className='mt-6 space-y-2'>
        <h1 className='text-xl lg:text-2xl font-bold text-center'>Seja bem vindo(a)</h1>

        <h1 className='text-3xl lg:text-4xl font-bold text-center'>{JSON.parse(user)}</h1>
        <p className='text-xl text-gray-500 mt-2'>Login realizado com sucesso</p>
      </div>

      <button
        onClick={onLogOut}
        className='hover:underline hover:underline-offset-2 transition-all text-blue-500 mt-8 inline-flex items-center gap-3'
      >
        <ArrowBack className='fill-blue-500' />
        <span>Sair</span>
      </button>
    </div>
  )
}
