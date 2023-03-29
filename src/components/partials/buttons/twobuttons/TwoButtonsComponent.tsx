import React, { Component } from 'react'
import Types from '../../../../constants/types'

class TwoButtonsComponent extends Component<Types.TwoButtonsProps, any> {

    constructor(props: Types.TwoButtonsProps){
        super(props)
    }

    render(): React.ReactNode {
        return (
    <div className="grid grid-cols-12 gap-4">
        <div className='columns-12 md:columns-2 md:col-start-3'>
            <button className={this.props.buttons[0].classes} type="button">
                {this.props.buttons[0].text}
            </button>
        </div>
        <div className='columns-12 md:columns-2 md:col-start-7'>
            <button className={this.props.buttons[1].classes} type="button">
                {this.props.buttons[1].text}
            </button>
        </div>
    </div>
        )
    }
  
}

export default TwoButtonsComponent