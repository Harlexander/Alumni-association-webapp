import React from 'react'
import { SolidButton } from '../Button/Button'

const AboutSection = () => {
  return (
    <div className="inline-flex flex-col space-y-9 items-center justify-end px-96 pt-20 pb-24 bg-yellow-100">
        <p className="w-44 h-16 text-4xl font-primary">About  Us</p>
        <p className="text-xl font-light leading-relaxed text-center">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>

        <div className='flex justify-center gap-5'>
            <SolidButton
            title={"Our Motto"}
            additionalClass={"font-primary text-black text-3xl"}/>
            <SolidButton
            title={"School Anthem"}
            additionalClass={"font-primary text-black text-3xl"}/>
        </div>
    </div>
  )
}

export default AboutSection
