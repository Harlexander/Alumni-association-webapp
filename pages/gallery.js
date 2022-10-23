import React from 'react'
import PageHeader from '../components/Header/PageHeader'
import UnderConstruction from '../components/Header/UnderConstruction'
import IndexNavbar from '../components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"Gallery And Photo News"}/>
         <UnderConstruction/>
    </div>
  )
}

export default Index