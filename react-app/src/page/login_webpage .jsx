import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home");
    }



    return (

        <div className="w-100 h-150 border-2 rounded-xl p-4 flex flex-col gap-4 justify-center items-center m-auto mt-45 bg-white" >
            <h1 className="text-4xl font-bold p-3 m-2">Welcome back</h1>
            <input className="border rounded p-2 w-full" type="email" placeholder="Email Address" />
            <input className="border rounded p-2 w-full" type="password" placeholder="Password" />
            <div className="w-full flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                    <input className="border rounded p-1" type="checkbox" id="remember-me" />
                    <label className="text-sm" >Remember me</label>
                </div>
                <Link to="/forgot" className="text-sm text-blue-500 hover:underline">Forgot Password</Link>
            </div>
            <button className="border-2 bg-blue-500 rounded-lg p-2 border-transparent text-white uppercase w-full hover:bg-blue-600 font-semibold" onClick={handleLogin} btn-type="login">Login</button>
            <div>
                <label className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline" >Sign up</Link></label>
            </div>
        </div>
    )

};


export default Login;