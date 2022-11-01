import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/Header/PageHeader'
import { useRouter } from 'next/router'
import Image from 'next/image'
import IndexNavbar from '../../components/Navbar/Navbar'

const gallery = [
        {
            category : "presentation-of-talking-drums",
            description : "The presentation of talking drums, Sekere and Agogo was done today 30th March 2022. Many thanks to Mr. Anthony Ashikodi",
            images : [
                {
                    image : "/../gallery-1.jpg",
                    caption : ""
                },
                {
                    image : "/../gallery-2.jpg",
                    caption : ""
                },
                {
                    image : "/../gallery-3.jpg",
                    caption : ""
                },
                {
                    image : "/../gallery-1.jpg",
                    caption : ""
                },
                {
                    image : "/../gallery-2.jpg",
                    caption : ""
                },
                {
                    image : "/../gallery-3.jpg",
                    caption : ""
                },
                {
                    image : "/../gallery-1.jpg",
                    caption : ""
                },
                {
                    image : "/../gallery-2.jpg",
                    caption : ""
                },
                {
                    image : "/../gallery-3.jpg",
                    caption : ""
                },
                {
                    image : "/../gallery-4.jpg",
                    caption : ""
                }
            ]
        }
    ]

const Index = () => {
    const [ state, setState ] = useState({images : []})
    const { query : { category } } =  useRouter();
    const categoryName = category && category.replace( /-/g, " " );

    useEffect(() => {
        const current = gallery.find((item) => item.category === category);
        setState(current);
        console.log(current)
    }, [category]);


  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={categoryName}/>
         
        <div className='py-20 px-28'>
            <div className='flex flex-wrap'>
                {
                state &&  state.images.map((image) => (
                        <img 
                        className='flex-1'
                        src={image.image}
                        />
                    ))
                }                
            </div>
        </div>
    </div>
  )
}

export default Index
