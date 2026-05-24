import React from 'react'

function Footer() {
    return (
        <>
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 p-12">

                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-semibold">About Us</h4>
                    <ul className="flex flex-col gap-2 text-[#6b6b6b]">
                        <li className="hover:text-black cursor-pointer">Our Company</li>
                        <li className="hover:text-black cursor-pointer">Our Coffee</li>
                        <li className="hover:text-black cursor-pointer">About Starbucks</li>
                        <li className="hover:text-black cursor-pointer">Starbucks Archive</li>
                        <li className="hover:text-black cursor-pointer">Investor Relations</li>
                        <li className="hover:text-black cursor-pointer">Customer Service</li>
                        <li className="hover:text-black cursor-pointer">Contact Us</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-semibold">Careers</h4>
                    <ul className="flex flex-col gap-2 text-[#6b6b6b]">
                        <li className="hover:text-black cursor-pointer">Culture and Values</li>
                        <li className="hover:text-black cursor-pointer">Belonging at Starbucks</li>
                        <li className="hover:text-black cursor-pointer">College Achievement Plan</li>
                        <li className="hover:text-black cursor-pointer">Alumni Community</li>
                        <li className="hover:text-black cursor-pointer">U.S. Careers</li>
                        <li className="hover:text-black cursor-pointer">International Careers</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-semibold">Social Impact</h4>
                    <ul className="flex flex-col gap-2 text-[#6b6b6b]">
                        <li className="hover:text-black cursor-pointer">Communities</li>
                        <li className="hover:text-black cursor-pointer">Starbucks Foundation</li>
                        <li className="hover:text-black cursor-pointer">Sustainability</li>
                        <li className="hover:text-black cursor-pointer">Environmental and Social Impact Reporting</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-semibold">For Business Partners</h4>
                    <ul className="flex flex-col gap-2 text-[#6b6b6b]">
                        <li className="hover:text-black cursor-pointer">Landlord Support Center</li>
                        <li className="hover:text-black cursor-pointer">Suppliers</li>
                        <li className="hover:text-black cursor-pointer">Corporate Gift Card Sales</li>
                        <li className="hover:text-black cursor-pointer">Office and Foodservice Coffee</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-semibold">Order and Pick Up</h4>
                    <ul className="flex flex-col gap-2 text-[#6b6b6b]">
                        <li className="hover:text-black cursor-pointer">Order on the App</li>
                        <li className="hover:text-black cursor-pointer">Order on the Web</li>
                        <li className="hover:text-black cursor-pointer">Delivery</li>
                        <li className="hover:text-black cursor-pointer">Order and Pick Up Options</li>
                        <li className="hover:text-black cursor-pointer">Explore and Find Coffee for Home</li>
                    </ul>
                </div>

            </div>
            <div className='flex justify-center gap-4 items-center py-6'>
                {/* mx-auto silindi */}
                <div className='w-12 h-12 rounded-full flex items-center justify-center bg-[#136043]'>
                    <i className="fa-brands fa-spotify text-2xl text-white"></i>
                </div>

                <div className='w-12 h-12 rounded-full flex items-center justify-center bg-[#0766ff]'>
                    <i class="fa-brands fa-facebook-f text-2xl text-white"></i>
                </div>

                <div className='w-12 h-12 rounded-full flex items-center justify-center bg-[#ff0033]'>
                    <i class="fa-brands fa-pinterest-p text-2xl text-white"></i>
                </div>

                <div className='w-12 h-12 rounded-full flex items-center justify-center bg-[#fe4e30]'>
                    <i class="fa-brands fa-instagram text-2xl text-white"></i>
                </div>

                <div className='w-12 h-12 rounded-full flex items-center justify-center bg-[#ff0033]'>
                    <i class="fa-brands fa-youtube text-2xl text-white"></i>
                </div>
            </div>
            <div className='text-center text-[#6b6b6b] mb-5'>
                <p>© 2026 Starbucks Coffee Company. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer