import React, { Component } from 'react'
import Types from '../../../../constants/types'
import './AppereanceTextComponent.sass'

export default class AppareanceTextComponent extends Component<Types.AppareanceTextProps, any> {

  componentDidMount(): void {
    setTimeout(() => {
      document.getElementById(this.props.id)?.classList.add('my-transition')
    },100)
  }

  render(): React.ReactNode {
    return (
    <div id={this.props.id} className='appereance-text text-4xl font-bold italic leading-5 text-center mt-12'>{this.props.text}</div>
  )  
  }
  
}
