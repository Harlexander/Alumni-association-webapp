import Carousel from 'better-react-carousel'
import React from 'react'
import { OutlineButton, SolidButton } from '../Button/Button'

const EventCarousel = () => {
  return (
    <div className="w-full md:px-32">
    <Carousel loop autoPlay={1000}>
        <Carousel.Item>
        <div
        className='md:grid grid-cols-2 gap-10 h- px-4'>
            <div className="col-1 md:h-full md:w-full relative">
                    <div className='bg-yellow-200 mt-3 md:mt-8 hidden md:block -z-10 w-11/12 h-full absolute'/>
                    <div className='bg-transparent h-full md:ml-8  md:pb-8'>
                        <img className="" src="event1.png"/>  
                    </div>
                
            </div>

            <div className='col-1 space-y-5 pt-10 md:py-10 md:px-10'>
                <p className='font-primary text-4xl'>
                    Annual General Conference
                </p>

                <p className='font-nunito'>
                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                </p>

                <div className="flex justify-between">
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>50</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Days</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>08</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Hours</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>55</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Mins</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>10</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Secs</p>
                    </div>
                </div>

                <p className='font-primary text-2xl' >18th December, 2022</p>

                <div className='flex gap-3'>
                    <SolidButton
                    title={"Register"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                    <OutlineButton
                    title={"Join Event"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                </div>
            </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div
        className='md:grid grid-cols-2 gap-10 h- px-4'>
            <div className="col-1 md:h-full md:w-full relative">
                    <div className='bg-yellow-200 mt-3 md:mt-8 hidden md:block -z-10 w-11/12 h-full absolute'/>
                    <div className='bg-transparent h-full md:ml-8  md:pb-8'>
                        <img src="event1.png"/>  
                    </div>
                
            </div>

            <div className='col-1 space-y-5 pt-10 md:py-10 md:px-10'>
                <p className='font-primary text-4xl'>
                    Annual General Conference
                </p>

                <p className='font-nunito'>
                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                </p>

                <div className="flex justify-between">
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>50</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Days</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>08</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Hours</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>55</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Mins</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>10</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Secs</p>
                    </div>
                </div>

                <p className='font-primary text-2xl' >18th December, 2022</p>

                <div className='flex gap-3'>
                    <SolidButton
                    title={"Register"}
                    additionalClass={"font-primary shadow-xl w-full py-2"}
                    />
                    <OutlineButton
                    title={"Join Event"}
                    additionalClass={"font-primary shadow-xl w-full py-2"}
                    />
                </div>
            </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div
        className='md:grid grid-cols-2 gap-10 h- px-4'>
            <div className="col-1 md:h-full md:w-full relative">
                    <div className='bg-yellow-200 mt-3 md:mt-8 hidden md:block -z-10 w-11/12 h-full absolute'/>
                    <div className='bg-transparent h-full md:ml-8  md:pb-8'>
                        <img src="event1.png"/>  
                    </div>
                
            </div>

            <div className='col-1 space-y-5 pt-10 md:py-10 md:px-10'>
                <p className='font-primary text-4xl'>
                    Annual General Conference
                </p>

                <p className='font-nunito'>
                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                </p>

                <div className="flex justify-between">
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>50</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Days</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>08</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Hours</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>55</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Mins</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>10</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Secs</p>
                    </div>
                </div>

                <p className='font-primary text-2xl' >18th December, 2022</p>

                <div className='flex gap-3'>
                    <SolidButton
                    title={"Register"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                    <OutlineButton
                    title={"Join Event"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                </div>
            </div>
        </div>
        </Carousel.Item>
     </Carousel>
</div>
  )
}

export default EventCarousel
