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
                    image : "/../gallery1.jpeg",
                    caption : ""
                },
                {
                    image : "/../placeholder.jpeg",
                    caption : ""
                },
                {
                    image : "/../placeholder.jpeg",
                    caption : ""
                },
                {
                    image : "/../placeholder.jpeg",
                    caption : ""
                },
                {
                    image : "/../placeholder.jpeg",
                    caption : ""
                },
                {
                    image : "/../placeholder.jpeg",
                    caption : ""
                },
                {
                    image : "/../placeholder.jpeg",
                    caption : ""
                },
                {
                    image : "/../placeholder.jpeg",
                    caption : ""
                },
                {
                    image : "/../placeholder.jpeg",
                    caption : ""
                },
                {
                    image : "/../placeholder.jpeg",
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
         
        <div className='md:py-20 md:px-28 px-5 py-8'>
            <div className='flex flex-wrap gap-1 '>
                {
                state &&  state.images.map((image, index) => (
                        <img
                        key={index}
                        className='max-h-64 flex-1'
                        style={{objectFit : "cover"}}
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
