import React from 'react'
import ResponsibilityContainer from './ResponsibilityContainer'
import { Slide } from 'react-awesome-reveal'
const ResponsilbiltySection = () => {
  return (
    
    <div className="flex flex-col space-y-20 items-center justify-center  pt-20 pb-24 bg-[#FED253]">
        <Slide direction='up'><p className="text-4xl font-primary">Our Responsibility</p>

          <div className='md:flex gap-14 px-5 space-y-10 md:space-y-0 md:px-36'>
          {/* <Slide direction='up'> */}
          <ResponsibilityContainer
          src={"apply.png"}
          title="Scholarship and Empowerment"
          content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"}/>
          {/* </Slide> */}
          {/* <Slide direction='up'> */}
          <ResponsibilityContainer
          src={"awards.png"}
          title="Help Current Students/Awards"
          content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"}/>
          {/* </Slide> */}
          {/* <Slide direction='up'> */}
          <ResponsibilityContainer
          src={"dues.png"}
          title="Subscription and Dues"
          content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"}/>
          {/* </Slide>
          <Slide direction='up'> */}
          <ResponsibilityContainer
          src={"community.png"}
          title="Grow Our Community"
          content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"}/>
          {/* </Slide> */}
          </div>
        </Slide>     
    </div>
    
  )
}

export default ResponsilbiltySection
