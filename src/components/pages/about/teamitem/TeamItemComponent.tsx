import React, { Component } from 'react'
import Types from '../../../../constants/types'

export default class TeamItemComponent extends Component<Types.TeamItemProps, any> {

  render() {
    return (
      <div className='flex flex-col md:flex-row my-5 justify-center md:justify-between'>
        <div className={`team-item-image pt-5 md:pt-0 w-full md:w-1/2 ${this.props.image.classes}`}>
            <img src={this.props.image.url} alt={this.props.image.name} title={this.props.image.name} className='m-auto' />
        </div>
        <div className={`team-item-text flex flex-col w-full md:w-1/2 ${this.props.text.classes}`}>
            <div className='title text-center text-3xl font-bold'>{this.props.text.title}</div>
            <div className='description'>{this.props.text.description}</div>
        </div>
      </div>
    )
  }
}
