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
        <div className='label-div col-span-10 col-start-2 md:col-start-2 md:col-span-3'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={this.props.input_id}>{this.props.label_text}</label>
        </div>
        <div className="input-div col-start-2 col-span-10 md:col-span-7">
            <input id={this.props.input_id} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" type={this.props.input_type} onChange={this.onInputChange} />
        </div>      
    </div>
    )
  }
  
}

export default LabelInputComponent