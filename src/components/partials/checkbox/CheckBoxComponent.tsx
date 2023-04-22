import React, { Component } from 'react'
import Types from '../../../constants/types'

export default class CheckBoxComponent extends Component<Types.CheckBoxProps, any> {

    constructor(props: Types.CheckBoxProps){
        super(props);
    }

  render() {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className='label-div col-start-2 col-span-12 md:col-start-2 md:col-span-10'> 
              <input id={this.props.checkbox_id} type="checkbox" value="1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor={this.props.checkbox_id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{this.props.label_text}</label>
            </div>         
        </div>
    )
  }
}
