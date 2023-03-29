import React from 'react'

const TitleComponent = (props: any) => {
  return (
    <div className='text-2xl md:text-3xl lg:text-4xl text-black font-black text-center'>{props.title}</div>
  )
}

export default TitleComponent