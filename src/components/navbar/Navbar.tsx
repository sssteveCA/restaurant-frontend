
import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Types from '../../constants/types';
import './Navbar.sass'
import PrivacyComponent from './privacy/PrivacyComponent';

export default class Navbar extends React.Component<any,Types.NavbarState>{

    private readonly menu_data: Types.MenuItem[]  = [
        {id: 0, title: 'Home', link: '/'},
        {id: 1, title: 'Chi siamo', link: '/about'},
        {id: 2, title: 'Pietanze', link: '/dishes'},
        {id: 3, title: 'Menu', link: '/menu'},
        {id: 4, title: 'Blog', link: '/blog'},
        {id: 5, title: 'Contatti', link: '/contacts'},
    ];

    private readonly menu_privacy: Types.MenuItem[] = [
        {id: 6, title: 'Privacy policy', link: '#'},
        {id: 7, title: 'Cookie policy', link: '#'},
        {id: 8, title: 'Termini e condizioni', link: '#'},
    ]

    private readonly menu_not_logged: Types.MenuItem[] = [
        {id: 9,title: 'Login', link: '/login'},
        {id: 10,title: 'Registrati', link: '/register'},
    ]

    private readonly menu_logged: Types.MenuItem[] = [
        {id: 11,title: 'Profilo', link: '#'},
        {id: 12,title: 'Logout', link: '#'},
    ]

    constructor(props: any){
        super(props);
        this.state = {
            info_hover: false, logged: false
        }
        this.privacyMenuMouseEnter = this.privacyMenuMouseEnter.bind(this)
        this.privacyMenuMouseLeave = this.privacyMenuMouseLeave.bind(this)
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<Types.NavbarState>, snapshot?: any): void {
        if(prevState.info_hover !== this.state.info_hover){
           this.submenuInfoPlace();
        }//if(prevState.info_hover !== this.state.info_hover){
    }

    /**
     * When the menu in small devices collapse/show
     */
    private onCollapseButtonClick(): void{
        let menu = document.getElementById('navbar-online-restaurant');
        if(menu)
            menu.classList.toggle('hidden');

    }

    render(): React.ReactNode {
        return (
            <>
            <nav className='bg-blue-500 text-white font-bold'>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    {this.collapse()}
                    {this.menu()}
                </div>
            </nav>
            </>
              
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
        let pm_props: Types.PrivacyProps = {
            menu_privacy: this.menu_privacy, privacyMenuMouseEnter: this.privacyMenuMouseEnter, privacyMenuMouseLeave: this.privacyMenuMouseLeave, show: this.state.info_hover
        }
        return (
            <div id="navbar-online-restaurant" className="hidden lg:flex lg:flex-row lg:justify-between w-full">
                <ul className='flex flex-col lg:flex-row'>
                    {this.leftMenu()}
                    <PrivacyComponent {...pm_props} />
                    </ul>
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
                <li key={menu_item.id} className="mr-6 p-3">
                    <NavLink to={menu_item.link} >{menu_item.title}</NavLink>
                </li>
            )
        });
    }

    /**
     * When user enter with mouse in privacy submenu
     */
    private privacyMenuMouseEnter(): void{
        this.setState({info_hover: true})
    }

    /**
     * When user exit with mouse from privacy submenu
     */
    private privacyMenuMouseLeave(): void{
        this.setState({info_hover: false})
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
        return right_menu.map(menu_item => 
            (
                <li key={menu_item.id} className="mr-6 p-3">
                    <NavLink to={menu_item.link}>{menu_item.title}</NavLink>
                </li>
            )
        )
    }

    /**
     * Set the privacy submenu position
     */
    private submenuInfoPlace(): void{
        let navbar_info_ul: HTMLUListElement = document.getElementById('navbar-info-ul') as HTMLUListElement;
        let navbar_info: HTMLLIElement = document.getElementById('navbar-info') as HTMLLIElement;
        if(this.state.info_hover){
            if(window.innerWidth > 992){
                navbar_info_ul.style.top = `${navbar_info.offsetTop+navbar_info.offsetHeight}px`
                let niu_w_diff: number = navbar_info.offsetWidth-navbar_info_ul.offsetWidth
                if(niu_w_diff > 0)
                    navbar_info_ul.style.left = `${navbar_info.offsetLeft-(niu_w_diff/2)}px`
                else
                    navbar_info_ul.style.left = `${navbar_info.offsetLeft+(niu_w_diff/2)}px`
            }
            else{
                navbar_info.appendChild(navbar_info_ul)
            }
        }
    }
  
}
