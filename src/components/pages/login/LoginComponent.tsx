import { Component, ReactNode } from "react";
import Types from "../../../constants/types";
import TwoButtonsComponent from "../../partials/buttons/twobuttons/TwoButtonsComponent";
import CheckBoxComponent from "../../partials/checkbox/CheckBoxComponent";
import LabelInputComponent from "../../partials/labelinput/LabelInputComponent";
import TitleComponent from "../../partials/title/TitleComponent";
import './LoginComponent.sass'

export default class LoginComponent extends Component<any,any>{

    constructor(props: any){
        super(props);
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
            ]
        }
        return (
            <>
               <TitleComponent title="Login" />
                <div id="login-container">
                    <form>
                        <LabelInputComponent input_id="username" input_type="text" label_text="Username" />
                        <LabelInputComponent input_id="password" input_type="password" label_text="Password" />
                        <CheckBoxComponent checkbox_id="show-password" label_text="Mostra password" />
                        <TwoButtonsComponent {...tb_props} />
                    </form>
                    
                </div> 
            </>
            
        );
    }
}