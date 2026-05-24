import React from 'react'

function HeroBar() {
    return (
        <>
            <div className='md:pl-16 md:pr-16'>
                <div className="bg-[#32462f] text-white py-8 px-6">
                    <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-6">

                        <h2 className="text-md md:text-xl font-bold tracking-tight text-center md:text-left">
                            It's a great day for coffee
                        </h2>

                        <button className="border border-white border-2 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-[#00754a] cursor-pointer  duration-300">
                            Start an order
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBar