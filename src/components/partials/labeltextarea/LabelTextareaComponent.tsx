import React from 'react'
import Types from '../../../constants/types'

const LabelTextareaComponent = (props: Types.LabelTextAreaProps) => {
  return (
    <div className="grid grid-cols-12 gap-4">
        <div className="label-div columns-12 md:columns-3 md:col-start-2">
            <label htmlFor={props.textarea_id}>{props.label_text}</label>
        </div>
        <div className="textarea-div columns-12 md:columns-7">
            <textarea id={props.textarea_id}></textarea>
        </div>   
    </div>
  )
}

export default LabelTextareaComponent