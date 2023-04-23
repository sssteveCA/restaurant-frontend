import React from 'react'
import Types from '../../../constants/types'

const MessageComponent = (props: Types.MessageProps) => {

    let classes: string = "text-red-600 text-sm font-bold";
    if('classes' in props)classes = props.classes as string;
 

  return (
    <div id="message" className={classes} >{props.message}</div>
  )
}

export default MessageComponent