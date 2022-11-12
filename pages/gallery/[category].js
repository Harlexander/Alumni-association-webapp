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
        },
        {
            category : "SJSS-1986-socials-and-networking-reception",
            description : "SJSS 1986 Set June 2022 Socials and Networking reception. Thanks to Mr. Oladipo Otuyelu for hosting",
            images : [
                {
                    image : "/../sjss1986 (1).jpg",
                    caption : ""
                },
                {
                    image : "/../sjss1986 (2).jpg",
                    caption : ""
                },
                {
                    image : "/../sjss1986 (3).jpg",
                    caption : ""
                },
                {
                    image : "/../sjss1986 (4).jpg",
                    caption : ""
                },
                {
                    image : "/../sjss1986 (5).jpg",
                    caption : ""
                },
                {
                    image : "/../sjss1986 (6).jpg",
                    caption : ""
                },
                {
                    image : "/../sjss1986 (7).jpg",
                    caption : ""
                }
            ]
        },
        {
            category : "1986-set-donation",
            description : "1986 Set donation of a projector and computer to St. Joseph Junior Secondary School (November 2021)",
            images : [
                {
                    image : "/../1986donations (1).jpg",
                    caption : ""
                },
                {
                    image : "/../1986donations (2).jpg",
                    caption : ""
                },
                {
                    image : "/../1986donations (3).jpg",
                    caption : ""
                },
                {
                    image : "/../1986donations (4).jpg",
                    caption : ""
                },
                {
                    image : "/../1986donations (5).jpg",
                    caption : ""
                },
                {
                    image : "/../1986donations (6).jpg",
                    caption : ""
                }
            ]
        },
        {
            category : "celebrating-the-2021-birthday-of-the-first-principal",
            description : "1986 Set celebrating the 2021 birthday of the first principal of St. Joseph Secondary School, Surulere Lagos",
            images : [
                {
                    image : "/../principal (1).jpg",
                    caption : ""
                },
                {
                    image : "/../principal (2).jpg",
                    caption : ""
                },
                {
                    image : "/../principal (3).jpg",
                    caption : ""
                },
                {
                    image : "/../principal (4).jpg",
                    caption : ""
                },
            ]
        },
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
            <div className='grid md:grid-cols-3 gap-1 '>
                {
                state &&  state.images.map((image, index) => (
                        <img
                        key={index}
                        className='col-1 w-full md:max-h-64'
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
