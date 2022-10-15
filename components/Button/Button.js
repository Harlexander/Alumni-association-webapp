import React from 'react'

export const OutlineButton = ({title, additionalClass}) => {
  return (
    <button className={`border-2 border-[#E8A902] hover:bg-pry hover:text-white px-8 py-1 text-pry ${additionalClass}`}>
      {title}
    </button>
  )
}
export const SolidButton = ({title, additionalClass}) => {
  return (
    <button className={`bg-pry  px-8 py-1 text-white ${additionalClass}`}>
      {title}
    </button>
  )
}
