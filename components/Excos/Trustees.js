import React from 'react'

const Trustees = () => {
  return (
    <div className='md:px-40 px-5 py-24 space-y-20 bg-yellow-400'> 
        <p className='font-primary text-4xl text-center'>Board Of Trustees</p>

        <div className='flex flex-col md:flex-row justify-between text-center'>
            <div>
                <img src='https://t3.ftcdn.net/jpg/03/43/55/84/360_F_343558406_tzgulGVRbnvmISA1MjLzxtYlY4nsrPKb.jpg' className='object-fit md:h-72 h-52 w-52 mx-auto md:w-72 rounded-full'/>
                <div className='text-center py-7'>
                    <p className='font-primary text-3xl'>Dr. Akinyele Akinlade</p>
                    <p className='text-xl font-nunito'>Chairman</p>
                </div>
            </div>
            <div>
                <img src='https://t3.ftcdn.net/jpg/03/43/55/84/360_F_343558406_tzgulGVRbnvmISA1MjLzxtYlY4nsrPKb.jpg' className='object-fit md:h-72 h-52 w-52 mx-auto md:w-72 rounded-full'/>
                <div className='text-center py-7'>
                    <p className='font-primary text-3xl '>Mr Tony Agbugba</p>
                    <p className='text-xl font-nunito'>Secretary</p>
                </div>
            </div>
            <div>
                <img src='https://t3.ftcdn.net/jpg/03/43/55/84/360_F_343558406_tzgulGVRbnvmISA1MjLzxtYlY4nsrPKb.jpg' className='object-fit md:h-72 h-52 w-52 mx-auto md:w-72 rounded-full'/>
                <div className='text-center py-7'>
                    <p className='font-primary text-3xl '>Mr John Agwara</p>
                    <p className='text-xl font-nunito'>Member</p>
                </div>
            </div>
        </div>

        <div className='flex  justify-center'>
            <button className='font-primary px-7 text-2xl py-3 bg-white text-black shadow-xl hover:bg-pry hover:text-white hover:border-2'>
                Meet All Trustees
            </button>
        </div>
        
    </div>
  )
}

export default Trustees
