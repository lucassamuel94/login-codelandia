import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Google } from '../assets/icons/Google'

export const CreateAccountForm = () => {
  const { email, password, setEmail, setPassword, handleCreateAccount } = useContext(AuthContext)
  return (
    <form onSubmit={handleCreateAccount} className='mt-12 flex flex-col'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='text-sm text-gray-500'>
          Email
        </label>
        <input
          type='email'
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          className='form-input p-3 border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500'
          autoFocus={true}
          required
        />
      </div>
      <div className='flex flex-col gap-2 mt-8'>
        <label htmlFor='password' className='text-sm text-gray-500'>
          Senha
        </label>
        <input
          type='password'
          value={password}
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          className='form-input p-3 border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500'
          required
          minLength={6}
        />
      </div>
      <button
        type='submit'
        className='font-bold text-white bg-green-500 hover:bg-green-600 transition-all flex items-center justify-center h-12 rounded-md w-full mt-12'
      >
        Criar Usuário
      </button>

      <button
        className='font-bold text-white bg-gray-900 hover:bg-gray-800 transition-all flex items-center justify-center h-12 rounded-md w-full mt-4 gap-3'
        // onClick={() => {}}
      >
        <Google />
        <span>Ou crie sua conta com o Google</span>
      </button>
    </form>
  )
}
