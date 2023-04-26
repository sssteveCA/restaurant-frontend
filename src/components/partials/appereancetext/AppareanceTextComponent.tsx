import React from 'react'
import Types from '../../../constants/types'

const AppareanceTextComponent = (props: Types.AppareanceTextProps) => {
  return (
    <div id='home-text' className='text-2xl font-bold italic leading-5'>{props.text}</div>
  )
}

export default AppareanceTextComponent