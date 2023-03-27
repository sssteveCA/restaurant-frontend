import React, { Component } from "react";
import HomeComponent from "./home/HomeComponent";

export default class ContainerComponent extends Component<any,any>{

    constructor(props: any){
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <HomeComponent />
            </>
        )
    }

}