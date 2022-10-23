import React from 'react'
import Link from 'next/link'
const PageHeader = ({title}) => {
  return (
    <div className='bg-yellow-400 py-16 md:py-24 flex justify-center items-center'>
        <div>
            <p className='font-primary text-center text-3xl md:text-5xl'>{title}</p>
                {/* 
                <Link href="">
                    <a className='text-center'>Home {'>'} {title}</a>
                </Link>            
                */}
        </div>

    </div>
  )
}

export default PageHeader