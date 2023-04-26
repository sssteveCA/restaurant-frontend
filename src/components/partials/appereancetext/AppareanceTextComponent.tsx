import React from 'react'
import Types from '../../../constants/types'
import './AppereanceTextComponent.sass'

const AppareanceTextComponent = (props: Types.AppareanceTextProps) => {
  return (
    <div id='home-text' className='text-4xl font-bold italic leading-5 text-center mt-8'>{props.text}</div>
  )
}

export default AppareanceTextComponent