import React from 'react'
import { SolidButton } from '../Button/Button'

const Executive = () => {
  return (
    <div className="relative bg-yellow-50 px-5 py-20">
            <div className="md:text-left text-center py-10 font-primary">
                <p className="flex-1 h-full text-center text-3xl leading-10 text-3xl md:text-5xl">National Executives</p>
            </div>

        <div className='w-full md:px-32 space-y-12'>
            <div className='md:grid grid-cols-12 gap-4 space-y-5 md:space-y-0'>
                <div className='col-span-3'>
                    <img src='president.png' className='h-60 w-60 mx-auto rounded-lg md:rounded-full'/>
                </div>
                <div className='md:text-left text-center col-span-9 flex-col flex space-y-2 justify-center'>
                    <p className='font-montserrat md:font-bold text-2xl'>
                        President
                    </p>
                    <p>Adeshina Adegboyega  is a Geodetic Engineer by training and is currently a lecturer in Land Surveying/Geomatics at the Accra Technical University.
                    He is very passionate about the intellectual and moral development of students and spends a lot of time outside the classroom mentoring students on how to develop their communication and project management skills.
                    His hobbies include watching soccer and documentaries on world history. 
                    </p>
                    <a href='#' className='text-blue-500 underline'>More...</a>
                </div>
            </div>
            <div className='md:grid grid-cols-12 gap-4 space-y-5 md:space-y-0'>
                <div className='col-span-3'>
                    <img src='vp-nigeria.png' className='h-60 w-60 mx-auto rounded-lg md:rounded-full'/>
                </div>
                <div className='md:text-left text-center col-span-9 flex-col flex space-y-2 justify-center'>
                    <p className='font-montserrat md:font-bold text-2xl'>
                        Vice President Nigeria
                    </p>
                    <p>Adeshina Adegboyega  is a Geodetic Engineer by training and is currently a lecturer in Land Surveying/Geomatics at the Accra Technical University.
                    He is very passionate about the intellectual and moral development of students and spends a lot of time outside the classroom mentoring students on how to develop their communication and project management skills.
                    His hobbies include watching soccer and documentaries on world history. 
                    </p>
                    <a href='#' className='text-blue-500 underline'>More...</a>
                </div>
            </div>
            <div className='md:grid grid-cols-12 gap-4 space-y-5 md:space-y-0'>
                <div className='col-span-3'>
                    <img src='vp.png' className='h-60 w-60 mx-auto rounded-lg md:rounded-full'/>
                </div>
                <div className='md:text-left text-center col-span-9 flex-col flex space-y-2 justify-center'>
                    <p className='font-montserrat md:font-bold text-2xl'>
                        Vice President Europe
                    </p>
                    <p>Adeshina Adegboyega  is a Geodetic Engineer by training and is currently a lecturer in Land Surveying/Geomatics at the Accra Technical University.
                    He is very passionate about the intellectual and moral development of students and spends a lot of time outside the classroom mentoring students on how to develop their communication and project management skills.
                    His hobbies include watching soccer and documentaries on world history. 
                    </p>
                    <a href='#' className='text-blue-500 underline'>More...</a>
                </div>
            </div>
            
        </div>

        <div className='flex justify-center py-5'>
            <SolidButton
            title={"Meet All Excos"}
            additionalClass="px-6 md:py-4 md:text-2xl shadow-xl text-black font-primary"/>
        </div>
    </div>
  )
}

export default Executive
