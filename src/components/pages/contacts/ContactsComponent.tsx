import { Component } from "react";
import Types from "../../../constants/types";
import TwoButtonsComponent from "../../partials/buttons/twobuttons/TwoButtonsComponent";
import LabelInputComponent from "../../partials/labelinput/LabelInputComponent";
import LabelTextareaComponent from "../../partials/labeltextarea/LabelTextareaComponent";
import TitleComponent from "../../partials/title/TitleComponent";
import './ContactsComponent.sass';
import { ContactsRequest, ContactsRequestType } from "../../../requests/contacts_request";
import { Paths } from "../../../constants/paths";
import { Keys } from "../../../constants/keys";
import MessageComponent from "../../partials/message/MessageComponent";

export default class ContactsComponent extends Component<any,Types.ContactsState>{

    constructor(props: any){
        super(props)
        this.state = {
           contacts_message: '', name: '', email: '', message: '', show_spinner: false
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onPrimaryButtonClick = this.onPrimaryButtonClick.bind(this)
        this.onTextAreaChange = this.onTextAreaChange.bind(this)
    }

    componentDidMount(): void {
        setTimeout(()=>{
            document.getElementById('contacts-container')?.classList.add('my-transition')
        },100)
    }

    onInputChange(id: string, value: string): void{
        switch(id){
            case 'name':
                this.setState({name: value})
                break
            case 'email':
                this.setState({email: value})
                break
        }
    }

    onTextAreaChange(id: string, value: string): void{
        switch(id){
            case 'message':
                this.setState({message: value})
                break
        }
    }

    onPrimaryButtonClick(): void{
        this.setState({contacts_message: ''})
        let cr_data: ContactsRequestType = {
            email: this.state.email,
            message: this.state.message,
            name: this.state.name,
            subject: "Richiesta informazioni",
            url: Paths.URL_BASE+Paths.URL_CONTACTS
        }
        let cr: ContactsRequest = new ContactsRequest(cr_data)
        this.setState({show_spinner: true})
        cr.contacts().then(obj => {
            this.setState({show_spinner: false})
            if(!obj[Keys.KEY_DONE]) this.setState({contacts_message: obj[Keys.KEY_MESSAGE]})
        })
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
            onPrimaryButtonClick: this.onPrimaryButtonClick,
            show_spinner: this.state.show_spinner
        }
        return (
            <>
                <TitleComponent title="Pagina dei contatti" />
                <div id="contacts-container">
                    <form>
                        <LabelInputComponent input_id="name" input_type="text" label_text="Nome" onInputChange={this.onInputChange}/>
                        <LabelInputComponent input_id="email" input_type="email" label_text="Email" onInputChange={this.onInputChange}/>
                        <LabelTextareaComponent label_text="Messaggio" textarea_id="message" onTextAreaChange={this.onTextAreaChange}  />
                        <TwoButtonsComponent {...tb_props} />
                        <MessageComponent message={this.state.contacts_message} />
                    </form>
                </div>
            </>
            
        )
    }
}