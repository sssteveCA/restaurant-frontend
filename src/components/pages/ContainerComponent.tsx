import React, { Component } from "react";
import HomeComponent from "./home/HomeComponent";
import './ContainerComponent.sass';

export default class ContainerComponent extends Component<any,any>{

    constructor(props: any){
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div id="page-container">
                <HomeComponent />
            </div>
        )
    }

}