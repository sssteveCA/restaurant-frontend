import React from 'react'
import Types from '../../../../constants/types'

const TwoButtonsComponent = (props: Types.TwoButtonsProps) => {
  return (
    <div className="grid grid-cols-12 gap-4">
        <div className='columns-12 md:columns-2 md:col-start-3'>
            <button className={props.buttons[0].classes} type="button">
                {props.buttons[0].text}
            </button>
        </div>
        <div className='columns-12 md:columns-2 md:col-start-7'>
            <button className={props.buttons[1].classes} type="button">
                {props.buttons[1].text}
            </button>
        </div>
    </div>
  )
}

export default TwoButtonsComponent