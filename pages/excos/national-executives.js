import React from 'react'
import ExecutiveContainer from '../../components/Excos/ExecutiveContainer'
import PageHeader from '../../components/Header/PageHeader'
import UnderConstruction from '../../components/Header/UnderConstruction'
import IndexNavbar from '../../components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"National Executives"}/>
         
         
         <div className='w-full md:px-32 px-5 space-y-12 py-20'>
            <ExecutiveContainer
            name={'Adeshina Adegboyega'}
            img="../president.png"
            bio={"Adeshina Adegboyega Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"President@sjssaa.com"}
            position="President"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Lanre Are'}
            img="../vp-nigeria.png"
            bio={"Lanre Are  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"vicepresident.niegria@sjssaa.com"}
            position="Vice President Nigeria"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Jacob Babatunde Ajayi'}
            img="../vp.png"
            bio={"Jocob Ajayi Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"vicepresident.europe@sjssaa.com"}
            position="Vice President Europe and Asia"/>
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Engr. Opeoluwa Orekoya'}
            img="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            bio={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"vicepresident.america@sjssaa.com"}
            position="Vice President America"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Israel Olusegun Alika'}
            img="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            bio={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"generalsecretary@sjssaa.com"}
            position="General Secretary"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Dr. Emmanuel Ehiwe'}
            img="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            bio={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"asst.sect.europe.asia@sjssaa.com"}
            position="Asst. Sect Europe & asia"/>
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Akeem Ajayi'}
            img="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            bio={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"financialsecretary@sjssaa.com"}
            position="Financial Secretary"/>
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Edward Dunkwu'}
            img="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            bio={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
            mail={"treasurer@sjssaa.com"}
            position="Treasurer"/>
            
        </div>

    </div>
  )
}

export default Index