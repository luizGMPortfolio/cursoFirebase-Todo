//Css
import './App.css'

//Hooks
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';


//Pages
import Login from './Pages/Auth/Login.jsx'
import Cadastro from './Pages/Auth/Cadastro.jsx';
import Home from './Pages/Home/Home.jsx';

//components
import Logout from './components/Logout.jsx';

//context
import { AuthProvider } from './context/AuthContext.jsx'
import { useAuthentication } from './hooks/useAuthentication.jsx';


function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className='app'>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Logout />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to='/Login' />}
            />
            <Route
              path="/cadastro"
              element={!user ? <Cadastro /> : <Navigate to='/'/>}
            />
            <Route
              path="/Login"
              element={!user ? <Login /> : <Navigate to='/' />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
