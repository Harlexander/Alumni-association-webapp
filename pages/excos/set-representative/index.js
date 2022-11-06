import React from 'react'
import PageHeader from '../../../components/Header/PageHeader'
import IndexNavbar from '../../../components/Navbar/Navbar'
import Link from 'next/link'

const setReps = [
  {
    set : '1987',
    reps : [
      {
        pos : "chairman",
        name : "Dr Akinleye Akinlade"
      },
      {
        pos : "Vice Chairma, Nigeria",
        name : "Kolawole Banire"
      },
      {
        pos : "Vice Chairman, Europe/Asia",
        name : "Hakeem Kehinde"
      },
      {
        pos : "Vice Chairman, North/South America",
        name : "Prof Godwin Ogbeide"
      },
      {
        pos : "Secretary",
        name : "Patrick Iloba"
      },
      {
        pos : "Assistant Secretary",
        name : "Adewunmi Kuye"
      },
      {
        pos : "Treasurer",
        name : "Kelechukwu Nwankwo"
      },
      {
        pos : "Social Secretary",
        name : "Waheed Majolagbe"
      },
      {
        pos : "Publicity Secretary",
        name : "Victor Nwanze"
      }
    ]
  }
]
const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"Set Representatives"}/>
        
        <div className='p-20'>
        <div class="flex justify-center">
          {
            setReps.map(({set}, index) => (
              <div key={index} class="block p-6 rounded-lg shadow-lg bg-white max-w-sm text-center">
            <p class="text-gray-700 text-5xl font-primary mb-4">
              {set}
            </p>
            <Link href={`/excos/set-representative/${set}`}>
             <button type="button" class=" inline-block px-6 py-2.5 bg-pry text-white font-nunito transition duration-150 ease-in-out">View Representative</button>            
            </Link>
          </div>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default Index