import React, { Component } from 'react'
import Types from '../../../../constants/types'

export default class TeamItemComponent extends Component<Types.TeamItemProps, any> {

  render() {
    return (
      <div className='flex flex-col md:flex-row my-5'>
        <div className={`team-item-image ${this.props.image.classes}`}>
            <img src={this.props.image.url} alt={this.props.image.classes} title={this.props.image.classes} />
        </div>
        <div className={`team-item-text flex flex-col ${this.props.text.classes}`}>
            <div className='title'>
                <h5 className='text-center'>{this.props.text.title}</h5>
            </div>
            <div className='description'>{this.props.text.description}</div>
        </div>
      </div>
    )
  }
}
