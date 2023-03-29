import React from 'react'
import Types from '../../../constants/types'

const LabelInputComponent = (props: Types.LabelInputProps) => {
  return (
    <div className="grid grid-cols-12 gap-4">
        <div className="label-div columns-12 md:columns-2 md:col-start-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.input_id}>{props.label_text}</label>
        </div>
        <div className="input-div columns-12 md:columns-6">
            <input id="name" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={props.input_type} />
        </div>      
    </div>
  )
}

export default LabelInputComponent