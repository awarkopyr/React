import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button className="bg-transparent hover:bg-blue-500
          text-blue-700 font-semibold hover:text-white py-2 px-4 border
          border-blue-500 hover:border-transparent rounded"
        >
            Logout
        </button>
    )
}

export default LogoutBtn