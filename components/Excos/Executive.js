import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { SolidButton } from '../Button/Button'
import ExecutiveContainer from './ExecutiveContainer'

const Executive = () => {
  return (
    <div className="relative bg-yellow-50 px-5 py-20">
            <div className="md:text-left text-center py-20 font-primary">
                <p className="flex-1 h-full text-center text-3xl leading-10 text-3xl md:text-5xl">National Executives</p>
            </div>

        <div className='w-full md:px-32 space-y-12'>
            <ExecutiveContainer
            name={'Adeshina Adegboyega'}
            img="president.png"
            bio={"Adeshina Adegboyega Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"President@sjssaa.com"}
            position="President"/>
            <hr/>
            <ExecutiveContainer
            name={'Lanre Are'}
            img="vp-nigeria.png"
            bio={"Lanre Are  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"vicepresident.niegria@sjssaa.com"}
            position="Vice President Nigeria"/>
            <hr/>
            <ExecutiveContainer
            name={'Jacob Babatunde Ajayi'}
            img="vp.png"
            bio={"Jocob Ajayi Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"vicepresident.europe@sjssaa.com"}
            position="Vice President Europe and Asia"/>
            
        </div>

        <div className='flex justify-center py-10'>
            <SolidButton
            href='/excos/national-executives'
            title={"Meet All Excos"}
            additionalClass="px-6 md:text-2xl shadow-xl text-black font-primary"/>
        </div>
    </div>
  )
}

export default Executive
