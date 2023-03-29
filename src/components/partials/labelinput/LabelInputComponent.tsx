import React, { Component, SyntheticEvent } from 'react'
import Types from '../../../constants/types'

class LabelInputComponent extends Component<Types.LabelInputProps,any> {

  constructor(props: Types.LabelInputProps){
    super(props);
    this.onInputChange = this.onInputChange.bind(this)

  }

  onInputChange(e: SyntheticEvent): void{
    let target: HTMLInputElement = e.target as HTMLInputElement;
    let id: string = target.id;
    let value: string = target.value;
    this.props.onInputChange(id,value)
  }

  render(): React.ReactNode {
      return (
    <div className="grid grid-cols-12 gap-4">
        <div className='label-div columns-12 md:columns-3 md:col-start-2'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={this.props.input_id}>{this.props.label_text}</label>
        </div>
        <div className="input-div columns-12 md:columns-7">
            <input id={this.props.input_id} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={this.props.input_type} onChange={this.onInputChange} />
        </div>      
    </div>
    )
  }
  
}

export default LabelInputComponent