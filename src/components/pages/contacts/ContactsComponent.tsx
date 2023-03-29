import { Component } from "react";
import Types from "../../../constants/types";
import TwoButtonsComponent from "../../partials/buttons/twobuttons/TwoButtonsComponent";
import LabelInputComponent from "../../partials/labelinput/LabelInputComponent";
import LabelTextareaComponent from "../../partials/labeltextarea/LabelTextareaComponent";
import TitleComponent from "../../partials/title/TitleComponent";
import './ContactsComponent.sass';

export default class ContactsComponent extends Component<any,Types.ContactsState>{

    constructor(props: any){
        super(props)
        this.state = {
           name_value: '', email_value: '', message_value: '' 
        }
    }

    onPrimaryButtonClick(): void{
        console.log("Cc onPrimaryButtonClick")
    }

    render(): React.ReactNode {
        let tb_props: Types.TwoButtonsProps =  {
            buttons: [
                {
                    classes: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                    text: "Invia"},
                {
                    classes: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                    text: "Annulla"},
            ],
            onPrimaryButtonClick: this.onPrimaryButtonClick
        }
        return (
            <>
                <TitleComponent title="Pagina dei contatti" />
                <div id="contacts-container">
                    <form>
                        <LabelInputComponent input_id="name" input_type="text" label_text="Nome" value={this.state.name_value}/>
                        <LabelInputComponent input_id="email" input_type="email" label_text="Email" value={this.state.email_value}/>
                        <LabelTextareaComponent label_text="Messaggio" textarea_id="message" value={this.state.message_value} />
                        <TwoButtonsComponent {...tb_props} />
                    </form>
                </div>
            </>
            
        )
    }
}