import React, { Component } from 'react'
import Types from '../../../../constants/types'
import SpinnerComponent from '../../spinner/SpinnerComponent'

class TwoButtonsComponent extends Component<Types.TwoButtonsProps, any> {

    constructor(props: Types.TwoButtonsProps){
        super(props)
        this.onPrimaryButtonClick = this.onPrimaryButtonClick.bind(this)
    }

    onPrimaryButtonClick(): void{
        this.props.onPrimaryButtonClick()
    }

    render(): React.ReactNode {
        return (
    <div className="grid grid-cols-12 grid-rows-1 gap-4">
        <div className='col-span-6 text-center'>
            <button className={this.props.buttons[0].classes} type="button" onClick={this.onPrimaryButtonClick}>
                {this.props.buttons[0].text}
            </button>
            <SpinnerComponent visible={this.props.show_spinner} />
        </div>
        <div className='col-span-6 text-center'>
            <button className={this.props.buttons[1].classes} type="button" >
                {this.props.buttons[1].text}
            </button>
        </div>
    </div>
        )
    }
  
}

export default TwoButtonsComponent