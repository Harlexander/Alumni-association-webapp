import React from 'react'

const ImageContainer = ({src, caption}) => {
  return (
    <div>
      <img
      src={src}
      className="w-full h-80"/>
      <p className='font-nunito'>
        {caption}
      </p>
    </div>
  )
}

export default ImageContainer
