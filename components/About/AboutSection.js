import React from 'react'
import { SolidButton } from '../Button/Button'

const AboutSection = () => {
  return (
    <div className="space-y-9 md:px-96 pt-20 px-5 pb-24 bg-yellow-100">
        <p className="text-4xl text-center font-primary">About  Us</p>
        <p className="md:text-xl font-montserrat leading-relaxed text-center">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>

        <div className='flex justify-center gap-1 md:gap-5'>
            <SolidButton
            title={"Our Motto"}
            additionalClass={"font-primary text-black md:text-2xl"}/>
            <SolidButton
            title={"School Anthem"}
            additionalClass={"font-primary text-black md:text-2xl"}/>
        </div>
    </div>
  )
}

export default AboutSection
