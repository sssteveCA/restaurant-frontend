import { Component } from "react";
import Types from "../../../constants/types";
import TwoButtonsComponent from "../../partials/buttons/twobuttons/TwoButtonsComponent";
import TitleComponent from "../../partials/title/TitleComponent";

export default class ContactsComponent extends Component<any,any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        let tb_props: Types.TwoButtonsProps =  {
            containerClasses: "flex justify-center sm:justify-evenly flex-col sm:flex-row",
            buttons: [
                {
                    classes: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                    text: "Invia"},
                {
                    classes: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                    text: "Annulla"},
            ]
        }
        return (
            <>
                <TitleComponent title="Pagina dei contatti" />
                <div id="contacts-container">
                    <form>
                        <div className="flex justify-center md:justify-evenly flex-col md:flex-row">
                            <label htmlFor="name">Nome</label>
                            <input id="name" type="text" />
                        </div>
                        <div className="flex justify-center md:justify-evenly flex-col md:flex-row">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" />
                        </div>
                        <div className="flex justify-center md:justify-evenly flex-col md:flex-row">
                            <label htmlFor="message">Messaggio</label>
                            <textarea id="message"></textarea>
                        </div>
                        <TwoButtonsComponent {...tb_props} />
                    </form>
                </div>
            </>
            
        )
    }
}