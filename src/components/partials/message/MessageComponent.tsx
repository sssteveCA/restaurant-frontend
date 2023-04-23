import React from 'react'
import Types from '../../../constants/types'

const MessageComponent = (props: Types.MessageProps) => {

    let classes: string = "bg-red-600 text-sm font-bold";
    let hidden: boolean = true;
    if('classes' in props)classes = props.classes as string;
    if('hidden' in props)hidden = props.hidden as boolean;
    classes = hidden ? classes+" hidden" : classes;

  return (
    <div id="message" className={classes} >{props.message}</div>
  )
}

export default MessageComponent