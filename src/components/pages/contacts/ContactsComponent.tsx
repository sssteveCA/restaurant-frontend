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
           name: '', email: '', message: '' 
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onPrimaryButtonClick = this.onPrimaryButtonClick.bind(this)
    }

    onInputChange(id: string, value: string): void{
        console.log("cc");
        console.log(id)
        console.log(value)
        switch(id){
            case 'name':
                this.setState({name: value})
                break
            case 'email':
                this.setState({email: value})
                break
        }
    }

    onPrimaryButtonClick(): void{
        console.log("Cc onPrimaryButtonClick")
        console.log(this.state)
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
                        <LabelInputComponent input_id="name" input_type="text" label_text="Nome" onInputChange={this.onInputChange}/>
                        <LabelInputComponent input_id="email" input_type="email" label_text="Email" onInputChange={this.onInputChange}/>
                        <LabelTextareaComponent label_text="Messaggio" textarea_id="message"  />
                        <TwoButtonsComponent {...tb_props} />
                    </form>
                </div>
            </>
            
        )
    }
}