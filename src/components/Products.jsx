import React from 'react'
import product1 from '../assets/product1.webp'
import product2 from '../assets/product2.webp'
import product3 from '../assets/product3.webp'
import product4 from '../assets/product4.webp'
import product5 from '../assets/product5.webp'

function Products() {
    return (
        <>
            <div className='lg:p-8'>
                <div className='p-0 mt-2 lg:p-8'>
                    {/* 1CI PRODUCT */}
                    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#006242] text-white overflow-hidden mb-8'>
                        <div>
                            <img src={product1} className='h-full w-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center text-center p-12'>
                            <h2 className='text-xl font-bold mb-4'>It's Starbucks summer</h2>
                            <p className='text-md font-semibold mb-4'>Enticing new flavors and returning favorites are here so you can savor the season to the very last drop. Experience new Tropical Butterfly Refreshers, reunite with Horchata and more.</p>
                            <button className='px-4 py-2 border rounded-full font-bold bg-white hover:bg-[#cce0d9] transition-all cursor-pointer text-[#006242] text-sm'>Explore the summer menu</button>
                        </div>
                    </div>
                    {/* 2CI PRODUCT */}
                    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#006242] text-white overflow-hidden mb-8'>
                        <div className='order-1 md:order-2'>
                            <img src={product2} className='h-full w-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center text-center p-12 order-2 md:order-1'>
                            <h2 className='text-xl font-bold mb-4'>Unicorn Cake Pop</h2>
                            <p className='text-md font-semibold mb-4'>Vanilla cake, white chocolate icing and colorful confetti make this bite-sized treat uniquely delicious.</p>
                            <button className='px-4 py-2 border rounded-full font-bold  hover:bg-[#004e35] transition-all cursor-pointer text-sm'>Start an order</button>
                        </div>
                    </div>
                    {/* 3CU PRODUCT */}
                    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#006242] text-white overflow-hidden mb-8'>
                        <div>
                            <img src={product3} className='h-full w-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center text-center p-12'>
                            <h2 className='text-xl font-bold mb-4'>At the airport? Order ahead.</h2>
                            <p className='text-md font-semibold mb-4'>Summer travel tip: Place your order when you get to the airport, then grab it on the way to your gate. It’s a tasty way to simplify travel days.</p>
                            <button className='px-4 py-2 border rounded-full font-bold  hover:bg-[#004e35] transition-all cursor-pointer text-sm'>Find an airport cafe</button>
                        </div>
                    </div>

                    {/* 4CU PRODUCT */}
                    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#f5f1eb] text-[#006242] overflow-hidden mb-8'>
                        <div className='order-1 md:order-2'>
                            <img src={product4} className='h-full w-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center text-center p-12 order-2 md:order-1'>
                            <h2 className='text-xl font-bold mb-4'>The cutest collectibles</h2>
                            <p className='text-md font-semibold mb-4'>Miffy® meets Starbucks in a collection that adds more joy to your everyday ritual with adorable drinkware, gift cards and the cutest plush. Available at our coffeehouses while supplies last.</p>
                            <button className='px-4 py-2 border rounded-full font-bold bg-[#006242] hover:bg-[#18825a] text-white transition-all cursor-pointer text-sm'>Learn more</button>
                        </div>
                    </div>

                    {/* 5CI PRODUCT */}
                    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#f5f1eb] text-[#f7f1ec] overflow-hidden mb-8'>
                        <div>
                            <img src={product5} className='h-full w-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center text-center p-12 bg-[#136043] '>
                            <h2 className='text-xl font-bold mb-4'>The cutest collectibles</h2>
                            <p className='text-md font-semibold mb-4'>Miffy® meets Starbucks in a collection that adds more joy to your everyday ritual with adorable drinkware, gift cards and the cutest plush. Available at our coffeehouses while supplies last.</p>
                            <button className='px-4 py-2 border rounded-full font-bold bg-[#f7f1ec] hover:bg-[#d0dfd9] text-[#136043] transition-all cursor-pointer text-sm'>Send an eGift</button>
                        </div>
                    </div>
                </div>

                <div className='text-center text-sm w-[50%] flex mx-auto mb-4'>
                    <p>*For every Starbucks eGift in our Military Appreciation category sold May 1–31, we’ll donate $5 to Blue Star Families to support those who serve and their families. Learn more at <span className='cursor-pointer underline'>bluestarfam.org.</span></p>
                </div>
            </div>
        </>
    )
}

export default Products