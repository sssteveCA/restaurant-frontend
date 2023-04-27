import React, { Component } from 'react'
import Types from '../../../../constants/types'
import './TeamItemComponent.sass'

export default class TeamItemComponent extends Component<Types.TeamItemProps, any> {

  componentDidMount(): void {
    setTimeout(()=>{
      document.getElementById('team-item-div-'+this.props.id)?.classList.add('my-transition')
    },100)
  }

  render() {
    return (
      <div id={'team-item-div-'+this.props.id} className='team-item-div flex flex-col md:flex-row my-5 justify-center md:justify-between bg-white/[.7]'>
        <div className={`team-item-image flex-auto ${this.props.image.classes}`}>
            <img src={this.props.image.url} alt={this.props.image.name} title={this.props.image.name} className='m-auto' />
        </div>
        <div className={`team-item-text flex flex-col flex-auto p-5 ${this.props.text.classes}`}>
            <div className='title text-center text-3xl font-bold'>{this.props.text.title}</div>
            <div className='description'>{this.props.text.description}</div>
        </div>
      </div>
    )
  }
}
