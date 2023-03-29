import React, { Component } from 'react'
import Types from '../../../constants/types'

class LabelTextareaComponent extends Component<Types.LabelTextAreaProps,any> {

  constructor(props: Types.LabelTextAreaProps){
    super(props)
  }

  render(): React.ReactNode {
     return (
      <div className="grid grid-cols-12 gap-4">
          <div className="label-div columns-12 md:columns-3 md:col-start-2">
              <label htmlFor={this.props.textarea_id}>{this.props.label_text}</label>
          </div>
          <div className="textarea-div columns-12 md:columns-7">
              <textarea id={this.props.textarea_id}></textarea>
          </div>   
      </div>
    ) 
  }
  
}

export default LabelTextareaComponent