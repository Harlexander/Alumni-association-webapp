import React from 'react'
import { SolidButton } from '../Button/Button'

const Executive = () => {
  return (
    <div className="relative bg-yellow-50 py-20">
            <div className="text-center py-10 font-primary">
                <p className="flex-1 h-full text-3xl leading-10 text-5xl">Meet all excos</p>
            </div>
        <div className='w-full px-32 space-y-12'>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-1'>
                    <img src='home.jpg' className='h-60 w-60 rounded-full'/>
                </div>
                <div className='col-span-4 flex-col flex space-y-2 justify-center'>
                    <p className='font-nunito font-bold text-xl'>
                        President
                    </p>
                    <p>Adeshina Adegboyega  is a Geodetic Engineer by training and is currently a lecturer in Land Surveying/Geomatics at the Accra Technical University.
                    He is very passionate about the intellectual and moral development of students and spends a lot of time outside the classroom mentoring students on how to develop their communication and project management skills.
                    His hobbies include watching soccer and documentaries on world history. 
                    </p>
                    <a href='#' className='text-blue-500 underline'>More...</a>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-1'>
                    <img src='home.jpg' className='h-60 w-60 rounded-full'/>
                </div>
                <div className='col-span-4 flex-col flex space-y-2 justify-center'>
                    <p className='font-nunito font-bold text-xl'>
                        President
                    </p>
                    <p>Adeshina Adegboyega  is a Geodetic Engineer by training and is currently a lecturer in Land Surveying/Geomatics at the Accra Technical University.
                    He is very passionate about the intellectual and moral development of students and spends a lot of time outside the classroom mentoring students on how to develop their communication and project management skills.
                    His hobbies include watching soccer and documentaries on world history. 
                    </p>
                    <a href='#' className='text-blue-500 underline'>More...</a>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-1'>
                    <img src='home.jpg' className='h-60 w-60 rounded-full'/>
                </div>
                <div className='col-span-4 flex-col flex space-y-2 justify-center'>
                    <p className='font-nunito font-bold text-xl'>
                        President
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
            additionalClass="px-6 py-4 text-2xl text-black font-primary"/>
        </div>
    </div>
  )
}

export default Executive
