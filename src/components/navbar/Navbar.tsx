
import React from 'react'
import './Navbar.sass'

export const Navbar = () => {

    const menu_data  = [
        {title: 'Home', link: '#'},
        {title: 'Chi siamo', link: '#'},
        {title: 'Menu', link: '#'},
        {title: 'Blog', link: '#'},
        {title: 'Contatti', link: '#'},
    ];
  return (
    <nav>
        <ul className="flex bg-black">
        {
            menu_data.map(menu_item => {
                return <li className="mr-6 px-3 py-3">
                    <a className="text-blue-500 hover:text-blue-800" href={menu_item.link}>{menu_item.title}</a>
                </li>
            })
        }
        </ul>
    </nav>
    
  )
}
