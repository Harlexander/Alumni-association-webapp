import React from 'react'
import { SolidButton } from '../../components/Button/Button'
import PageHeader from '../../components/Header/PageHeader'
import UnderConstruction from '../../components/Header/UnderConstruction'
import IndexNavbar from '../../components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"Gallery And Photo News"}/>
         
        <div className='md:py-20 md:px-28 px-5 py-10'>
          <CategoryCard/>
        </div>
    </div>
  )
}

export default Index

const CategoryCard = () => {
  return(
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img class="rounded-t-lg" src="gallery1.jpeg" alt=""/>
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2 font-primary">Presentation of Talking Drums</h5>
          <p class="text-gray-700 text-base mb-4 font-nunito">
          The presentation of talking drums,  Sekere and Agogo was done on the 30th March 2022.  Many thanks to Mr. Anthony Ashikodi
          </p>
          <SolidButton
          title={"View Images"}
          href={"/gallery/presentation-of-talking-drums"}
          additionalClass="font-nunito"/>
        </div>
      </div>
    </div>
  )
}