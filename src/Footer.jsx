import React from 'react'

function Footer() {
    return (
        <div className="flex items-center justify-center bg-[#1f3667] h-10 w-full cursor-pointer">
            <div className=' w-[80%]  flex justify-between items-center'>
                <div className='flex gap-2'>
                    <img src={'https://images.unsplash.com/photo-1560710990-9f5d4197b5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzbm93fGVufDB8fDB8fHww'} className='h-8 w-8 rounded-full'/>
                    <div className="text-[12px] text-white">
              LOS ANGELES
              <div>MOUNTAINS</div>
            </div>
                </div>
                <div className='text-[12px] text-blue-500'>Copyrights 2016</div>
            </div>
        </div>
    )
}

export default Footer