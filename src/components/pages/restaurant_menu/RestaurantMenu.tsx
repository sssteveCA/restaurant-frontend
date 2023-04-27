import React, { Component } from "react";
import TitleComponent from "../../partials/text/title/TitleComponent";
import { MenuRequest, MenuRequestType } from "../../../requests/menu_request";
import Types from "../../../constants/types";
import SpinnerComponent from "../../partials/spinner/SpinnerComponent";
import { Keys } from "../../../constants/keys";
import MessageComponent from "../../partials/text/message/MessageComponent";

export default class RestaurantMenu extends Component<any,Types.RestaurantMenuState>{
    
    constructor(props: any){
        super(props)
        this.state = {
            menu: [], message: '', spinner_show: false
        }
    }

    componentDidMount(): void {
        let mr_data: MenuRequestType = {
            url: ''
        }
        let mr: MenuRequest = new MenuRequest(mr_data)
        this.setState({spinner_show: true})
        mr.getMenu().then(obj => {
            this.setState({spinner_show: false})
            if(obj[Keys.KEY_DONE]){
                this.setState({menu: obj['menu']})
            }
            else this.setState({message: obj[Keys.KEY_MESSAGE]})
        })
    }

    render(): React.ReactNode {
        return (
            <>
                <TitleComponent title="Pagina menu ristorante" />
                <SpinnerComponent visible={this.state.spinner_show} />
                <MessageComponent message={this.state.message} />
                {
                    this.state.menu.map((menu_single,i) => <div key={i} />)
                }
            </>
        )
    }
}