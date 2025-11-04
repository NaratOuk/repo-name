import React from "react";
import Camera from "../components/cameraLogo.jsx"

const HomePage = () => {
    return (
        <div>
            <nav className="w-full h-16 flex justify-center bg-black shadow-md">
                <section className="w-[50%] h-full flex items-center ">
                    <ul className="flex h-full items-center justify-evenly w-1/1 ">
                        <li><a href="#" className="text-white uppercase">Home</a></li>
                        <li><a href="#" className="text-white uppercase">About</a></li>
                        <li><a href="#" className="text-white uppercase">Contact</a></li>
                    </ul>
                </section>
                <section className="w-[30%] h-full flex justify-center items-center">
                    <ul className="flex h-full items-center justify-evenly w-full gap-2 ">
                        <li className="w-[70%] "><input type="search" className="bg-white w-full h-full p-2 border border-gray-300 rounded" placeholder="Search..." /></li>
                        <li><button className="bg-amber-400 p-2 rounded w-20 uppercase">Search</button></li>
                        <li><button className="bg-amber-400 p-2 rounded w-20 flex justify-center gap-1 uppercase"><Camera />Scan</button></li>
                    </ul>
                </section>
                <section className="w-[20%] h-full flex justify-end ">
                    <ul className="flex h-full items-center justify-evenly w-full gap-10">
                        <li><a href="#" className="text-white uppercase">Login</a></li>
                        <li><a href="#" className="text-white uppercase">Register</a></li>
                    </ul>
                </section>
            </nav>
        </div>

    );
};

export default HomePage;