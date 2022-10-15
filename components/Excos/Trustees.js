import React from 'react'

const Trustees = () => {
  return (
    <div className='px-40 py-24 space-y-20 bg-yellow-400'> 
        <p className='font-primary text-4xl text-center'>Board Of Trustees</p>

        <div className='flex justify-between '>
            <div>
                <img src='home.jpg' className='h-80 w-80 rounded-full'/>
                <div className='text-center py-7'>
                    <p className='font-primary text-3xl '>Name of trustee</p>
                    <p className='text-xl font-nunito'>position</p>
                </div>
            </div>
            <div>
                <img src='home.jpg' className='h-80 w-80 rounded-full'/>
                <div className='text-center py-7'>
                    <p className='font-primary text-3xl '>Name of trustee</p>
                    <p className='text-xl font-nunito'>position</p>
                </div>
            </div>
            <div>
                <img src='home.jpg' className='h-80 w-80 rounded-full'/>
                <div className='text-center py-7'>
                    <p className='font-primary text-3xl '>Name of trustee</p>
                    <p className='text-xl font-nunito'>position</p>
                </div>
            </div>
        </div>

        <div className='flex  justify-center'>
            <button className='font-primary px-7 text-2xl py-3 bg-white text-black shadow-xl hover:bg-pry hover:text-white hover:border-2'>
                View All Executive 
            </button>
        </div>
        
    </div>
  )
}

export default Trustees
