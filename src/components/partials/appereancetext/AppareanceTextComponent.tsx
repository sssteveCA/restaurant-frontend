import React from 'react'
import Types from '../../../constants/types'

const AppareanceTextComponent = (props: Types.AppareanceTextProps) => {
  return (
    <div>{props.text}</div>
  )
}

export default AppareanceTextComponent