import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CreateAccount, Error404, Home, Login, ResetPassword } from './pages'

const App: React.FC = () => {
  const isAuthenticated = false // Substitua por sua lógica de autenticação

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={isAuthenticated ? <Home /> : <Navigate to='/login' />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
