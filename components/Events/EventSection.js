import React from 'react'
import EventCarousel from '../Carousel/EventCarousel'

const EventSection = () => {
  return (
    <div className="flex flex-col space-y-28 items-center justify-center  py-28 bg-white">
        <p className="text-5xl font-primary">National Upcoming Events</p>

        <EventCarousel/>
    </div>
  )
}

export default EventSection
