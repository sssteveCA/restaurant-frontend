import React from 'react'
import Types from '../../../../constants/types'

const TwoButtonsComponent = (props: Types.TwoButtonsProps) => {
  return (
    <div className={props.containerClasses}>
        <button className={props.buttons[0].classes} type="button">
            {props.buttons[0].text}
        </button>
        <button className={props.buttons[1].classes} type="button">
            {props.buttons[1].text}
        </button>
    </div>
  )
}

export default TwoButtonsComponent