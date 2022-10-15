import { Carousel } from 'flowbite-react'
import React from 'react'
import { OutlineButton, SolidButton } from '../Button/Button'

const HeroCarousel = () => {
  return (
    <div className="h-[40em] md:h-screen">
    <Carousel
    indicators={false}>
        <div style={{background : "url(/home.jpg)"}} className="flex flex-col h-full space-y-10 px-5 md:text-left text-center justify-center md:px-24 bg-gray-400 dark:bg-gray-700 dark:text-white">
            <p className='font-primary md:text-8xl text-4xl text-pry'>St. Joseph Secondary School Alumni Association</p>
            <p className='md:text-2xl font-nunito text-white lg:w-3/5'>
            The Alumni of  St. Joseph Secondary School  Surulere Lagos official website. We will be sharing updates and build network for members on this platform
            </p>

            <div className='flex gap-5 z-20s'>
                <SolidButton
                title={"New Member Registration"}
                additionalClass="md:py-3 md:text-lg"/>
                <OutlineButton
                title={"Search Member"}
                additionalClass="md:py-3 md:text-lg"/>
            </div>
        </div>
        <div style={{background : "url(/home.jpg)"}} className="flex flex-col h-full space-y-10 px-5 md:text-left text-center justify-center md:px-24 bg-gray-400 dark:bg-gray-700 dark:text-white">
            <p className='font-primary md:text-8xl text-4xl text-pry'>St. Joseph Secondary School Alumni Association</p>
            <p className='md:text-2xl font-nunito text-white lg:w-3/5'>
            The Alumni of  St. Joseph Secondary School  Surulere Lagos official website. We will be sharing updates and build network for members on this platform
            </p>

            <div className='flex gap-5 z-20s'>
                <SolidButton
                title={"New Member Registration"}
                additionalClass="md:py-3 md:text-lg"/>
                <OutlineButton
                title={"Search Member"}
                additionalClass="md:py-3 md:text-lg"/>
            </div>
        </div>
     </Carousel>
</div>
  )
}

export default HeroCarousel
