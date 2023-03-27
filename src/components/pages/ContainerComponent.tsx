import React, { Component } from "react";
import HomeComponent from "./home/HomeComponent";
import './ContainerComponent.sass';
import { Route, Routes } from "react-router-dom";
import AboutComponent from "./about/AboutComponent";
import RestaurantMenu from "./restaurant_menu/RestaurantMenu";
import BlogComponent from "./blog/BlogComponent";
import ContactsComponent from "./contacts/ContactsComponent";
import NotFoundComponent from "./not_found/NotFoundComponent";

export default class ContainerComponent extends Component<any,any>{

    constructor(props: any){
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div id="page-container">
                <Routes>
                    <Route path="/" element={<HomeComponent />} />        
                    <Route path="about" element={<AboutComponent />} />  
                    <Route path="menu" element={<RestaurantMenu />} />    
                    <Route path="blog" element={<BlogComponent />} />
                    <Route path="contacts" element={<ContactsComponent />} />
                    <Route path="*" element={<NotFoundComponent />} />        
                </Routes>    
            </div>
        )
    }

}