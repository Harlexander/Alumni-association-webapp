import React, { useEffect, useState } from 'react'
import PageHeader from '../../../components/Header/PageHeader'
import { useRouter } from 'next/router'
import IndexNavbar from '../../../components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const setReps = [
    {
      set : '1987',
      reps : [
        {
          pos : "chairman",
          name : "Dr Akinleye Akinlade"
        },
        {
          pos : "Vice Chairman, Nigeria",
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
    const [ state, setState ] = useState({reps : []})
    const { query : { set } } =  useRouter();

    useEffect(() => {
        const current = setReps.find((item) => item.set === set);
        setState(current);
        console.log(current)
    }, [set]);


  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={`${set} Set Representative`}/>
         
        <div className='md:py-20 md:px-28 px-5 py-8'>
            <div className='grid grid-cols-4 gap-3'>
                {
                    state.reps.map(({pos, name}, index) => (
                        <div key={index} className="col-1 rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img className="rounded-t-lg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=""/>
                            </a>
                            <div className="p-6">
                            <h5 className="font-primary text-xl mb-2">{name}</h5>
                            <p className="text-gray-700 capitalize font-nunito text-base mb-4"><FontAwesomeIcon icon={faUser} className="text-sm"/> {pos}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Index
