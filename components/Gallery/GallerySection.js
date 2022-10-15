import React from 'react'
import { SolidButton } from '../Button/Button'
import ImageContainer from './ImageContainer'

const GallerySection = () => {
  return (
    <div className="flex flex-col space-y-14 items-center justify-center  pt-20 pb-24 bg-white">
        <p className="text-4xl font-primary">Gallery and Photo News</p>

        <div className='grid grid-cols-3 gap-2 px-14'>
            <div className='col-1 pt-20'>
                <ImageContainer
                src={"home.jpg"}
                caption={"2018 Reunion"}
                />
            </div>
            <div className='col-1'>
                <ImageContainer
                src={"home.jpg"}
                caption={"2018 Reunion"}
                />
                <ImageContainer
                src={"home.jpg"}
                caption={"2018 Reunion"}
                />
            </div>
            <div className='col-1 pt-28'>
                <ImageContainer
                src={"home.jpg"}
                caption={"2018 Reunion"}
                />
            </div>
        </div>

        <SolidButton
        title={"View All"}
        additionalClass="font-primary text-black text-3xl px-10"/>
    </div>
  )
}

export default GallerySection
