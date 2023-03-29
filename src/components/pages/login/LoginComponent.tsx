import { Component, ReactNode } from "react";
import Types from "../../../constants/types";
import TwoButtonsComponent from "../../partials/buttons/twobuttons/TwoButtonsComponent";
import CheckBoxComponent from "../../partials/checkbox/CheckBoxComponent";
import LabelInputComponent from "../../partials/labelinput/LabelInputComponent";
import TitleComponent from "../../partials/title/TitleComponent";
import './LoginComponent.sass'

export default class LoginComponent extends Component<any,Types.LoginState>{

    constructor(props: any){
        super(props);
        this.state = {
            username: '', password: ''
        }
    }

    onPrimaryButtonClick(): void{
        console.log("Lc onPrimaryButtonClick")
    }

    render(): ReactNode {
        let tb_props: Types.TwoButtonsProps =  {
            buttons: [
                {
                    classes: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                    text: "Login"},
                {
                    classes: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                    text: "Annulla"},
            ],
            onPrimaryButtonClick: this.onPrimaryButtonClick
        }
        return (
            <>
               <TitleComponent title="Login" />
                <div id="login-container">
                    <form>
                        <LabelInputComponent input_id="username" input_type="text" label_text="Username" value={this.state.username}/>
                        <LabelInputComponent input_id="password" input_type="password" label_text="Password" value={this.state.password}/>
                        <CheckBoxComponent checkbox_id="show-password" label_text="Mostra password" />
                        <TwoButtonsComponent {...tb_props} />
                    </form>
                    
                </div> 
            </>
            
        );
    }
}