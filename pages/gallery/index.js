import React from 'react'
import { SolidButton } from '../../components/Button/Button'
import PageHeader from '../../components/Header/PageHeader'
import UnderConstruction from '../../components/Header/UnderConstruction'
import IndexNavbar from '../../components/Navbar/Navbar'

const gallery = [

  {
      category : "SJSS-1986-set-socials-and-networking-reception",
      description : "SJSS 1986 Set June 2022 Socials and Networking reception. Thanks to Mr. Oladipo Otuyelu for hosting",
      images : [
          {
              image : "sjss1986 (1).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (2).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (3).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (4).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (5).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (6).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (7).jpg",
              caption : ""
          }
      ]
  },
  {
      category : "1986-set-donation",
      description : "1986 Set donation of a projector and computer to St. Joseph Junior Secondary School (November 2021)",
      images : [
          {
              image : "1986donations (1).jpg",
              caption : ""
          },
          {
              image : "1986donations (2).jpg",
              caption : ""
          },
          {
              image : "1986donations (3).jpg",
              caption : ""
          },
          {
              image : "1986donations (4).jpg",
              caption : ""
          },
          {
              image : "1986donations (5).jpg",
              caption : ""
          },
          {
              image : "1986donations (6).jpg",
              caption : ""
          }
      ]
  },
  {
      category : "celebrating-the-2021-birthday-of-the-first-principal",
      description : "1986 Set celebrating the 2021 birthday of the first principal of St. Joseph Secondary School, Surulere Lagos",
      images : [
          {
              image : "principal (1).jpg",
              caption : ""
          },
          {
              image : "principal (2).jpg",
              caption : ""
          },
          {
              image : "principal (3).jpg",
              caption : ""
          },
          {
              image : "principal (4).jpg",
              caption : ""
          },
      ]
  },
  {
      category : "distribution-of-exercise-book-by-1995-set",
      description : "Distribution of exercise book to both Junior and Senior schools by 92 Set last month",
      images : [
          {
              image : "exercisebook.jpeg",
              caption : ""
          },
          {
              image : "exercisebook (2).jpeg",
              caption : ""
          }
      ]
  },
  {
      category : "chairs-for-library-and-generator-by-1995-set",
      description : "Chairs for the library and generator capable of pumping water for the school. Donated by SJSS class of 1995",
      images : [
          {
              image : "sjss1995.jpeg",
              caption : ""
          },
          {
              image : "sjss1995 (2).jpeg",
              caption : ""
          },
          {
              image : "sjss1995 (3).jpeg",
              caption : ""
          },
      ]
  },
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
]

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"Gallery And Photo News"}/>
         
        <div className='md:py-20 md:px-28 px-5 py-10'>
          <div className='grid md:grid-cols-3 gap-4'>
            {
            gallery.map(({category, description, images}, index) => (
              <CategoryCard 
              key={index}
              category={category}
              content={description}
              img={images[0].image}/>
            ))
          }
          </div>
          
        </div>
    </div>
  )
}

export default Index

const CategoryCard = ({category, content, img}) => {
  return(
    <div class="flex justify-center col-1">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img class="rounded-t-lg h-64 w-full" style={{objectFit : "cover"}} src={img} alt=""/>
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl capitalize font-medium mb-2 font-primary">{category.replace(/-/g, " ")}</h5>
          <p class="text-gray-700 text-base mb-4 font-nunito">
          {content}
          </p>
          <SolidButton
          title={"View Images"}
          href={`/gallery/${category}`}
          additionalClass="font-nunito"/>
        </div>
      </div>
    </div>
  )
}