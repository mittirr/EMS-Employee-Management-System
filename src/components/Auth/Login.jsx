import React, {useState} from 'react';

const Login = ({handleLogin}) => {

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = (event) => {
        const {type, value} = event.target;

        setLoginInfo((prevLoginInfo) => {
            return{
                ...prevLoginInfo,
                [type]: value
            } 
        })
    }


    const handleSubmit = (event) => {
    
        event.preventDefault();
        handleLogin(loginInfo.email, loginInfo.password)
        setLoginInfo({
            email: "",
            password: ""
        })
    }
    return(
        <div className= 'flex h-screen w-screen items-center justify-center '>
            <div className= 'border-2 border-emerald-600 p-24 rounded-xl'>
                <form onSubmit={(event) => {handleSubmit(event)}} className= 'flex flex-col justify-center'>
                    <input required className='border-2 border-emerald-600 outline-none bg-transparent rounded-full text-xl px-4 py-2 ' onChange= {handleChange} type="email" placeholder='Enter your email' value={loginInfo.email}/>
                    <input required className='border-2 border-emerald-600 outline-none bg-transparent rounded-full text-xl px-4 py-2 mt-3 mb-6' onChange={handleChange} type="password" placeholder='Enter password' value={loginInfo.password}/>
                    <button className='border-2 border-none bg-emerald-600 outline-none rounded-full text-xl font-medium px-4 py-2 '>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;