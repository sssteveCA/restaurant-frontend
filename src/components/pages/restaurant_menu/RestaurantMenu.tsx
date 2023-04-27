import React, { Component } from "react";
import TitleComponent from "../../partials/text/title/TitleComponent";

export default class RestaurantMenu extends Component<any,any>{
    
    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <>
                <TitleComponent title="Pagina menu ristorante" />
            </>
        )
    }
}