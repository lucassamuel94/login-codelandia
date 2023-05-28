import { Link } from 'react-router-dom'
import { ArrowBack } from '../assets/icons/ArrowBack'

export const Error404 = () => {
  return (
    <div className='min-h-screen flex flex-col gap-1 items-center justify-center '>
      <h1 className='text-5xl font-bold'>Oops!</h1>
      <p className='text-xl text-gray-500 mt-2'>Página não encontrada</p>

      <Link
        to='/'
        className='hover:underline hover:underline-offset-2 transition-all text-blue-500 mt-8 inline-flex items-center gap-3'
      >
        <ArrowBack className='fill-blue-500' />
        <span>Voltar a navegar</span>
      </Link>
    </div>
  )
}
