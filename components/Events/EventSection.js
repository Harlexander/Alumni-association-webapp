import React from 'react'
import EventCarousel from '../Carousel/EventCarousel'

const EventSection = () => {
  return (
    <div className="flex flex-col space-y-28 items-center py-16 justify-center  md:py-28 bg-white">
        <p className="text-3xl md:text-5xl font-primary text-center px-10">National Upcoming Events</p>
        <EventCarousel/>
    </div>
  )
}

export default EventSection
