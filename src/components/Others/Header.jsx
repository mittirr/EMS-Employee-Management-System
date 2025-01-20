import React from 'react';
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

    const handleLogout = () =>{
        localStorage.setItem("loggedInUser",'')
        props.changeUser('')
    }
    return <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> {props.data == "Admin"? props.data : props.data.name.split(' ')[0]} 👋</span></h1>
        <button className='bg-red-500 text-white text-lg px-5 py-2 rounded-md font-medium' onClick={handleLogout}>Log Out</button>
    </div>
}

export default Header;