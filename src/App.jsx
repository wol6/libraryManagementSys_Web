import { Routes,Route } from 'react-router-dom'

import Admin from './components/admin/admin'
import Login from './components/user/login/Login'
import Home from './components/user/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/login/:admin' element={<Login/>}/>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
