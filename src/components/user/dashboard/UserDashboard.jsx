import React, { useEffect, useState } from 'react'
import Home from '../Home'
import Headers from '../../layouts/Headers'
import Navigation from '../../layouts/Navigation'

function UserDashboard() {
    const [isUser,setIsUser] = useState(false)
    useEffect(()=>{
        setIsUser(localStorage.getItem('isUser'))
    },[])
    return (
        <>
            <div>
                {/* <Headers/> */}
                <Navigation isUser={isUser}/>
            <Home/>
            </div>
        </>
    )
}

export default UserDashboard