import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CreateAccount, Error404, Home, Login, ResetPassword } from './pages'

const App: React.FC = () => {
  const { isLogged } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={isLogged ? <Home /> : <Navigate to='/login' />} />
      <Route path='/login' element={!isLogged ? <Login /> : <Navigate to='/' />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/create-account' element={<CreateAccount />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default App
