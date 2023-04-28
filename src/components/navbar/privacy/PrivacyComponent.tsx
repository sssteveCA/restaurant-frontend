
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Types from '../../../constants/types'

export default class PrivacyComponent extends Component<Types.PrivacyProps,any>{


    render(): React.ReactNode {
        let hidden: string = this.props.show === true ? '' : ''
        return (
            <li id='navbar-info' className='flex flex-col justify-start lg:items-center mr-6 p-3' onMouseEnter={this.props.privacyMenuMouseEnter} onMouseLeave={this.props.privacyMenuMouseLeave}>
                <div className='w-full h-full'>Informativa</div>
                <ul id='navbar-info-ul' className={'bg-blue-500 text-white font-bold'+hidden}>
                    {
                        this.props.menu_privacy.map(menu_item => {
                            return (
                                <li key={menu_item.id} className='p-3'>
                                    <NavLink to={menu_item.link}>{menu_item.title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
        )
    }
    
}
