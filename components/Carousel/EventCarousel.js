import { Carousel } from 'flowbite-react'
import React from 'react'
import { OutlineButton, SolidButton } from '../Button/Button'

const EventCarousel = () => {
  return (
    <div className="w-full h-[500px] px-32">
    <Carousel
    indicators={false}>
        <div
        className='grid grid-cols-2 gap-10 h-full'>
            <div className="col-1 h-full w-full relative">
                    <div className='bg-yellow-200 mt-10 -z-10 w-11/12 h-full absolute'/>
                    <div className='bg-transparent h-full ml-10  pb-10'>
                        <img className="h-full" src="home.jpg"/>  
                    </div>
                
            </div>

            <div className='col-1 space-y-5 py-10 px-10'>
                <p className='font-primary text-4xl'>
                    Annual General Conference
                </p>

                <p className='font-nunito'>
                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                </p>

                <div className="flex justify-between">
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>50</p>
                        </div>
                        <p className='font-primary text-3xl'>Days</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>08</p>
                        </div>
                        <p className='font-primary text-3xl'>Hours</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>55</p>
                        </div>
                        <p className='font-primary text-3xl'>Mins</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>10</p>
                        </div>
                        <p className='font-primary text-3xl'>Secs</p>
                    </div>
                </div>

                <p className='font-primary text-2xl' >18th December, 2022</p>

                <div className='flex gap-3'>
                    <SolidButton
                    title={"Register To Join"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                    <OutlineButton
                    title={"Join Event"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                </div>
            </div>
        </div>
        <div
        className='grid grid-cols-2 gap-10 h-full'>
            <div className="col-1 h-full w-full relative">
                    <div className='bg-yellow-200 mt-10 -z-10 w-11/12 h-full absolute'/>
                    <div className='bg-transparent h-full ml-10  pb-10'>
                        <img className="h-full" src="home.jpg"/>  
                    </div>
                
            </div>

            <div className='col-1 space-y-5 py-10 px-10'>
                <p className='font-primary text-4xl'>
                    Annual General Conference
                </p>

                <p className='font-nunito'>
                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                </p>

                <div className="flex justify-between">
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>50</p>
                        </div>
                        <p className='font-primary text-3xl'>Days</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>08</p>
                        </div>
                        <p className='font-primary text-3xl'>Hours</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>55</p>
                        </div>
                        <p className='font-primary text-3xl'>Mins</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>10</p>
                        </div>
                        <p className='font-primary text-3xl'>Secs</p>
                    </div>
                </div>

                <p className='font-primary text-2xl' >18th December, 2022</p>

                <div className='flex gap-3'>
                    <SolidButton
                    title={"Register To Join"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                    <OutlineButton
                    title={"Join Event"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                </div>
            </div>
        </div>
        <div
        className='grid grid-cols-2 gap-10 h-full'>
            <div className="col-1 h-full w-full relative">
                    <div className='bg-yellow-200 mt-10 -z-10 w-11/12 h-full absolute'/>
                    <div className='bg-transparent h-full ml-10  pb-10'>
                        <img className="h-full" src="home.jpg"/>  
                    </div>
                
            </div>

            <div className='col-1 space-y-5 py-10 px-10'>
                <p className='font-primary text-4xl'>
                    Annual General Conference
                </p>

                <p className='font-nunito'>
                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                </p>

                <div className="flex justify-between">
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>50</p>
                        </div>
                        <p className='font-primary text-3xl'>Days</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>08</p>
                        </div>
                        <p className='font-primary text-3xl'>Hours</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>55</p>
                        </div>
                        <p className='font-primary text-3xl'>Mins</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3'>
                            <p className='font-primary text-3xl'>10</p>
                        </div>
                        <p className='font-primary text-3xl'>Secs</p>
                    </div>
                </div>

                <p className='font-primary text-2xl' >18th December, 2022</p>

                <div className='flex gap-3'>
                    <SolidButton
                    title={"Register To Join"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                    <OutlineButton
                    title={"Join Event"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                </div>
            </div>
        </div>
     </Carousel>
</div>
  )
}

export default EventCarousel
