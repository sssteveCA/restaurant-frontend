
import React, { Component, useState } from 'react'
import './Navbar.sass'

export default class Navbar extends Component{

    private readonly menu_data  = [
        {title: 'Home', link: '#'},
        {title: 'Chi siamo', link: '#'},
        {title: 'Menu', link: '#'},
        {title: 'Blog', link: '#'},
        {title: 'Contatti', link: '#'},
    ];

    private readonly menu_not_logged = [
        {title: 'Login', link: '#'},
        {title: 'Registrati', link: '#'},
    ]

    private readonly menu_logged = [
        {title: 'Profilo', link: '#'},
        {title: 'Logout', link: '#'},
    ]

    constructor(props: any){
        super(props);
        useState({
            logged: false
        })
    }

    public render(){

        return (
            <nav>
                <ul className="flex bg-black">
                {
                    this.menu_data.map((menu_item, index) => {
                        return <li key={index} className="mr-6 px-3 py-3">
                            <a className="text-blue-500 hover:text-blue-800" href={menu_item.link}>{menu_item.title}</a>
                        </li>
                    })
                }
                </ul>
            </nav>     
          )
    }
  
}
