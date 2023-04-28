import React, { Component, SyntheticEvent } from 'react'
import Types from '../../../../constants/types'
import './LabelTextareaComponent.sass'

class LabelTextareaComponent extends Component<Types.LabelTextAreaProps,any> {

  constructor(props: Types.LabelTextAreaProps){
    super(props)
    this.onTextAreaChange = this.onTextAreaChange.bind(this)
  }

  /**
   * Handle the textarea value changes
   * @param e 
   */
  onTextAreaChange(e: SyntheticEvent): void{
    let target: HTMLTextAreaElement = e.target as HTMLTextAreaElement;
    let id: string = target.id;
    let value: string = target.value;
    this.props.onTextAreaChange(id,value)
  }

  render(): React.ReactNode {
     return (
      <div className="grid grid-cols-12 gap-4">
          <div className="label-div col-span-10 col-start-2 md:col-start-2 md:col-span-3">
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={this.props.textarea_id}>{this.props.label_text}</label>
          </div>
          <div className="textarea-div col-start-2 col-span-10 md:col-span-7">
              <textarea id={this.props.textarea_id} className='w-full border-2 border-black focus:bg-yellow-200' onChange={this.onTextAreaChange}></textarea>
          </div>   
      </div>
    ) 
  }
  
}

export default LabelTextareaComponent