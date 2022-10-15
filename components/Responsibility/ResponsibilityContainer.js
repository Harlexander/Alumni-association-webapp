import React from 'react'

const ResponsibilityContainer = ({ src, title, content}) => {
  return (
    <div className='space-y-5'>
        <img src={src} className='w-full'/>

        <p className='font-primary text-2xl'>{title}</p>

        <p className='font-nunito'>{content}</p>
    </div>
  )
}

export default ResponsibilityContainer
