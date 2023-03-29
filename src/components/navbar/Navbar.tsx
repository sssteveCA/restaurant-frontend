
import React from 'react'
import { NavLink } from 'react-router-dom';
import Types from '../../constants/types';
import './Navbar.sass'

export default class Navbar extends React.Component<any,any>{

    private readonly menu_data: Types.MenuItem[]  = [
        {id: 0, title: 'Home', link: '/'},
        {id: 1, title: 'Chi siamo', link: '/about'},
        {id: 2, title: 'Menu', link: '/menu'},
        {id: 3, title: 'Blog', link: '/blog'},
        {id: 4, title: 'Contatti', link: '/contacts'},
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

    private onCollapseButtonClick(): void{
        let menu = document.getElementById('navbar-online-restaurant');
        if(menu)
            menu.classList.toggle('hidden');

    }

    render(): React.ReactNode {
        return (
            <nav className='bg-blue-500 text-white font-bold'>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    {this.collapse()}
                    {this.menu()}
                </div>
                
            </nav>     
          )
    }

    /**
     * The portion of the menu with the button to collapse the menu in small devices
     * @returns 
     */
    private collapse(): JSX.Element{
        return (
            <>
                <div className='lg:hidden'>Online Restaurant</div>
                <button id="collapse-button" data-collapse-toggle="navbar-online-restaurant" type="button" className="inline-flex text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden" aria-controls="navbar-online-restaurant" aria-expanded="false" onClick={this.onCollapseButtonClick}>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </>
        );
    }

    /**
     * The container for all menu items
     * @returns 
     */
    private menu(): JSX.Element{
        return (
            <div id="navbar-online-restaurant" className="hidden lg:flex lg:flex-row lg:justify-between w-full">
                <ul className='flex flex-col lg:flex-row'>{this.leftMenu()}</ul>
                <ul className='flex flex-col lg:flex-row'>{this.rightMenu()}</ul>
            </div>
        );
    }

    /**
     * The portion of the menu left justified
     * @returns 
     */
    private leftMenu(): Array<JSX.Element> {
        return this.menu_data.map((menu_item) => {
            return (
                <li key={menu_item.id} className="mr-6 px-3 py-3">
                    <NavLink to={menu_item.link} >{menu_item.title}</NavLink>
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
                    <NavLink to={menu_item.link}>{menu_item.title}</NavLink>
                </li>
            )
        })
    }
  
}
