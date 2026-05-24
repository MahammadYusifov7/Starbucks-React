import React from 'react'
import logo from "../assets/logo.png"

function navbar() {
    return (
        <>
            <nav className='flex items-center justify-between bg-white px-14 py-5 shadow-md'>
                <div className='flex items-center gap-8 text-sm font-bold uppercase tracking-widest'>
                    <div className='w-12 h-12'>
                        <img src={logo} className='w-full h-full' />
                    </div>
                    <ul className='flex gap-5 hidden md:flex'>
                        <li className='hover:text-[#00754a] transition-all duration-150'><a href="">Menu</a></li>
                        <li className='hover:text-[#00754a] transition-all duration-150'><a href="">Rewards</a></li>
                        <li className='hover:text-[#00754a] transition-all duration-150'><a href="">Gift cards</a></li>
                    </ul>
                </div>

                <div className='hidden md:flex items-center gap-5 text-sm'>
                    <div className='flex items-center gap-2 cursor-pointer hover:text-[#00754a] transition-all'>
                        <i class="fa-solid fa-location-dot"></i>
                        <span className='font-[600]'>Find a store</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='px-4 py-2 border rounded-full font-bold hover:bg-[#e5e5e5] transition-all cursor-pointer text-sm'>Sign in</button>
                        <button className='px-4 py-2 border rounded-full text-white font-bold bg-black hover:bg-[#4c4c4c] transition-all cursor-pointer text-sm'>Join now</button>
                    </div>
                </div>
                <div className='flex md:hidden cursor-pointer'>
                    <i class="fa-solid fa-bars text-2xl"></i>
                </div>
            </nav>
        </>
    )
}

export default navbar