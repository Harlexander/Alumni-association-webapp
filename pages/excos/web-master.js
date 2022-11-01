import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PageHeader from '../../components/Header/PageHeader'
import UnderConstruction from '../../components/Header/UnderConstruction'
import IndexNavbar from '../../components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader title={"Web Master"}/>

        <div className='md:px-28 p-5 md:py-20'>
          <div className='md:grid grid-cols-3 gap-10'>
            <div className='col-1'>
              <img src='../webmaster.jpeg' className='rounded-full '/>
            </div>
            <div className='col-span-2 flex-col flex justify-center'>
              <p className='text-2xl font-montserrat'>Dr. Godwin-Charles Ogbeide</p>
              <div className='font-nunito flex gap-3 items-center py-2'>
                <FontAwesomeIcon icon={faEnvelope} className="text-sm"/> 
                <a href='mailto:webmaster.sjssaa.com' className='underline'>webmaster@sjssaa.com</a>
              </div>
              <p className='font-nunito py-10'>The web master is in-charge of the maintenance and development of this wesite, if any need, complain, suggestions arises kindly contact him via email and he would attend to you as soon as possible.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Index