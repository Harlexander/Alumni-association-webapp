import React from 'react'
import PageHeader from '../components/Header/PageHeader'
import UnderConstruction from '../components/Header/UnderConstruction'
import IndexNavbar from '../components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"Contact"}/>
         
         
         <div className='w-full md:px-32 py-20'>
          <div className='grid p-10 grid-cols-2  bg-white'>
            <div className='col-1 font-nunito space-y-3'>
              <p className='text-3xl font- font-montserrat'>Contact Information</p>
              <p className='font-nunito font-bold'>Reach out to anyone on the International CHRIE staff with your questions. We are here to help.</p>

              <p className='py-4'>If you have any queries or questions about St. Joseph Secondary School Alumni Association, please email us or call the secretary at +234 810 3562 7282. We would get back to you as soon as possible. Issues are only addressed to on weekdays only.</p>

             <div>
              <p className='text-lg font-bold'>Israel Alika-John</p>
              <p>National Secretary</p>
              <a href='mailto:' className='text-blue-700 underline'>secretary@sjssaa.com</a>
             </div>
             
             <div>
              <p className='text-lg font-bold'>Israel Alika-John</p>
              <p>Financial Secretary</p>
              <a href='mailto:' className='text-blue-700 underline'>financialsecretary@sjssaa.com</a>
             </div>
            
             <div>
              <p className='text-lg font-bold'>Israel Alika-John</p>
              <p>Financial Secretary</p>
              <a href='mailto:' className='text-blue-700 underline'>financialsecretary@sjssaa.com</a>
             </div>
            </div>
            <div className='col-1'>
              <img src='117.jpg' 
              className='w-full'/>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Index