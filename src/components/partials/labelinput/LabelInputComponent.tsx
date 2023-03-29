import React, { Component } from 'react'
import Types from '../../../constants/types'

class LabelInputComponent extends Component<Types.LabelInputProps,any> {

  constructor(props: Types.LabelInputProps){
    super(props);
  }

  render(): React.ReactNode {
      return (
    <div className="grid grid-cols-12 gap-4">
        <div className='label-div columns-12 md:columns-3 md:col-start-2'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={this.props.input_id}>{this.props.label_text}</label>
        </div>
        <div className="input-div columns-12 md:columns-7">
            <input id="name" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={this.props.input_type} />
        </div>      
    </div>
    )
  }
  
}

export default LabelInputComponent