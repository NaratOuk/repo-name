import React from 'react'
import { Link } from 'react-router-dom';
import {FacebookLogo, GoogleLogo, AppleLogo} from '../components/SignupLogo.jsx'

const Signup = () => {
    return (
        <div className="w-100 h-150 border-2 rounded-xl p-4 flex flex-col gap-4 justify-center items-center m-auto mt-45 bg-white" >
            <div className='flex flex-col w-full p-2'>
                <h1 className="text-4xl font-bold p-1">Sign up</h1>
                <p className='p-1 text-gray-400'>Fill this form to create an account</p>
            </div>
            <div className='justify-between w-full flex gap-2'>
                <input className='border rounded p-2 w-1/2' type="text" placeholder="First Name" />
                <input className='border rounded p-2 w-1/2' type="text" placeholder="Last Name" />
            </div>
            <input className="border rounded p-2 w-full" type="email" placeholder="Email Address" />
            <input className="border rounded p-2 w-full" type="password" placeholder="Password" />
            <input className="border rounded p-2 w-full" type="password" placeholder="Confirm Password" />
            <div className="w-full flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                    <input className="border rounded p-1" type="checkbox" id="remember-me" />
                    <label className="text-base text-gray-400" >I accept the <a href="#" className="text-blue-500 hover:underline">terms</a> and <a href="#" className="text-blue-500 hover:underline">conditions</a></label>
                </div>
            </div>
            <button className="border-2 bg-blue-500 rounded-lg p-2 border-transparent text-white uppercase w-full hover:bg-blue-600" btn-type="signup">Sign up</button>
            <div>
                <label className="text-sm">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link></label>
            </div>
            <div>
                <p className='text-sm font-semibold'>Or continue with</p>
            </div>
            <div className='flex w-full gap-2 justify-center'>
                <button className='border-2 rounded-lg p-2 w-1/2 flex justify-center gap-1 bg-blue-600 text-white font-semibold' btn-type="facebook"><FacebookLogo />Facebook</button>
                <button className='border-2 rounded-lg p-2 w-1/2 flex justify-center gap-1 bg-red-600 text-white font-semibold' btn-type="google"><GoogleLogo />Google</button>
                <button className='border-2 rounded-lg p-2 w-1/2 flex justify-center gap-1 bg-black text-white font-semibold' btn-type="apple"><AppleLogo />Apple</button>
            </div>
        </div>
    )
}
export default Signup;