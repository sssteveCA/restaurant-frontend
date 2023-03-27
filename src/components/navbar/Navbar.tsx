
import React from 'react'
import Types from '../../constants/types';
import './Navbar.sass'

export default class Navbar extends React.Component<any,any>{

    private readonly menu_data: Types.MenuItem[]  = [
        {id: 0, title: 'Home', link: '#'},
        {id: 1, title: 'Chi siamo', link: '#'},
        {id: 2, title: 'Menu', link: '#'},
        {id: 3, title: 'Blog', link: '#'},
        {id: 4, title: 'Contatti', link: '#'},
    ];

    private readonly menu_not_logged: Types.MenuItem[] = [
        {id: 5,title: 'Login', link: '#'},
        {id: 6,title: 'Registrati', link: '#'},
    ]

    private readonly menu_logged: Types.MenuItem[] = [
        {id: 7,title: 'Profilo', link: '#'},
        {id: 8,title: 'Logout', link: '#'},
    ]

    constructor(props: any){
        super(props);
        this.state = {
            logged: false
        }
        
    }

    render(): React.ReactNode {
        return (
            <nav className='flex flex-col lg:flex-row lg:justify-between bg-black'>
                <ul className='flex flex-col lg:flex-row'>{this.leftMenu()}</ul>
                <ul className='flex flex-col lg:flex-row'>{this.rightMenu()}</ul>
            </nav>     
          )
    }

    /**
     * The portion of the menu left justified
     * @returns 
     */
    private leftMenu(): Array<JSX.Element> {
        return this.menu_data.map((menu_item) => {
            return (
                <li key={menu_item.id} className="mr-6 px-3 py-3">
                    <a 
                        className="text-blue-500 hover:text-blue-800" 
                        href={menu_item.link}>{menu_item.title}</a>
                </li>
            )
        });
    }

    /**
     * The portion of menu right justified
     * @returns 
     */
    private rightMenu(): Array<JSX.Element>{
        let right_menu = [];
        if(this.state.logged === true)
            right_menu = this.menu_logged;
        else
            right_menu = this.menu_not_logged;
        return right_menu.map(menu_item => {
            return (
                <li key={menu_item.id} className="mr-6 px-3 py-3">
                    <a 
                        className="text-blue-500 hover:text-blue-800" 
                        href={menu_item.link}>{menu_item.title}</a>
                </li>
            )
        })
    }
  
}
