import React from 'react'
import ResponsibilityContainer from './ResponsibilityContainer'

const ResponsilbiltySection = () => {
  return (
    <div className="flex flex-col space-y-20 items-center justify-center  pt-20 pb-24 bg-[#FED253]">
        <p className="text-4xl font-primary">Our Responsibility</p>

        <div className='flex gap-14 px-36'>
        <ResponsibilityContainer
        src={"apply.png"}
        title="Scholarship and Empowerment"
        content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"}/>
        <ResponsibilityContainer
        src={"awards.png"}
        title="Help Current Students/Awards"
        content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"}/>
        <ResponsibilityContainer
        src={"dues.png"}
        title="Subscription and Dues"
        content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"}/>
        <ResponsibilityContainer
        src={"community.png"}
        title="Grow Our Community"
        content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"}/>
        </div>
        
    </div>
  )
}

export default ResponsilbiltySection
