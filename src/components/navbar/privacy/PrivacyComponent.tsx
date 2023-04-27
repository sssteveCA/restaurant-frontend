
import React from 'react'
import { NavLink } from 'react-router-dom'
import Types from '../../../constants/types'

const PrivacyComponent = (props: Types.PrivacyProps) => {
    return (
        <ul id='navbar-info-ul' className='hidden'>
            {
                props.menu_privacy.map(menu_item => {
                    return (
                        <li key={menu_item.id} className='mr-6 p-3'>
                            <NavLink to={menu_item.link}>{menu_item.title}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default PrivacyComponent