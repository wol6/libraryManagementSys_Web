import React from 'react'
import Home from '../Home'
import Headers from '../../layouts/Headers'
import Navigation from '../../layouts/Navigation'

function UserDashboard() {
    return (
        <>
            <div>
                {/* <Headers/> */}
                <Navigation/>
            <Home/>
            </div>
        </>
    )
}

export default UserDashboard