import React from 'react'

function OrderType() {
    return (
        <>
            <div className='w-[521px] h-[358px] bg-card rounded-3xl p-3'>
                <h5 className='font-bold mb-3'>Select Order Type</h5>
                <div className='w-[473px] h-[134px] grid grid-cols-3 '>
                    <div className='w-[147px] h-[34px] border-1 rounded-2xl border-border  flex items-center text-center hover:bg-primary hover:cursor-pointer hover:text-muted pl-2 transition-all duration-200'>Health & Medicine</div>
                    <div className='w-[147px] h-[34px] border-1 rounded-2xl border-border flex items-center text-center hover:bg-primary hover:cursor-pointer hover:text-muted pl-2 transition-all duration-200'>Book & Stationary</div>
                    <div className='w-[147px] h-[34px] border-1 rounded-2xl border-border flex items-center text-center hover:bg-primary hover:cursor-pointer hover:text-muted pl-2 transition-all duration-200'>Services & Industry</div>
                    <div className='w-[147px] h-[34px] border-1 rounded-2xl border-border flex items-center ml-0 mr-0 text-center hover:bg-primary hover:cursor-pointer hover:text-muted pl-2 transition-all duration-200'>Electronics</div>
                    <div className='w-[147px] h-[34px] border-1 rounded-2xl border-border flex items-center text-center hover:bg-primary hover:cursor-pointer hover:text-muted pl-2 transition-all duration-200'>Home & Living</div>
                    <div className='w-[147px] h-[34px] border-1 rounded-2xl border-border flex items-center text-center hover:bg-primary hover:cursor-pointer hover:text-muted pl-2 transition-all duration-200'>Fashion & Beauty</div>
                    <div className='w-[147px] h-[34px] border-1 rounded-2xl border-border flex items-center text-center hover:bg-primary hover:cursor-pointer hover:text-muted pl-2 transition-all duration-200'>Mobile & Phone</div>
                    <div className='w-[147px] h-[34px] border-1 rounded-2xl border-border flex items-center text-center hover:bg-primary hover:cursor-pointer hover:text-muted pl-2 transition-all duration-200'>Accessories</div>
                </div>
                <div className='w-[521px] h-0.5 border-1 border-border'></div>
                <div className='flex  flex-col justify-between space-y-25'>
                    <p className='text-muted-foreground'>*You can choose multiple Order type</p>
                    <button className='w-[129px] h-[36px] bg-primary text-muted rounded-xl hover:cursor-pointer ml-50'>
                        Apply Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default OrderType
