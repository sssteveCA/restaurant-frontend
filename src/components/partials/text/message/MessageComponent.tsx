import React from 'react'
import Types from '../../../../constants/types'

const MessageComponent = (props: Types.MessageProps) => {

  return (
    <div className='grid grid-cols-12 mt-10'>
      <div id="message" className="col-start-2 col-span-10 text-red-600 text-sm font-bold text-center">{props.message}</div>
    </div>
    
  )
}

export default MessageComponent