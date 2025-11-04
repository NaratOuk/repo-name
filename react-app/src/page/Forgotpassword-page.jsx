import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export const ForgotPasswordPage = () => {



    const navigate = useNavigate();

    const handleForgotPassword = () => {
        navigate('/forgot1');
    }


    return (
        <div className="w-100 h-100 border-2 rounded-xl p-4 flex flex-col gap-4 justify-center items-center m-auto mt-70 bg-white" >
            <div className='flex flex-col justify-center items-center w-full p-1'>
                <h1 className="text-4xl font-bold p-2 m-2 ">Forgot Password</h1>
                <p className='text-gray-400'>Remember your password? <Link to="/login" className="text-blue-500 hover:underline">Login Here</Link></p>
            </div>
            <div className='flex flex-col w-full p-2 gap-2'>
                <label >Enter your email address</label>
                <input className="border rounded p-2 w-full" type="email" placeholder="Example123@gmail.com" />
            </div>
            <button className="border-2 bg-blue-500 rounded-lg p-2 border-transparent text-white uppercase w-full hover:bg-blue-600 font-semibold" onClick={handleForgotPassword} btn-type="reset">Reset Password</button>
        </div>
    )
}


export const ForgotPasswordPage1 = () => {
    const navigate = useNavigate();

    const backtologin = () => {
        navigate('/login');
    }
    return (
        <div className="w-100 h-120 border-2 rounded-xl p-4 flex flex-col gap-4 justify-center items-center m-auto mt-60 bg-white" >
            <div className='flex flex-col justify-center items-center w-full p-1'>
                <h1 className="text-4xl font-bold p-2 m-2 ">New Password</h1>
                <p className='bg-green-200 p-2 rounded flex justify-center items-center text-center'>Please create a new password that<br />
                    you don't use on any other site.
                </p>
            </div>
            <div className='flex flex-col w-full p-2 gap-2'>
                <label >Create new password</label>
                <input className="border rounded p-2 w-full" type="password" placeholder="" />
                <label >Confirm your password</label>
                <input className="border rounded p-2 w-full" type="password" placeholder="" />
            </div>
            <button className="border-2 bg-blue-500 rounded-lg p-2 border-transparent text-white uppercase w-full hover:bg-blue-600 font-semibold" onClick={backtologin} btn-type="reset">Change</button>
        </div>
    )
}





