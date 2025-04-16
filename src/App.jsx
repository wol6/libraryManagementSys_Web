import { Routes,Route } from 'react-router-dom'

import Admin from './components/admin/admin'
import Login from './components/user/login/Login'
import Home from './components/user/Home'
import Navigation from './components/layouts/Navigation'
import BookTable from './components/admin/Book/BookTable'
import UserTable from './components/admin/User/UserTable'

function App() {

  return (
    <>
<div>
<Navigation/>
      <Routes>
        <Route path='/admin/dashboard' element={<Admin />}/>
        <Route path='/admin/books' element={<BookTable />}/>
        <Route path='/admin/members' element={<UserTable />}/>
        <Route path='/login/:admin' element={<Login/>}/>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
</div>
    </>
  )
}

export default App
