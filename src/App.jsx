import { Routes,Route, useParams, useLocation } from 'react-router-dom'

import Admin from './components/admin/admin'
import Login from './components/user/login/Login'
import Home from './components/user/Home'
import Navigation from './components/layouts/Navigation'
import BookTable from './components/admin/Book/BookTable'
import UserTable from './components/admin/User/UserTable'
import About from './components/about/About'
import UserDashboard from './components/user/dashboard/UserDashboard'
import RequestTable from './components/admin/Book/RequestTable'

function App() {
  const location = useLocation()
  const navPaths = ['/','/login','/about']
 const showNavBar = navPaths.includes(location.pathname)
  return (
    <>
<div>
{showNavBar&&<Navigation/>}
      <Routes>
        <Route path='/admin/dashboard' element={<Admin />}/>
        <Route path='/admin/requests' element={<RequestTable/>}/>
        <Route path='/admin/books' element={<BookTable />}/>
        <Route path='/admin/members' element={<UserTable />}/>
        <Route path='/login/:admin' element={<Login/>}/>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
</div>
    </>
  )
}

export default App
